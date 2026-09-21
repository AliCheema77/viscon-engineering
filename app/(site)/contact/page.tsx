import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact | Viscon Engineering",
  description:
    "Get in touch with Viscon Engineering — head office in Gulberg Green, Islamabad, and branch office in D.I. Khan.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 py-16">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk"
          description="Tell us about your project and we'll get back to you shortly."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-8 rounded-2xl border border-black/5 bg-brand-tint/40 p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary">
                Head Office
              </h3>
              <p className="font-sans text-sm text-foreground/80">
                {company.headOffice}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary">
                Branch Office
              </h3>
              <p className="font-sans text-sm text-foreground/80">
                {company.branchOffice}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary">
                Phone
              </h3>
              {company.phones.map((phone) => (
                <p
                  key={phone}
                  className="font-sans text-sm text-foreground/80"
                >
                  {phone}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary">
                Office Hours
              </h3>
              <p className="font-sans text-sm text-foreground/80">
                Mon – Sat: 9:00 AM – 6:00 PM
              </p>
              <p className="font-sans text-sm text-foreground/80">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
