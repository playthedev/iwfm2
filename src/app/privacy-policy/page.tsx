import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, legalLastUpdated, privacySections } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy Policy | ${company.name}`,
  description: `Learn how ${company.fullName} collects, uses and protects your personal information when you visit our website or engage our facility management services.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`This Privacy Policy describes how ${company.name} collects, uses and safeguards your personal information.`}
      lastUpdated={legalLastUpdated}
      sections={privacySections}
    />
  );
}
