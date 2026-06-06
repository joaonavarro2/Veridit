import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { loginRequest } from "../../api/authApi";

export default function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="min-h-screen flex bg-[#0b0f14]">

      {/* LEFT SIDE */}

      <div className="w-1/2 bg-[#121821] border-r border-[#1f2937] text-white flex items-center justify-center">

        <div>

          <h1 className="text-6xl font-bold">
            Veridit
          </h1>

          <p className="mt-4 text-xl text-slate-400">
            Digital Evidence Platform
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-1/2 flex items-center justify-center bg-[#0b0f14]">

        <div className="w-full max-w-md p-8 rounded-3xl bg-[#121821] border border-[#1f2937] shadow-2xl">

          <h2 className="text-4xl font-bold text-white mb-8">
            Sign In
          </h2>

          <div className="flex flex-col gap-5">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                bg-[#171f2b]
                border
                border-[#263041]
                text-white
                placeholder:text-slate-500
                p-4
                rounded-2xl
                outline-none
                focus:border-blue-500
              "
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                bg-[#171f2b]
                border
                border-[#263041]
                text-white
                placeholder:text-slate-500
                p-4
                rounded-2xl
                outline-none
                focus:border-blue-500
              "
            />

            <Link
              to="/recover"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              Forgot password?
            </Link>

            <button
              onClick={async () => {

                try {

                  if (!email || !password) {

                    toast.error(
                      "Fill all fields"
                    );

                    return;
                  }

                  const response =
                    await loginRequest(
                      email,
                      password
                    );

                  login(
                    response.usuario.email
                  );

                  toast.success(
                    "Login successful"
                  );

                  navigate(
                    "/dashboard"
                  );

                } catch (error) {

                  toast.error(
                    error.message
                  );

                }

              }}
              className="
                bg-blue-600
                hover:bg-blue-500
                transition
                text-white
                p-4
                rounded-2xl
                font-semibold
                shadow-lg
                shadow-blue-900/30
              "
            >
              Sign In
            </button>

            <Link
              to="/register"
              className="text-center text-slate-400 hover:text-white transition"
            >
              Create account
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}