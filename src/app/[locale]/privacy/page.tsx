import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI-OS",
  description: "Privacy policy for AI-OS enterprise infrastructure platform.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-6 leading-7">
        This is a placeholder privacy policy. AI-OS respects user privacy and
        is committed to protecting enterprise and organizational data.
      </p>
      <p className="mb-6 leading-7">
        We do not collect personal data through this website form at this
        stage. Enterprise deployments follow contractual data protection
        agreements and compliance standards.
      </p>
      <p className="leading-7">
        For detailed information regarding enterprise data handling, please
        contact our team directly.
      </p>
    </main>
  );
}
