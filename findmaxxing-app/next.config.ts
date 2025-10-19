/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // Allow images from your Supabase Storage bucket
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jtcmjgoibipkopwsvwdk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
