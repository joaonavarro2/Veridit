import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  CreditCard,
  Video,
  TrendingUp,
  Clock3,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {

  const navigate = useNavigate();
  const {
      user,
      atualizarUsuario,
    } = useAuth();

    useEffect(() => {

      atualizarUsuario();

    }, []);

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-3 text-xl">
          Welcome back! Here's your overview
        </p>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {/* CARD 1 */}

        <div
          className="
            bg-[#151821]
            border
            border-[#232834]
            rounded-3xl
            p-8
            h-[210px]
            flex
            flex-col
            justify-between
            shadow-xl
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#1c2433]
              flex
              items-center
              justify-center
            "
          >

            <CreditCard
              size={28}
              className="text-blue-500"
            />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-white">
               {user?.saldo_creditos ?? 0}
            </h2>

            <p className="text-slate-400 text-lg mt-2">
              Available Credits
            </p>

          </div>

        </div>

        {/* CARD 2 */}

        <div
          className="
            bg-[#151821]
            border
            border-[#232834]
            rounded-3xl
            p-8
            h-[210px]
            flex
            flex-col
            justify-between
            shadow-xl
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#062b1c]
              flex
              items-center
              justify-center
            "
          >

            <Video
              size={28}
              className="text-green-400"
            />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-white">
              12
            </h2>

            <p className="text-slate-400 text-lg mt-2">
              Total Recordings
            </p>

          </div>

        </div>

        {/* CARD 3 */}

        <div
          className="
            bg-[#151821]
            border
            border-[#232834]
            rounded-3xl
            p-8
            h-[210px]
            flex
            flex-col
            justify-between
            shadow-xl
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#211933]
              flex
              items-center
              justify-center
            "
          >

            <TrendingUp
              size={28}
              className="text-purple-400"
            />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-white">
              3
            </h2>

            <p className="text-slate-400 text-lg mt-2">
              This Month
            </p>

          </div>

        </div>

        {/* CARD 4 */}

        <div
          className="
            bg-[#151821]
            border
            border-[#232834]
            rounded-3xl
            p-8
            h-[210px]
            flex
            flex-col
            justify-between
            shadow-xl
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#332300]
              flex
              items-center
              justify-center
            "
          >

            <Clock3
              size={28}
              className="text-orange-400"
            />

          </div>

          <div>

            <h2 className="text-5xl font-bold text-white">
              8.5
            </h2>

            <p className="text-slate-400 text-lg mt-2">
              Total Hours
            </p>

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div
        className="
          bg-[#151821]
          border
          border-[#232834]
          rounded-[30px]
          p-8
          shadow-xl
        "
      >

        <h2 className="text-4xl font-bold text-white mb-8">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* RECORDING */}

          <button
            onClick={() => navigate("/recording")}
            className="
              border
              border-[#3a4458]
              rounded-3xl
              p-10
              flex
              flex-col
              items-center
              justify-center
              text-center
              hover:border-blue-500
              hover:bg-[#1b2230]
              transition-all
              duration-200
            "
          >

            <Video
              size={42}
              className="text-blue-500 mb-6"
            />

            <h3 className="text-4xl font-bold text-white">
              New Recording
            </h3>

            <p className="text-slate-400 text-lg mt-4">
              Start a new screen recording
            </p>

          </button>

          {/* BUY CREDITS */}

          <button
            onClick={() => navigate("/buy-credits")}
            className="
              border
              border-[#3a4458]
              rounded-3xl
              p-10
              flex
              flex-col
              items-center
              justify-center
              text-center
              hover:border-blue-500
              hover:bg-[#1b2230]
              transition-all
              duration-200
            "
          >

            <CreditCard
              size={42}
              className="text-blue-500 mb-6"
            />

            <h3 className="text-4xl font-bold text-white">
              Buy Credits
            </h3>

            <p className="text-slate-400 text-lg mt-4">
              Purchase more credits
            </p>

          </button>

          {/* REPORTS */}

          <button
            onClick={() => navigate("/records")}
            className="
              border
              border-[#3a4458]
              rounded-3xl
              p-10
              flex
              flex-col
              items-center
              justify-center
              text-center
              hover:border-blue-500
              hover:bg-[#1b2230]
              transition-all
              duration-200
            "
          >

            <TrendingUp
              size={42}
              className="text-blue-500 mb-6"
            />

            <h3 className="text-4xl font-bold text-white">
              View Reports
            </h3>

            <p className="text-slate-400 text-lg mt-4">
              Access your recording history
            </p>

          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}