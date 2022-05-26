import Footer from "UI/molecules/Footer/Footer";
import Navbar from "UI/molecules/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
