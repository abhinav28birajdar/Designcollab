"use client";

import { useAuth } from "@/app/hooks/useAuth";

export default function Dashboard() {
  const user = useAuth();

  return user ? <div>Welcome, {user.email}</div> : null;
}
