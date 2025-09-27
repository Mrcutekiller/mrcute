import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Secure Your Property?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get a free consultation and custom quote for your security needs. Our experts are ready to help you choose the
          perfect solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  )
}
