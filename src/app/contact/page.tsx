import { ContactSection } from "@/components/home/contact-section";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ContactSection />
    </div>
  );
}
