import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  Video,
  Monitor,
  Webcam,
  Camera,
  Settings,
  Mic,
  Volume2,
  Calendar,
  Clock3,
  ChevronRight,
} from "lucide-react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Recording() {

  const navigate = useNavigate();

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">

        <div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#e6d3c3]">
            New Recording
          </h1>

          <p className="text-base md:text-lg text-[#b89f8d] mt-2">
            Record a website or screen activity
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div className="bg-[#151515] px-4 py-3 rounded-2xl text-blue-500 font-semibold text-lg">
            Credits: 150
          </div>

          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold">
            U
          </div>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2">

          {/* PREVIEW */}

          <div className="bg-[#050b24] rounded-[30px] overflow-hidden">

            <div className="h-[380px] md:h-[450px] flex flex-col items-center justify-center">

              <Video
                size={48}
                className="text-[#b89f8d]"
              />

              <p className="text-lg md:text-xl text-[#b89f8d] mt-6">
                Recording preview will appear here
              </p>

            </div>

            {/* ACTION BUTTONS */}

            <div className="bg-[#111111] border-t border-[#1f1f1f] p-5 flex flex-wrap items-center gap-8">

              <button
                onClick={() =>
                  toast.success(
                    "Recording started successfully"
                  )
                }
                className="flex items-center gap-3 text-white text-lg md:text-xl font-semibold hover:text-blue-500 transition"
              >

                ▶

                Start Recording

              </button>

              <button
                onClick={() =>
                  toast.success(
                    "Screenshot captured and sent to your email"
                  )
                }
                className="flex items-center gap-3 text-white text-lg md:text-xl font-semibold hover:text-blue-500 transition"
              >

                <Camera size={24} />

                Screenshot

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-6">

          {/* SETTINGS */}

          <div className="bg-[#111111] rounded-[30px] p-6">

            <div className="flex items-center gap-3 mb-8">

              <Settings
                size={24}
                className="text-[#e6d3c3]"
              />

              <h2 className="text-2xl font-bold text-[#e6d3c3]">
                Settings
              </h2>

            </div>

            {/* TITLE */}

            <div className="mb-6">

              <label className="text-base md:text-lg text-[#e6d3c3] font-semibold block mb-3">
                Record Title
              </label>

              <input
                type="text"
                placeholder="Enter recording title"
                className="w-full h-14 rounded-2xl bg-transparent border border-[#6e5d50] px-5 text-base text-white outline-none"
              />

            </div>

            {/* URL */}

            <div className="mb-6">

              <label className="text-base md:text-lg text-[#e6d3c3] font-semibold block mb-3">
                Website URL
              </label>

              <input
                type="text"
                placeholder="https://example.com"
                className="w-full h-14 rounded-2xl bg-transparent border border-[#6e5d50] px-5 text-base text-white outline-none"
              />

            </div>

            {/* RECORDING TYPE */}

            <div className="mb-8">

              <label className="text-base md:text-lg text-[#e6d3c3] font-semibold block mb-4">
                Recording Type
              </label>

              <div className="space-y-4">

                <button
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-[#6e5d50]
                    flex
                    items-center
                    gap-4
                    px-5
                    text-blue-500
                    text-base
                    md:text-lg
                    font-semibold
                    hover:border-blue-500
                    hover:bg-[#181818]
                    transition
                    cursor-pointer
                  "
                >

                  <Monitor size={22} />

                  Screen

                </button>

                <button
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-[#6e5d50]
                    flex
                    items-center
                    gap-4
                    px-5
                    text-[#b89f8d]
                    text-base
                    md:text-lg
                    font-semibold
                    hover:border-blue-500
                    hover:bg-[#181818]
                    hover:text-blue-500
                    transition
                    cursor-pointer
                  "
                >

                  <Webcam size={22} />

                  Webcam

                </button>

                <button
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-[#6e5d50]
                    flex
                    items-center
                    gap-4
                    px-5
                    text-[#b89f8d]
                    text-base
                    md:text-lg
                    font-semibold
                    hover:border-blue-500
                    hover:bg-[#181818]
                    hover:text-blue-500
                    transition
                    cursor-pointer
                  "
                >

                  <div className="flex items-center gap-2">

                    <Monitor size={20} />

                    <Webcam size={18} />

                  </div>

                  Screen + Webcam

                </button>

              </div>

            </div>

            {/* AUDIO */}

            <div className="mb-8">

              <h3 className="text-base md:text-lg text-[#e6d3c3] font-semibold mb-5">
                Audio
              </h3>

              <div className="space-y-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3 text-[#b89f8d] text-base">

                    <Mic size={22} />

                    Microphone

                  </div>

                  <input
                    type="checkbox"
                    className="w-5 h-5"
                  />

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3 text-[#b89f8d] text-base">

                    <Volume2 size={22} />

                    System Audio

                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5"
                  />

                </div>

              </div>

            </div>

            {/* QUALITY */}

            <div className="mb-8">

              <label className="text-base md:text-lg text-[#e6d3c3] font-semibold block mb-3">
                Recording Quality
              </label>

              <select className="w-full h-14 rounded-2xl bg-transparent border border-[#6e5d50] px-5 text-base text-white outline-none">

                <option className="bg-[#111111]">
                  HD (720p)
                </option>

                <option className="bg-[#111111]">
                  Full HD (1080p)
                </option>

                <option className="bg-[#111111]">
                  4K
                </option>

              </select>

            </div>

            {/* SECURITY */}

            <div className="border border-blue-700 rounded-2xl p-4 text-blue-500 text-sm leading-relaxed">

              <span className="font-bold">
                Security & Permissions:
              </span>

              {" "}Recording requires screen capture permissions.
              All recordings are encrypted and stored securely.

            </div>

          </div>

        </div>

      </div>

      {/* RECORDS */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold text-[#e6d3c3] mb-3">
          My Records
        </h2>

        <p className="text-lg text-[#b89f8d] mb-8">
          View and manage your recording history
        </p>

        {/* DESKTOP TABLE */}

        <div className="hidden xl:block bg-[#111111] rounded-[30px] overflow-hidden">

          {/* HEADER */}

          <div className="grid grid-cols-5 px-8 py-6 text-[#b89f8d] text-sm border-b border-[#1f1f1f]">

            <div>Title</div>

            <div>Start Date/Time</div>

            <div>End Date/Time</div>

            <div>Status</div>

            <div>Details</div>

          </div>

          {/* ITEM 1 */}

          <div
            onClick={() => navigate("/records/1")}
            className="
              grid
              grid-cols-5
              px-8
              py-8
              items-center
              border-b
              border-[#1f1f1f]
              hover:bg-[#181818]
              transition
              cursor-pointer
            "
          >

            <div className="text-[#e6d3c3] text-lg font-semibold">
              User Authentication Flow
            </div>

            <div className="space-y-2 text-[#b89f8d]">

              <div className="flex items-center gap-2 text-sm">

                <Calendar size={16} />

                2026-05-01

              </div>

              <div className="flex items-center gap-2 text-sm">

                <Clock3 size={16} />

                14:30:00

              </div>

            </div>

            <div className="space-y-2 text-[#b89f8d]">

              <div className="flex items-center gap-2 text-sm">

                <Calendar size={16} />

                2026-05-01

              </div>

              <div className="flex items-center gap-2 text-sm">

                <Clock3 size={16} />

                15:45:00

              </div>

            </div>

            <div>

              <span className="bg-green-900 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                Completed
              </span>

            </div>

            <div className="flex items-center justify-between text-[#b89f8d] text-sm gap-4">

              <p>
                Complete recording of user authentication...
              </p>

              <ChevronRight size={20} />

            </div>

          </div>

          {/* ITEM 2 */}

          <div
            onClick={() => navigate("/records/2")}
            className="
              grid
              grid-cols-5
              px-8
              py-8
              items-center
              hover:bg-[#181818]
              transition
              cursor-pointer
            "
          >

            <div className="text-[#e6d3c3] text-lg font-semibold">
              Dashboard Navigation Test
            </div>

            <div className="space-y-2 text-[#b89f8d]">

              <div className="flex items-center gap-2 text-sm">

                <Calendar size={16} />

                2026-05-02

              </div>

              <div className="flex items-center gap-2 text-sm">

                <Clock3 size={16} />

                09:15:00

              </div>

            </div>

            <div className="space-y-2 text-[#b89f8d]">

              <div className="flex items-center gap-2 text-sm">

                <Calendar size={16} />

                2026-05-02

              </div>

              <div className="flex items-center gap-2 text-sm">

                <Clock3 size={16} />

                10:00:00

              </div>

            </div>

            <div>

              <span className="bg-green-900 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                Completed
              </span>

            </div>

            <div className="flex items-center justify-between text-[#b89f8d] text-sm gap-4">

              <p>
                Recording of dashboard navigation...
              </p>

              <ChevronRight size={20} />

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}