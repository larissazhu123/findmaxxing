
  import { supabase } from "@/lib/supabaseClient"; 
 
  
  export const handleGoogleSignIn = async () => {
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
