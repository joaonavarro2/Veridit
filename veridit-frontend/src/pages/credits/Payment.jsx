import DashboardLayout from "../../components/layout/DashboardLayout";
import toast from "react-hot-toast";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { comprarPacote } from "../../api/paymentApi";

export default function Payment() {

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();

  const pacote =
    location.state?.pacote;

  async function confirmarCompra() {

    if (!user) {

      toast.error(
        "Usuário não encontrado."
      );

      return;

    }

    if (!pacote) {

      toast.error(
        "Pacote não encontrado."
      );

      return;

    }

    try {

      const resposta =
        await comprarPacote(
          user.id,
          pacote.id
        );

      toast.success(
        "Compra realizada com sucesso!"
      );

      setTimeout(() => {

        navigate(
          "/payment-success",
          {
            state: resposta,
          }
        );

      }, 1200);

    } catch (error) {

      toast.error(
        error.message
      );

    }

  }

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
            onClick={confirmarCompra}
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
              onClick={confirmarCompra}
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
              onClick={confirmarCompra}
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