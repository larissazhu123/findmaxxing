import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-green-600 rounded-lg p-2">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-green-600">FindMaxxing</h2>
                <p className="text-muted-foreground">Because Our Football Team Already Loses Enough</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="hover:bg-green-50 hover:text-green-600">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}