/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Mail, Lock } from "lucide-react";
import { supabase } from "../lib/supabaseClient"; 
//deprecated, no longer using the login page
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleGoogleSignIn = async () => {
    console.log("Google sign in clicked");
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${window.location.origin}/callback`,  //Redirects to /callback after successful login which will handle which page to go to.
        },
    });

    if (error) {
        console.error('Error during sign-in:', error.message);
        return;
    }

    //Checks whether the authentication or session events change.
    supabase.auth.onAuthStateChange(async (event, session) => {
        if (session) {
            const userEmail = session.user.email!;
            const domain = userEmail.split('@')[1].toLowerCase().trim(); //gets the email domain.
 
            if (domain !== 'umass.edu') {
                await supabase.auth.signOut();  // Sign out if domain doesn't match
                alert("Access restricted to umass.edu emails only.");
                window.location.replace(window.location.origin); //Redirects back to the homepage
            } else {
                //Redirects to the map/dashboard otherwise
                window.location.replace("/dashboard");
            }
        }
    });
  };


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>Login - FindMaxxing</title>
        <meta name="description" content="Sign in to your FindMaxxing account" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white">
        <Navbar />
        
        <div className="flex items-center justify-center min-h-screen px-4 py-12 pt-20">
          <div className="w-full max-w-md">
            {/* Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-600 rounded-xl p-3">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-green-600 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign In To Use FindMaxxing</p>
            </motion.div>

            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  {/* Google Sign In */}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 bg-white hover:bg-gray-50 text-gray-700 border-gray-300 mb-6"
                    onClick={handleGoogleSignIn}
                  >
                    <GoogleIcon className="mr-3 h-5 w-5" />
                    Continue with Google
                  </Button>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-4 text-gray-500">or</span>
                    </div>
                  </div>

                  {/* Email/Password Form */}
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-start">
                      <Link
                        href="#"
                        className="text-sm text-green-600 hover:text-green-700 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium"
                    >
                      Sign In
                    </Button>
                  </form>

                  {/* Sign Up Link */}
                  <div className="text-center mt-6">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link
                      href="/login"
                      className="text-green-600 hover:text-green-700 font-medium hover:underline"
                    >
                      Sign up
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Footer */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}