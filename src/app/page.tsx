
import Link from "next/link";
import ShorteningForm from "../components/ShorteningForm";
import SmallDevicesMenu from '../components/SmallDevicesMenu';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/** Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Ziplink
          </Link>

          {/** Nav Links - hidden on mobile, visible on medium screens and up */}
          <ul className="hidden md:flex items-center gap-8 font-semibold">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                My URLs
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className="hover:text-blue-600 transition-colors"
              >
                Analytics
              </Link>
            </li>
          </ul>

       

          {/** Auth Buttons - also hidden on mobile for now */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signin"
              className="font-semibold hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            {/* This is our primary Call to Action (CTA) */}
            <Link
              href="/signup"
              className="font-semibold text-white bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-700 transition-all"
            >
              Sign Up Free
            </Link>
          </div>

          {/** MENU ICON FOR NAV LINKS ON SMALLER DEVICES */}
          <SmallDevicesMenu />
        </nav>
      </header>

      {/** ===============================================================
       *   MAIN CONTENT
       *   - Uses flexbox to perfectly center the hero section
       *   - `h-[calc(100vh-96px)]` ensures it takes up the remaining height
       * =============================================================== */}
      <main className="h-[calc(100vh-96px)] container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/** Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight select-none">
          Shorten. <span className="text-blue-600">Share.</span> Shine.
        </h1>

        {/** Sub-headline */}
        <p className="mt-4 max-w-2xl text-lg text-gray-500 select-none">
          Ziplink turns long, ugly links into elegant, trackable short URLs.
          Create an account to unlock powerful analytics.
        </p>

        {/** ===============================================================
         *   THE INPUT FORM
         *   - `focus-within` on the parent div gives us the "glow" effect
         *   - Using absolute positioning for the button makes it part of the input
         * =============================================================== */}
        <ShorteningForm />
      </main>
    </div>
  );
}
