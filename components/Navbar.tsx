import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Dhyeya IAS Logo"
            width={110}  // Adjust width
            height={90}  // Restrict height to fit navbar
            className={styles.logo}
          />
        </div>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navItem}>Home</Link>
          <Link href="https://www.dhyeyaias.com/about-us" className={styles.navItem} target="_blank" rel="noopener noreferrer">
  About Us
</Link>

<Link href="https://www.dhyeyaias.com/about-udaan" className={styles.navItem} target="_blank" rel="noopener noreferrer">
  Udaan
</Link>

<Link href="/contact" className={styles.navItem} target="_blank" rel="noopener noreferrer">
  Contact Us
</Link>

        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/LOGO UDAAN.png"
            alt="Dhyeya IAS Logo"
            width={100}  // Adjust width
            height={90}  // Restrict height to fit navbar
            className={styles.logo}
          />
        </div>
        {/* Navigation Links */}
      </div>
    </nav>
  );
};

export default Navbar;
