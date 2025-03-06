"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/app/auth/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  // Email Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      setMessage("❌ Login failed: " + (error as Error).message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setMessage("✅ Google login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      setMessage("❌ Google login failed: " + (error as Error).message);
    }
  };

  // Phone Number OTP Authentication
  const sendOtp = async () => {
    try {
      if (!phone) {
        setMessage("❌ Please enter a phone number.");
        return;
      }

      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });

      const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      setConfirmationResult(confirmation);
      setMessage("✅ OTP sent to your phone.");
    } catch (error) {
      setMessage("❌ Failed to send OTP: " + (error as Error).message);
    }
  };

  const verifyOtp = async () => {
    try {
      if (!confirmationResult) {
        setMessage("❌ Please request OTP first.");
        return;
      }

      await confirmationResult.confirm(otp);
      setMessage("✅ Phone login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      setMessage("❌ Invalid OTP: " + (error as Error).message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-bold">Welcome back</h2>
        {message && <p className="text-center text-green-500">{message}</p>}

        <button onClick={handleGoogleLogin} className="w-full p-2 bg-gray-700 rounded-lg">Log in with Google</button>

        {/* Email Login */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 rounded bg-gray-700" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 rounded bg-gray-700" />
          <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg">Sign In</button>
        </form>

        {/* Phone OTP Login */}
        <div>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full p-2 rounded bg-gray-700" />
          <button onClick={sendOtp} className="w-full p-2 mt-2 bg-green-600 rounded-lg">Send OTP</button>

          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full p-2 mt-2 rounded bg-gray-700" />
          <button onClick={verifyOtp} className="w-full p-2 mt-2 bg-green-600 rounded-lg">Verify OTP</button>
        </div>

        {/* Recaptcha Container */}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
