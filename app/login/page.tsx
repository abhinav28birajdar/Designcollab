"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/auth/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/app/auth/firebase";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function LoginPage({ isPopup = false, onClose }: { isPopup?: boolean; onClose?: () => void }) {
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
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
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
