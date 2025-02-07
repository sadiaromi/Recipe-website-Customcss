import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>About Us</h3>
            <p>Tasty Recipes is your go-to source for delicious and diverse recipes from around the world.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/recipes">Recipes</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Connect With Us</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/roman-sadia-6b280a2b6">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/sadiaromi">Github</a>
              </li>
              <li>
                <a href="mailto:sadiaroman28@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Tasty Recipes! All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

