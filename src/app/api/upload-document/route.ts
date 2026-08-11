import { isSupabaseConfigured } from "@/lib/supabase/client";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const bookingId = formData.get("booking_id") as string;
  const documentType = formData.get("document_type") as string;

  if (!file || !bookingId || !documentType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      document: {
        id: crypto.randomUUID(),
        booking_id: bookingId,
        document_type: documentType,
        file_name: file.name,
        file_size: file.size,
        mime_type: file.type,
        verified: false,
      },
      message: "Document uploaded (demo mode)",
    });
  }

  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const ext = file.name.split(".").pop();
    const storagePath = `documents/${user.id}/${documentType}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(storagePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: doc, error: docError } = await supabase
      .from("documents")
      .insert({
        booking_id: bookingId,
        document_type: documentType,
        storage_path: storagePath,
        file_name: file.name,
        file_size: file.size,
        mime_type: file.type,
        verified: false,
      })
      .select()
      .single();

    if (docError) throw docError;
    return NextResponse.json({ document: doc });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
