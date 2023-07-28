import { redirect } from "next/navigation";
export const metadata = {
  title: "Events Page",
  description: "Coming soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("/");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
