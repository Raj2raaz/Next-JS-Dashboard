import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";

export const metadata = {
  title: "Next JS Dashboard",
  description: "This is a project for Next JS Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MenuContextProvider>

        <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
