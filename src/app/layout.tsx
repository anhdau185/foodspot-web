import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodSpot - Find your perfect dining spot",
  description: "Find the perfect restaurant for your next meal",
  keywords: "restaurant, dining, food, recommendations",
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
