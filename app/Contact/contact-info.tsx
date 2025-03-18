import { Phone, MapPin, Mail } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6 ">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Chat to us</h3>
          <p className="text-sm text-muted-foreground mb-1">Our friendly team is here to help.</p>
          <a href="mailto:hi@company.com" className="text-sm font-medium">
            agraphicart02@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Visit us</h3>
          <p className="text-sm text-muted-foreground mb-1">Come say hello at our office HQ.</p>
          <p className="text-sm">
            100 Smith Street
            <br />
            Collingwood VIC 3066 AU
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <Phone className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Call us</h3>
          <p className="text-sm text-muted-foreground mb-1">Mon-Fri from 8am to 5pm.</p>
          <a href="tel:+15550000000" className="text-sm font-medium">
            +1 (555) 000-0000
          </a>
        </div>
      </div>
    </div>
  )
}

