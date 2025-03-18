"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/auth/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/app/auth/firebase";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginForm({ isPopup = false, onClose }: { isPopup?: boolean; onClose?: () => void }) {
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
      if (isPopup && onClose) {
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 1500);
      } else {
        setTimeout(() => router.push("/"), 1500);
      }
    } catch (error) {
      setMessage("❌ Login failed: " + (error as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
      }
      setMessage("✅ Google login successful! Redirecting...");
      if (isPopup && onClose) {
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 1500);
      } else {
        setTimeout(() => router.push("/"), 1500);
      }
    } catch (error) {
      setMessage("❌ Google login failed: " + (error as Error).message);
    }
  };

  return (
    <div className={`${isPopup ? "" : "flex min-h-screen items-center justify-center bg-gray-900"} text-white`}>
      <Card className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
        <CardHeader className="space-y-1 p-0">
          <CardTitle className="text-center text-2xl font-bold">Welcome back</CardTitle>
          {message && (
            <p className={`text-center ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>{message}</p>
          )}
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full p-2 bg-gray-700 rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
          >
            Log in with Google
          </button>
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-700 flex-grow"></div>
            <div className="mx-4 text-gray-400">or</div>
            <div className="border-t border-gray-700 flex-grow"></div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-700"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-700"
              required
            />
            <button type="submit" className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </form>
        </CardContent>
        <CardFooter className="p-0">
          <p className="text-center w-full">
            Don't have an account?{" "}
            <a href="/Signuppage" className="text-blue-400 hover:underline">
              Sign Up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
