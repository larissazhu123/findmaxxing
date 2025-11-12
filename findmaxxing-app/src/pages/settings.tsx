"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { supabase } from "@/lib/supabaseClient";
import { PostLoginNavbar } from "@/components/PostLoginNavbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Bell,
  Shield,
  Mail,
  LogOut,
  Edit2,
  Calendar,
} from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function SettingsPage() {
  const [nicknameInput, setNicknameInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const { refreshNickname } = useUser();

  // Mock stats
  const userStats = {
    itemsReported: 12,
    itemsReturned: 8,
    joinDate: "September 2024",
  };

  // Fetch user profile
  useEffect(() => {
    const loadProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const accessToken = session?.access_token;
      if (!accessToken) {
        console.warn("No Supabase session found.");
        setLoading(false);
        return;
      }

      try {
        await fetch("/api/auth/syncUser", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const res = await fetch("/api/user/me", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();

        setNicknameInput(data.username || "");
        setUserEmail(data.email || "");
      } catch (err) {
        console.error("Error loading user profile:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    setIsEditing(false);
    const { data: { session } } = await supabase.auth.getSession();
    const accessToken = session?.access_token;
    if (!accessToken) return alert("Not authenticated.");

    try {
      const res = await fetch("/api/user/updateNickname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ newNickname: nicknameInput }),
      });

      if (res.ok) {
        alert("Nickname updated!");
        await refreshNickname(); // ✅ Refresh global context
      } else {
        const err = await res.json();
        alert(`Failed to update nickname: ${err.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error updating nickname:", err);
      alert("An error occurred while updating nickname.");
    }
  };

  const handleNavigateToList = () => {
    window.location.href = "/dashboard";
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50">
        <p className="text-lg text-green-700">Loading profile...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Settings - FindMaxxing</title>
        <meta
          name="description"
          content="Manage your FindMaxxing account settings and preferences"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <PostLoginNavbar
          currentView="settings"
          onNavigate={(view) => {
            if (view === "list") handleNavigateToList();
          }}
          unreadNotifications={3}
        />

        <div className="pt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-green-600 mb-2 text-4xl lg:text-5xl">
                Settings
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your account and preferences
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Profile Card */}
              <div className="lg:col-span-1">
                <Card className="shadow-lg sticky top-24">
                  <CardHeader className="text-center pb-4">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-green-100">
                      <AvatarFallback className="bg-green-600 text-white text-2xl">
                        {nicknameInput
                          ? nicknameInput.substring(0, 2).toUpperCase()
                          : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-green-600">
                      {nicknameInput || "Unnamed User"}
                    </CardTitle>
                    <CardDescription>{userEmail}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <div>
                          <p className="text-sm">Member since</p>
                          <p>{userStats.joinDate}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="text-sm text-muted-foreground">
                        Activity Summary
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-2xl text-green-600">
                            {userStats.itemsReported}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Items Reported
                          </p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-2xl text-green-600">
                            {userStats.itemsReturned}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Items Returned
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* RIGHT COLUMN - Settings */}
              <div className="lg:col-span-2 space-y-6">
                {/* PROFILE SETTINGS */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 rounded-full p-2">
                          <User className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle>Profile Information</CardTitle>
                          <CardDescription>
                            Update your personal details
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                        className="gap-2"
                      >
                        <Edit2 className="h-4 w-4" />
                        {isEditing ? "Cancel" : "Edit"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nickname">Nickname</Label>
                      <Input
                        id="nickname"
                        value={nicknameInput}
                        onChange={(e) =>
                          setNicknameInput(e.target.value.slice(0, 16))
                        }
                        maxLength={16}
                        disabled={!isEditing}
                        className="bg-input-background"
                      />
                      <p className="text-xs text-muted-foreground">
                        Max 16 characters — same as your default username
                        length.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          value={userEmail}
                          disabled
                          className="bg-muted"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Email cannot be changed. Contact support if needed.
                      </p>
                    </div>

                    {isEditing && (
                      <Button onClick={handleSaveProfile} className="w-full">
                        Save Changes
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* NOTIFICATION SETTINGS */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <Bell className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>
                          Manage how you receive updates
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="email-notif">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive email updates when items match your searches
                        </p>
                      </div>
                      <Switch
                        id="email-notif"
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="push-notif">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Get instant alerts for new items in your area
                        </p>
                      </div>
                      <Switch
                        id="push-notif"
                        checked={pushNotifications}
                        onCheckedChange={setPushNotifications}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* PRIVACY & SECURITY */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle>Privacy & Security</CardTitle>
                        <CardDescription>
                          Manage your account security
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Download Your Data
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-destructive hover:text-destructive"
                    >
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>

                {/* LOGOUT */}
                <Card className="shadow-sm border-destructive/50">
                  <CardContent className="pt-6">
                    <Button
                      variant="destructive"
                      className="w-full gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Log Out
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
