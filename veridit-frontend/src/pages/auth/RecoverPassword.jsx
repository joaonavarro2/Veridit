import { useState } from "react";

import {
  Mail,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  function handleRecovery() {

    if (!email) {

      toast.error(
        "Please enter your email"
      );

      return;
    }

    toast.success(
      `Recovery email sent to ${email}`
    );
  }

  return (

    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-[#121821] rounded-[32px] overflow-hidden shadow-2xl flex">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex w-[38%] bg-[#001a66] relative flex-col justify-between p-12 text-white">

          <div>

            <div className="w-24 h-24 rounded-3xl border border-white/20 flex items-center justify-center mb-8">

              <ShieldCheck size={52} />

            </div>

            <h1 className="text-6xl font-bold mb-6">
              Veridit
            </h1>

            <p className="text-2xl text-white/80 leading-relaxed">
              Recover your account and continue protecting your digital evidence.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl border border-white/20 flex items-center justify-center">
              🔐
            </div>

            <p className="text-lg text-white/70">
              Fast and secure password recovery.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">

          {/* BACK BUTTON */}

          <Link
            to="/"
            className="flex items-center gap-2 text-slate-500 mb-10 hover:text-slate-700 transition"
          >

            <ArrowLeft size={20} />

            Back to login

          </Link>

          {/* HEADER */}

          <div className="mb-12">

            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Forgot Password
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed">
              Enter your email address and we will send you a recovery link.
            </p>

          </div>

          {/* EMAIL */}

          <div className="mb-8">

            <label className="block mb-3 font-semibold text-slate-800">
              Email Address
            </label>

            <div className="border rounded-2xl flex items-center px-5 h-16">

              <Mail className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full h-full outline-none px-4"
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            onClick={handleRecovery}
            className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold transition"
          >
            Send Recovery Email
          </button>

          {/* FOOTER */}

          <p className="text-center text-slate-500 text-lg mt-8">

            Remember your password?

            <Link
              to="/"
              className="text-blue-600 font-semibold ml-2"
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}