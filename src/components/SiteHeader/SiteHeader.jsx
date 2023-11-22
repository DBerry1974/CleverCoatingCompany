import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Header } from "./Header";
// import { navigation } from "./navigation";

// const navigation = {
//   pages: [
//     { name: "About Us", href: "#" },
//     { name: "Treatments", href: "#" },
//     { name: "Gift Vouchers", href: "#" },
//     { name: "Reviews", href: "#" },
//     { name: "FAQ", href: "#" },
//     { name: "Gallery", href: "#" },
//     { name: "Massage Benefits", href: "#" },
//     { name: "Blog", href: "#" },
//     { name: "Contact", href: "#" },
//   ],
// };

export const SiteHeader = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Header navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
    </>
  );
};
