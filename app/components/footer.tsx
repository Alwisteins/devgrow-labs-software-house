import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="relative w-40 h-10">
              <Image src="/logo.svg" alt="logo" fill />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software house yang membangun website & aplikasi sebagai sistem bisnis digital —
              scalable, fast, dan siap bertumbuh.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Website Development</li>
              <li>UI/UX Design</li>
              <li>Web App & Dashboard</li>
              <li>SEO & Performance</li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition">
                <FaGithub size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} devgrow labs. All rights reserved.</p>
          <p>Built with Next.js & modern web stack.</p>
        </div>
      </div>
    </footer>
  );
}
