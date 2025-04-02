import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-[#6c63ff] text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:underline font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:underline font-medium">
              About
            </Link>
            <Link href="/shop" className="hover:underline font-medium">
              Shop
            </Link>
            <Link href="/contact" className="hover:underline font-medium">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm">© 2025 Shoppitilify</div>
        </div>
      </div>
    </footer>
  )
}

