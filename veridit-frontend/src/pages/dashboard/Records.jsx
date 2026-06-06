import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  Calendar,
  Clock3,
  FileText,
  Download,
  User,
  Hash,
  Video,
  Image,
} from "lucide-react";

import toast from "react-hot-toast";

export default function RecordDetails() {

  return (

    <DashboardLayout>

      {/* PAGE HEADER */}

      <div className="mb-10">

        <h1 className="text-3xl md:text-4xl font-bold text-[#e6d3c3]">
          Record Details
        </h1>

        <p className="text-[#b89f8d] mt-2 text-base md:text-lg">
          Detailed information about this recording
        </p>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2 space-y-8">

          {/* GENERAL INFO */}

          <div className="bg-[#111111] rounded-[30px] p-8">

            <h2 className="text-2xl font-bold text-[#e6d3c3] mb-8">
              General Record Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* TITLE */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  Title
                </p>

                <h3 className="text-[#f3e5d8] text-2xl font-semibold">
                  User Authentication Flow
                </h3>

              </div>

              {/* STATUS */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  Status
                </p>

                <span className="bg-green-900 text-green-400 px-5 py-2 rounded-full text-sm font-semibold">
                  Completed
                </span>

              </div>

              {/* START */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  Start Date/Time
                </p>

                <div className="flex items-center gap-3 text-[#f3e5d8] text-xl">

                  <Calendar size={20} />

                  2026-05-01 14:30:00

                </div>

              </div>

              {/* END */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  End Date/Time
                </p>

                <div className="flex items-center gap-3 text-[#f3e5d8] text-xl">

                  <Calendar size={20} />

                  2026-05-01 15:45:00

                </div>

              </div>

            </div>

            {/* DETAILS */}

            <div className="mt-10">

              <p className="text-[#b89f8d] text-lg mb-3">
                Details/Description
              </p>

              <p className="text-[#f3e5d8] text-2xl leading-relaxed">

                Complete recording of user authentication
                and onboarding process

              </p>

            </div>

          </div>

          {/* TECHNICAL DETAILS */}

          <div className="bg-[#111111] rounded-[30px] p-8">

            <h2 className="text-2xl font-bold text-[#e6d3c3] mb-8">
              Technical Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* ID */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  System-Generated ID
                </p>

                <div className="flex items-center gap-3 text-[#f3e5d8] text-2xl">

                  <Hash size={22} />

                  REC-2026-001234

                </div>

              </div>

              {/* DURATION */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  Duration
                </p>

                <div className="flex items-center gap-3 text-[#f3e5d8] text-2xl">

                  <Clock3 size={22} />

                  1h 15m

                </div>

              </div>

              {/* DATA TYPES */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-4">
                  Data Types Recorded
                </p>

                <div className="flex flex-wrap gap-4">

                  <div className="bg-[#1b2238] text-blue-500 px-4 py-2 rounded-full flex items-center gap-2">

                    <Video size={18} />

                    Video

                  </div>

                  <div className="bg-[#1b2238] text-blue-500 px-4 py-2 rounded-full flex items-center gap-2">

                    <Image size={18} />

                    Screenshots

                  </div>

                </div>

              </div>

              {/* USER */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  User Responsible
                </p>

                <div className="flex items-center gap-3 text-[#f3e5d8] text-2xl">

                  <User size={22} />

                  John Doe

                </div>

              </div>

              {/* IMAGES */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  Number of Images
                </p>

                <h3 className="text-[#f3e5d8] text-3xl font-semibold">
                  45
                </h3>

              </div>

              {/* VIDEOS */}

              <div>

                <p className="text-[#b89f8d] text-lg mb-3">
                  Number of Videos
                </p>

                <h3 className="text-[#f3e5d8] text-3xl font-semibold">
                  3
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <div className="bg-[#111111] rounded-[30px] p-8 sticky top-6">

            <h2 className="text-2xl font-bold text-[#e6d3c3] mb-10">
              Actions
            </h2>

            {/* REPORT */}

            <button
              onClick={() =>
                toast.success(
                  "Report generated successfully"
                )
              }
              className="
                w-full
                flex
                items-center
                gap-4
                text-[#f3e5d8]
                text-xl
                font-semibold
                hover:text-blue-500
                transition
                mb-8
              "
            >

              <FileText size={24} />

              Generate Report

            </button>

            {/* DOWNLOAD */}

            <button
              onClick={() =>
                toast.success(
                  "ZIP file download started"
                )
              }
              className="
                w-full
                flex
                items-center
                gap-4
                text-[#f3e5d8]
                text-xl
                font-semibold
                hover:text-blue-500
                transition
                mb-14
              "
            >

              <Download size={24} />

              Download ZIP

            </button>

            {/* FILE INFO */}

            <div>

              <h3 className="text-2xl font-bold text-[#e6d3c3] mb-8">
                File Information
              </h3>

              <div className="space-y-6">

                <div>

                  <p className="text-[#b89f8d] text-lg mb-2">
                    File Name:
                  </p>

                  <p className="text-[#f3e5d8] text-xl">
                    auth-flow-recording.zip
                  </p>

                </div>

                <div>

                  <p className="text-[#b89f8d] text-lg mb-2">
                    File Size:
                  </p>

                  <p className="text-[#f3e5d8] text-xl">
                    156 MB
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}