import {
  LayoutDashboard,
  CreditCard,
  Video,
  FileText,
  LogOut,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function DashboardLayout({ children }) {

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [

    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      label: "Buy Credits",
      icon: CreditCard,
      path: "/buy-credits",
    },

    {
      label: "Recording",
      icon: Video,
      path: "/recording",
    },

    {
      label: "Records",
      icon: FileText,
      path: "/records",
    },

  ];

  return (

    <div className="min-h-screen flex bg-[#0f1115] text-white overflow-hidden">

      {/* SIDEBAR */}

      <aside
        className="
          w-[290px]
          min-h-screen
          bg-[#151821]
          border-r
          border-[#232834]
          flex
          flex-col
          justify-between
          px-6
          py-8
          shadow-2xl
        "
      >

        {/* TOP */}

        <div>

          {/* LOGO */}

          <div className="mb-14">

            <h1 className="text-4xl font-bold tracking-tight text-white">
              Veridit
            </h1>

            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              Digital Evidence Platform
            </p>

          </div>

          {/* NAVIGATION */}

          <nav className="flex flex-col gap-3">

            {
              menuItems.map((item) => {

                const Icon = item.icon;

                const isActive =
                  location.pathname === item.path;

                return (

                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex
                      items-center
                      gap-4
                      px-5
                      py-4
                      rounded-2xl
                      transition-all
                      duration-200
                      font-medium
                      text-[15px]

                      ${
                        isActive
                          ? `
                            bg-blue-600
                            text-white
                            shadow-lg
                            shadow-blue-900/40
                          `
                          : `
                            bg-[#1a1f2b]
                            text-slate-300
                            hover:bg-[#222938]
                            hover:text-white
                          `
                      }
                    `}
                  >

                    <Icon size={21} />

                    {item.label}

                  </Link>

                );
              })
            }

          </nav>

        </div>

        {/* LOGOUT */}

        <button
          onClick={() => navigate("/")}
          className="
            flex
            items-center
            gap-4
            bg-[#1a1f2b]
            hover:bg-red-600
            transition-all
            duration-200
            text-slate-300
            hover:text-white
            px-5
            py-4
            rounded-2xl
            font-medium
            text-[15px]
          "
        >

          <LogOut size={21} />

          Logout

        </button>

      </aside>

      {/* MAIN CONTENT */}

      <main
        className="
          flex-1
          bg-[#0f1115]
          overflow-y-auto
          p-8
        "
      >

        <div className="max-w-[1600px] mx-auto">

          {children}

        </div>

      </main>

    </div>
  );
}