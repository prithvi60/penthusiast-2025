import "../globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import SmoothScroll from "@/components/UI/SmoothScroll";

export default function SiteLayout({ children }) {
  return (
    <div>
      <main className={`relative`}>
        <NavBar />
        {children}
        <SmoothScroll />
        <Footer />
      </main>
    </div>
  );
}
