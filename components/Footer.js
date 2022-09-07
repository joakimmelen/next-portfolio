import Link from "next/link"
import footerStyles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <div class="container">
            <p>Joakim Melén</p>
            <p><a href="mailto:joakimmelen@mail.com">joakimmelen@mail.com</a></p>
        </div>
    </footer>
  )
}

export default Footer