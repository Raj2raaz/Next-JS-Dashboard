import "./globals.css";


export const metadata = {
  title: "Next JS Dashboard",
  description: "This is a project for Next JS Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
