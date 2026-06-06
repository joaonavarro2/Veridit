export default function Navbar() {
  return (
    <div className="bg-white rounded-2xl shadow px-6 py-4 flex items-center justify-between mb-8">

      <div>
        <h2 className="text-2xl font-bold">
          Welcome Back
        </h2>

        <p className="text-gray-500">
          Manage your recordings and evidence.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="bg-slate-100 px-5 py-3 rounded-xl">

          <p className="text-sm text-gray-500">
            Credits
          </p>

          <h3 className="text-xl font-bold">
            150
          </h3>

        </div>

        <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
          N
        </div>

      </div>

    </div>
  );
}