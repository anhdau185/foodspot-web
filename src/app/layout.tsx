import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What Should I Eat? - Dining Suggestions App",
  description: "Find the perfect restaurant for your next meal in Vietnam",
  keywords: "restaurant, dining, food, Vietnam, recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
