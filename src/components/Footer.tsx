import FooterLogo from "./footer/FooterLogo";
import QuickLinks from "./footer/QuickLinks";
import ContactInfo from "./footer/ContactInfo";
import SocialLinks from "./footer/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLogo />
          <QuickLinks />
          <ContactInfo />
          <SocialLinks />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LiftNHaul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;