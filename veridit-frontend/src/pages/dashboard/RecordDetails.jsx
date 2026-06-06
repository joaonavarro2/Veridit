import DashboardLayout from "../../components/layout/DashboardLayout";

export default function RecordDetails() {
  return (
    <DashboardLayout>

      <h1 className="text-5xl font-bold mb-10">
        Record Details
      </h1>

      <div className="grid grid-cols-2 gap-8">

        <div className="bg-[#121821] p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold mb-6">
            General Information
          </h2>

          <div className="flex flex-col gap-4 text-lg">

            <p>
              <strong>Title:</strong> Amazon Evidence
            </p>

            <p>
              <strong>Website:</strong> amazon.com
            </p>

            <p>
              <strong>Status:</strong> Completed
            </p>

            <p>
              <strong>Start:</strong> 10:00
            </p>

            <p>
              <strong>End:</strong> 10:30
            </p>

          </div>

        </div>

        <div className="bg-[#121821] p-8 rounded-2xl shadow">

          <h2 className="text-3xl font-bold mb-6">
            Files
          </h2>

          <div className="flex flex-col gap-4">

            <button className="bg-blue-600 text-white p-4 rounded-xl">
              Generate Report
            </button>

            <button className="bg-slate-900 text-white p-4 rounded-xl">
              Download ZIP
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}