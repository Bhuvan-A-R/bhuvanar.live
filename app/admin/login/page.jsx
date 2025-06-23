"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = "bhuvan.ar0101@gmail.com";
const ADMIN_PASSWORD = "123456";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
      // Store login state (simple localStorage for demo)
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6 border border-primary/20"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Admin Login
        </h2>
        <input
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-primary/30 rounded focus:border-primary focus:ring-primary outline-none transition"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-primary/30 rounded focus:border-primary focus:ring-primary outline-none transition"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}