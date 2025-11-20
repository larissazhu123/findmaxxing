import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
//auth handler, redirects based on email domain
export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        console.error('Auth error:', error);
        router.replace('/login');
        return;
      }

      const email = data.user.email;
      if(email === undefined){
        throw "Error email is not defined"
      }
      const domain = email.split('@')[1];

      if (domain !== 'umass.edu') {
        alert("Access restricted to umass.edu emails only.");
        router.replace('/');
      } else { // domain === "umass.edu"
        router.replace('/dashboard');
      } 
    };
    handleRedirect();
    
  }, [router]);

  return <p>Redirecting after sign-in...</p>;
}