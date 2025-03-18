import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube, MessageCircle, Dribbble, DiscIcon as Discord } from "lucide-react"

export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>

      <Link
        href="https://wa.me/15550000000"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">WhatsApp</span>
      </Link>

      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>

      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">X (Twitter)</span>
      </Link>

      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Youtube className="h-5 w-5" />
        <span className="sr-only">YouTube</span>
      </Link>

      <Link
        href="https://behance.net"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Dribbble className="h-5 w-5" />
        <span className="sr-only">Behance</span>
      </Link>

      <Link
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Discord className="h-5 w-5" />
        <span className="sr-only">Discord</span>
      </Link>
    </div>
  )
}

