import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  // Replace "YOUR_PUBLISHABLE_KEY" with your actual Clerk publishable key
  // from your Clerk Dashboard
  return (
    <ClerkProvider publishableKey="pk_test_dGhvcm91Z2gtdHJvdXQtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA" {...pageProps}>
      <Navbar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
