import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "./globals.css";
import "@/styles/menuPage.css";
import "@/styles/modify.css";
import "@/styles/style.css";
import "@/styles/swiper-bundle.min.css";

export const metadata = {
  title: "설빙",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 웹폰트 */}
        <link rel="stylesheet" href="https://use.typekit.net/pxi1xil.css" />
      </head>
      <body className="wrap">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
