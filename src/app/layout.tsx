import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Striikers — AI Transformation Partner for Indian Enterprises",
  description:
    "Striikers partners with Indian enterprises to move through the full AI transformation journey — audit, awareness, capability building, and implementation. Based in Hyderabad.",
  openGraph: {
    title: "Striikers — AI Transformation Partner for Indian Enterprises",
    description:
      "From AI Audit to full implementation. Function-specific workshops, agentic workflow builds, and ongoing advisory for Indian enterprises.",
    type: "website",
    url: "https://striikers.in",
    images: [{ url: "https://striikers.in/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Striikers — AI Transformation Partner",
    description:
      "AI Audit, capability workshops, and workflow implementation for Indian enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
