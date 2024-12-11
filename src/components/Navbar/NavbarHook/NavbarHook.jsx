import "./NavbarMobile.css"

const NavbarHook = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({maxWidth: "1150px"});
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const closeMobileMenu = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  }
};
