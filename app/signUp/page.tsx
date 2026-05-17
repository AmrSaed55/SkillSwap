'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function SignUp() {
  // const [interest, setInterest] = useState<'teach' | 'learn'>('teach');
  const [agreed, setAgreed] = useState(false);
  // GPT test code
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async () => {
    console.log('signup clicked');
    console.log(email);
    console.log(password);
    console.log(username);
    // create user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(error);
    console.log(data);
    if (error) {
      alert(error.message);
      return;
    }

    const user = data.user;

    if (!user) return;

    // create profile
    const { error: profileError } = await supabase.from('profiles').insert({
      id: user.id,
      username,
      email,
      job_title: '',
      bio: '',
      skills: [],
      learning_skills: [],
      rate: 0,
      avatar_url: '',
      reviews: 0,
    });

    if (profileError) {
      alert(profileError.message);
      return;
    }

    alert('Account created');
  };

  //=============================

  return (
    <main className="bg-body-bg-color text-[#32294f] px-6 py-20">
      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-8 max-w-2xl">
          <span className="landing-lable inline-flex items-center gap-2 text-sm font-semibold">
            SkillSwap
          </span>

          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-6xl">
              Enter the{' '}
              <span className="gradient-color">Curated Ecosystem</span> of human
              potential.
            </h1>
            <p className="max-w-xl text-base text-paragraph-color">
              Join a high-fidelity network where knowledge flows freely. Bridge
              the gap between what you know and what you want to achieve.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-4xl border border-[#ede7ff] bg-white px-6 py-5 shadow-sm">
              <p className="text-sm font-semibold text-[#006947]">
                Verified Expertise
              </p>
              <p className="mt-2 text-sm text-paragraph-color">
                Engage with curated mentors and practitioners.
              </p>
            </div>
            <div className="rounded-4xl border border-[#ede7ff] bg-white px-6 py-5 shadow-sm">
              <p className="text-sm font-semibold text-[#312e81]">
                Kinetic Exchange
              </p>
              <p className="mt-2 text-sm text-paragraph-color">
                A community designed for meaningful growth.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-4xl border border-white/90 bg-white/95 p-8 shadow-[0_40px_100px_-60px_rgba(149,123,255,0.45)] backdrop-blur-md">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="mt-2 text-sm text-paragraph-color">
                Start your journey in our editorial skill marketplace.
              </p>
            </div>

            <form className="space-y-5">
              <label className="block text-sm font-medium text-[#32294f]">
                Full Name
                <input
                  type="text"
                  placeholder="Alex Morgan"
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f7f5ff] px-4 py-3 text-sm text-[#32294f] outline-none transition duration-200 focus:border-[#645dfc] focus:ring-2 focus:ring-[#645dfc]/20"
                />
              </label>

              <label className="block text-sm font-medium text-[#32294f]">
                Email Address
                <input
                  type="email"
                  placeholder="alex@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f7f5ff] px-4 py-3 text-sm text-[#32294f] outline-none transition duration-200 focus:border-[#645dfc] focus:ring-2 focus:ring-[#645dfc]/20"
                />
              </label>

              <label className="block text-sm font-medium text-[#32294f]">
                Password
                <input
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f7f5ff] px-4 py-3 text-sm text-[#32294f] outline-none transition duration-200 focus:border-[#645dfc] focus:ring-2 focus:ring-[#645dfc]/20"
                />
              </label>
              {/* 
              <div className="space-y-3">
                <p className="text-sm font-medium text-[#32294f]">Initial Interests</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setInterest('teach')}
                    className={`rounded-3xl border px-4 py-3 text-sm font-semibold transition ${interest === 'teach' ? 'border-[#645dfc] bg-[#e8deff] text-[#4338ca]' : 'border-[#e5e7eb] bg-white text-[#32294f] hover:bg-[#f4efff]'}`}
                  >
                    Teach a Skill
                  </button>
                  <button
                    type="button"
                    onClick={() => setInterest('learn')}
                    className={`rounded-3xl border px-4 py-3 text-sm font-semibold transition ${interest === 'learn' ? 'border-[#645dfc] bg-[#e8deff] text-[#4338ca]' : 'border-[#e5e7eb] bg-white text-[#32294f] hover:bg-[#f4efff]'}`}
                  >
                    Learn a Skill
                  </button>
                </div>
              </div> */}

              <label className="inline-flex items-start gap-3 text-sm text-paragraph-color">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 h-4 w-4 rounded border-[#c8c8d4] text-[#645dfc] focus:ring-[#645dfc]"
                />
                <span className="leading-5">
                  I agree to the{' '}
                  <Link
                    href="/"
                    className="font-semibold text-[#645dfc] hover:text-[#4f46e5]"
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/"
                    className="font-semibold text-[#645dfc] hover:text-[#4f46e5]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="button"
                className="w-full rounded-3xl bg-linear-to-r from-[#5450f4] to-[#8c7bff] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-95 cursor-pointer"
                onClick={handleSignup}
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-sm text-paragraph-color">
              Already have an account?{' '}
              <Link
                href="/logIn"
                className="font-semibold text-[#645dfc] hover:text-[#4f46e5]"
              >
                Log in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
