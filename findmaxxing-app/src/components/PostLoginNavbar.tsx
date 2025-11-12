"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, List, Bell, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/UserContext";

interface PostLoginNavbarProps {
  currentView?: "list" | "settings";
  onNavigate?: (view: "list" | "settings") => void;
  unreadNotifications?: number;
  className?: string;
}

export function PostLoginNavbar({
  currentView = "list",
  onNavigate,
  unreadNotifications = 0,
  className,
}: PostLoginNavbarProps) {
  const { nickname, isReady } = useUser();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm ${
        className || ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="bg-green-600 rounded-lg p-2">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-green-600 font-semibold">FindMaxxing</h2>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant={currentView === "list" ? "default" : "ghost"}
              onClick={() =>
                onNavigate ? onNavigate("list") : (window.location.href = "/dashboard")
              }
              className="gap-2"
            >
              <List className="h-4 w-4" />
              Browse Items
            </Button>

            <Button variant="ghost" className="gap-2 relative">
              <Bell className="h-4 w-4" />
              Notifications
              {unreadNotifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-xs">
                  {unreadNotifications}
                </Badge>
              )}
            </Button>

            {/* Profile / Nickname Button */}
            <Button
              variant="ghost"
              onClick={() => onNavigate?.("settings")}
              className="gap-2 bg-green-50 hover:bg-green-100 text-green-700 font-medium transition-colors"
            >
              <User className="h-4 w-4 text-green-700" />
              {isReady ? nickname : "Loading..."}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                onNavigate ? onNavigate("list") : (window.location.href = "/dashboard")
              }
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate?.("settings")}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
