import Link from "next/link";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <Container className="flex flex-col gap-4 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>VGK Trade ROI Project</p>
          <p className="text-xs text-mist/80">© 2026 Golden Edge Analytics. All rights reserved.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/methodology" className="hover:text-gold-bright">
            Methodology
          </Link>
          <Link href="/dashboards" className="hover:text-gold-bright">
            Dashboards
          </Link>
          <Link href="/trade-notes" className="hover:text-gold-bright">
            Trade Notes
          </Link>
          <Link href="/about" className="hover:text-gold-bright">
            About
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
