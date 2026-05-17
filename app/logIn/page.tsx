'use client';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function LogIn() {
  // GPT test code
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }
    window.location.href = '/profile';
    alert('Logged in');
  };

  //================================
  return (
    <main className="min-h-screen bg-body-bg-color px-4 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-xl items-center justify-center">
        <div className="w-full rounded-4xl border border-white/90 bg-white/95 p-8 shadow-[0_40px_100px_-60px_rgba(149,123,255,0.45)] backdrop-blur-md">
          <div className="space-y-4 text-center">
            {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#645dfc]">
              SkillSwap
            </p> */}
            <h1 className="text-3xl font-extrabold text-[#32294f]">
              Sign in to your account
            </h1>
            <p className="text-sm text-paragraph-color">
              Access the curated ecosystem for skill exchange and mentorship.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-[#32294f]">
              Email Address
              <input
                type="email"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f7f5ff] px-4 py-3 text-sm text-[#32294f] outline-none transition duration-200 focus:border-[#645dfc] focus:ring-2 focus:ring-[#645dfc]/20"
              />
            </label>

            <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
              <label className="block text-sm font-medium text-[#32294f]">
                <div className="flex items-center justify-between">
                  Password
                  <Link
                    href="/"
                    className="text-sm font-semibold text-[#4f46e5] hover:text-[#3730a3]"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f7f5ff] px-4 py-3 text-sm text-[#32294f] outline-none transition duration-200 focus:border-[#645dfc] focus:ring-2 focus:ring-[#645dfc]/20"
                />
              </label>
            </div>

            <label className="inline-flex items-center gap-3 text-sm text-paragraph-color">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[#c8c8d4] text-[#645dfc] focus:ring-[#645dfc]"
              />
              Keep me signed in
            </label>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded-3xl bg-linear-to-r from-[#4f46e5] to-[#8b5cf6] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#8b5cf640] transition hover:opacity-95 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-paragraph-color before:h-px before:flex-1 before:bg-slate-300 after:h-px after:flex-1 after:bg-slate-300">
            OR CONTINUE WITH
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-3xl border border-[#e5e7eb] bg-white px-4 text-sm font-semibold text-[#32294f] transition hover:bg-[#f4efff] cursor-pointer">
              Google
            </button>
            <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-3xl border border-[#e5e7eb] bg-white px-4 text-sm font-semibold text-[#32294f] transition hover:bg-[#f4efff] cursor-pointer">
              GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-paragraph-color">
            Don&apos;t have an account?{' '}
            <Link
              href="/signUp"
              className="font-semibold text-[#645dfc] hover:text-[#4f46e5]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
