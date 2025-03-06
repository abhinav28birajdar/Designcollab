"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/auth/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => router.push("/Helpai"), 2000);
    } catch (error) {
      setMessage("❌ Login failed: " + (error as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setMessage("✅ Google login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (error) {
      setMessage("❌ Google login failed: " + (error as Error).message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-bold">Welcome back</h2>
        {message && <p className="text-center text-green-500">{message}</p>}
        <button onClick={handleGoogleLogin} className="w-full p-2 bg-gray-700 rounded-lg">Log in with Google</button>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
           className="w-full p-2 rounded bg-gray-700" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" className="w-full p-2 rounded bg-gray-700" required />
          <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg">Sign In</button>
        </form>
        <p className="text-center">
          Don't have an account? <a href="/Signuppage" className="text-blue-400">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
