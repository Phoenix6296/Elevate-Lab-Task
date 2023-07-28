import { Navbar, Sidebar } from "@/components/common";
import "@/styles/globals.css";

export const metadata = {
  title: "Task",
  description: "Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
