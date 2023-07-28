import "@/styles/globals.css";

export const metadata = {
  title: "Task",
  description: "Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
