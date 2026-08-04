import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, legalLastUpdated, termsSections } from "@/lib/content";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${company.name}`,
  description: `Terms & Conditions for using the ${company.fullName} website and engaging our housekeeping, deep cleaning, sanitization and facility management services.`,
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro={`These Terms & Conditions apply to your use of the ${company.name} website and to any Services you engage us for. Please read them carefully.`}
      lastUpdated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
