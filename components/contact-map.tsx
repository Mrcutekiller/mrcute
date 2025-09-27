export function ContactMap() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
          <p className="text-muted-foreground">
            Visit our office in Bole Dembel, Amir Plaza for in-person consultations and support
          </p>
        </div>

        <div className="bg-card rounded-lg overflow-hidden shadow-xl border border-border">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6177618935!2d38.78394!3d9.0084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pin Trading Location - Bole Dembel, Amir Plaza, Addis Ababa"
            />
          </div>
          <div className="p-6 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">Bole Dembel, Amir Plaza, Addis Ababa</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Parking</h3>
                <p className="text-muted-foreground text-sm">Free parking available on-site</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Public Transport</h3>
                <p className="text-muted-foreground text-sm">Accessible by bus and taxi services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
