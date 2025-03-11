"use client";
import { useEffect, useState, useRef } from "react";
import { auth } from "@/app/auth/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/app/auth/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { updateProfile } from "firebase/auth";

export default function UserProfilePage() {
  const [userData, setUserData] = useState<{
    firstName: string;
    lastName: string;
    username: string;
    mobileNumber: string;
    photoURL: string;
  } | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data() as {
            firstName: string;
            lastName: string;
            username: string;
            mobileNumber: string;
            photoURL: string;
          });
        }
      } else {
        router.push("/login");
      }
    };

    fetchUserData();
  }, [router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      router.push("/login");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const username = formData.get("username") as string;
    const mobileNumber = formData.get("mobileNumber") as string;

    try {
      let photoURL = userData?.photoURL || "";

      // Upload profile image if provided
      if (profileImage) {
        const storageRef = ref(storage, `profile_images/${user.uid}`);
        await uploadBytes(storageRef, profileImage);
        photoURL = await getDownloadURL(storageRef);
      }

      // Update user profile in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          firstName,
          lastName,
          username,
          mobileNumber,
          photoURL,
        },
        { merge: true }
      );

      // Update user profile in Firebase Auth
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL,
      });

      alert("Profile updated successfully!");
      window.location.reload(); // Refresh to reflect changes
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Profile</h2>
        {userData ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center">
              <div
                onClick={triggerFileInput}
                className="relative w-24 h-24 rounded-full bg-gray-700 cursor-pointer overflow-hidden flex items-center justify-center border-2 border-blue-500 hover:opacity-80"
              >
                {imagePreview || userData.photoURL ? (
                  <img
                    src={imagePreview || userData.photoURL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Add Photo</span>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <p className="text-sm text-gray-400 mt-2">Profile picture</p>
            </div>
            <input
              type="text"
              name="firstName"
              defaultValue={userData.firstName}
              placeholder="First Name"
              className="w-full p-2 rounded bg-gray-700"
              required
            />
            <input
              type="text"
              name="lastName"
              defaultValue={userData.lastName}
              placeholder="Last Name"
              className="w-full p-2 rounded bg-gray-700"
              required
            />
            <input
              type="text"
              name="username"
              defaultValue={userData.username}
              placeholder="Username"
              className="w-full p-2 rounded bg-gray-700"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              defaultValue={userData.mobileNumber}
              placeholder="Mobile Number"
              className="w-full p-2 rounded bg-gray-700"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Update Profile
            </button>
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}