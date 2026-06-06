import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Payment() {

  const navigate = useNavigate();

  return (
    <DashboardLayout>

      <h1 className="text-5xl font-bold mb-10">
        Payment
      </h1>

      <div className="grid grid-cols-2 gap-8">

        {/* PIX */}

        <div className="bg-[#121821] rounded-2xl shadow p-8">

          <h2 className="text-3xl font-bold mb-6">
            PIX Payment
          </h2>

          <div className="w-64 h-64 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">

            <p className="text-gray-500">
              QR Code
            </p>

          </div>

          <button
            onClick={() => navigate("/payment-success")}
            className="w-full mt-8 bg-green-600 text-white p-4 rounded-xl hover:bg-green-700"
          >
            Confirm PIX Payment
          </button>

        </div>

        {/* CARD */}

        <div className="bg-[#121821] rounded-2xl shadow p-8">

          <h2 className="text-3xl font-bold mb-6">
            Card Payment
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Card Number"
              className="border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
              className="border p-4 rounded-xl"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="MM/YY"
                className="border p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="CVV"
                className="border p-4 rounded-xl"
              />

            </div>

            <button
              onClick={() => {
                  toast.success("PIX payment confirmed");

                  setTimeout(() => {
                    navigate("/payment-success");
                  }, 1500);
                }}
              className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"
            >
              Confirm Card Payment
            </button>

          </div>

          {/* MERCADO PAGO */}

          <div className="mt-10 border-t pt-6">

            <h3 className="text-2xl font-bold mb-4">
              Mercado Pago
            </h3>

            <button
              onClick={() => {
                  toast.success("Card payment approved");

                  setTimeout(() => {
                    navigate("/payment-success");
                  }, 1500);
                }}
              className="w-full bg-sky-400 text-white p-4 rounded-xl hover:bg-sky-500"
            >
              Pay with Mercado Pago
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}