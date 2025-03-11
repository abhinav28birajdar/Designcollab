'use client'
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/app/auth/firebase";
import { Plus } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      for (let file of Array.from(files)) {
        const storageRef = ref(storage, `uploads/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setImages(prev => [...prev, url]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black-100 p-8 relative ">

      <div className="w-full text-amber-700 font-[1000]  bg-white p-6 rounded-lg shadow-lg">
     GALLLERY 
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt="Uploaded" className="w-full h-auto object-contain rounded-lg" />
          ))}
        </div>
      </div>
      <label className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer">
        <Plus size={24} />
        <input type="file" multiple onChange={handleUpload} className="hidden" />
      </label>
    </div>
  );
}
