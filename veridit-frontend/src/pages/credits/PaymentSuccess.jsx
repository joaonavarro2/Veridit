import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {

  const navigate = useNavigate();

  return (
    <DashboardLayout>

      <div className="flex items-center justify-center min-h-[80vh]">

        <div className="bg-[#121821] p-10 rounded-2xl shadow max-w-2xl w-full text-center">

          <div className="text-7xl mb-6">
            ✅
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Payment Successful
          </h1>

          <p className="text-xl text-gray-500 mb-4">
            Your payment has been processed successfully.
          </p>

          <p className="text-lg text-gray-500 mb-10">
            A payment receipt has been sent to:
          </p>

          <div className="bg-slate-100 p-4 rounded-xl mb-10">

            <p className="text-xl font-semibold">
              user@email.com
            </p>

          </div>

          <button
            onClick={() => navigate("/recording")}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
          >
            Go to Recording Dashboard
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}