import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Globe, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Bole Dembel, Amir Plaza", "Addis Ababa, Ethiopia"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+251 985 66 66 99"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["Pintech@pintrading.et"],
  },
  {
    icon: Globe,
    title: "Website",
    details: ["www.pintrading.et"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Multiple ways to reach us. We're here to help with all your security needs.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <Card
              key={detail.title}
              className="bg-background border-border hover:border-primary/50 transition-colors duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <detail.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{detail.title}</h3>
                    {detail.details.map((item, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Emergency Support</h3>
            <p className="text-muted-foreground mb-4">
              Need immediate assistance with your security system? Our emergency support team is available 24/7.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="mr-2 h-4 w-4" />
              Call Emergency Line
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
