import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  CreditCard,
  Video,
  FileText,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6 flex flex-col">

      <div>

        <h1 className="text-4xl font-bold mb-12">
          Veridit
        </h1>

        <nav className="flex flex-col gap-3">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition"
          >
            <LayoutDashboard size={22} />
            Dashboard
          </Link>

          <Link
            to="/credits"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition"
          >
            <CreditCard size={22} />
            Buy Credits
          </Link>

          <Link
            to="/recording"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition"
          >
            <Video size={22} />
            Recording
          </Link>

          <Link
            to="/records"
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition"
          >
            <FileText size={22} />
            Records
          </Link>

        </nav>

      </div>

      <Link
        to="/logout"
        className="flex items-center gap-3 p-4 rounded-xl bg-red-600 hover:bg-red-700 transition mt-auto"
      >
        <LogOut size={22} />
        Logout
      </Link>

    </aside>
  );
}