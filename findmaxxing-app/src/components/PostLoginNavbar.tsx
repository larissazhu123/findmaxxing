import { Button } from "@/components/ui/button";
import { MapPin, List, Settings, Bell, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostLoginNavbarProps {
  currentView?: "list" | "settings";
  onNavigate?: (view: "list" | "settings") => void;
  onReportItem?: () => void;
  userNickname?: string;
  unreadNotifications?: number;
  className?: string;
}

export function PostLoginNavbar({ 
  currentView = "list",
  onNavigate,
  onReportItem,
  userNickname = "User",
  unreadNotifications = 0,
  className 
}: PostLoginNavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-600 rounded-lg p-2">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-green-600">FindMaxxing</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant={currentView === "list" ? "default" : "ghost"}
              onClick={() => {
                if (onNavigate) {
                  onNavigate("list");
                } else {
                  window.location.href = "/dashboard";
                }
              }}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              Browse Items
            </Button>

            <Button
              variant="ghost"
              onClick={onReportItem}
              className="gap-2 bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800"
            >
              <Plus className="h-4 w-4" />
              Report Item
            </Button>

            <Button
              variant="ghost"
              className="gap-2 relative"
            >
              <Bell className="h-4 w-4" />
              Notifications
              {unreadNotifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-xs">
                  {unreadNotifications}
                </Badge>
              )}
            </Button>

            <Button
              variant={currentView === "settings" ? "default" : "ghost"}
              onClick={() => onNavigate?.("settings")}
              className="gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onReportItem}
              className="bg-green-50 text-green-700"
            >
              <Plus className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (onNavigate) {
                  onNavigate("list");
                } else {
                  window.location.href = "/dashboard";
                }
              }}
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate?.("settings")}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}