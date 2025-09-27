import Link from "next/link"
import { Shield, MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-primary mb-4">
              <Shield className="h-8 w-8" />
              <span>Pin Trading</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Security & Automation Solutions providing professional installation, sales, and maintenance services. Your
              safety is our mission.
            </p>
            <p className="text-primary font-semibold text-lg">"Security is not an option."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Bole Dembel, Amir Plaza, Addis Ababa</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+251 985 66 66 99</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Pintech@pintrading.et</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">www.pintrading.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Pin Trading - Security & Automation Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
