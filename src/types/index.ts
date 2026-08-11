export type UserRole = "user" | "admin";

export type BookingStatus =
  | "pending"
  | "documents_uploaded"
  | "documents_verified"
  | "booking_approved"
  | "equipment_picked_up"
  | "equipment_returned"
  | "completed"
  | "cancelled"
  | "rejected"
  | "damaged"
  | "late_return";

export type DocumentType =
  | "aadhaar"
  | "government_id"
  | "driving_license"
  | "company_id";

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  role: UserRole;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  specifications: string[];
  included_accessories: string[];
  rental_price: number;
  security_deposit: number;
  stock: number;
  status: "active" | "inactive";
  category?: Category;
  product_images?: ProductImage[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  is_primary: boolean;
}

export interface Booking {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  total_days: number;
  total_amount: number;
  security_deposit: number;
  booking_status: BookingStatus;
  created_at: string;
  booking_items?: BookingItem[];
  profile?: Profile;
}

export interface BookingItem {
  id: string;
  booking_id: string;
  product_id: string;
  quantity: number;
  rental_price: number;
  product?: Product;
}

export interface Document {
  id: string;
  booking_id: string;
  document_type: DocumentType;
  storage_path: string;
  file_name: string;
  file_size: number;
  mime_type: string;
  verified: boolean;
}

export interface Consent {
  id: string;
  booking_id: string;
  accepted: boolean;
  accepted_at: string;
}

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  pending: "Pending",
  documents_uploaded: "Documents Uploaded",
  documents_verified: "Documents Verified",
  booking_approved: "Booking Approved",
  equipment_picked_up: "Equipment Picked Up",
  equipment_returned: "Equipment Returned",
  completed: "Completed",
  cancelled: "Cancelled",
  rejected: "Rejected",
  damaged: "Damaged",
  late_return: "Late Return",
};

export const RENTAL_TERMS = [
  "I agree to the rental agreement.",
  "I agree to pay the complete rental amount before collecting equipment.",
  "I agree to pay the refundable security deposit.",
  "I understand that any damage or missing accessories will incur additional charges.",
  "I will inspect the equipment during pickup.",
  "I will return the equipment before the due date.",
  "Equipment pickup must be done from our office.",
];
