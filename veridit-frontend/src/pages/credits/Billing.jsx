import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Billing() {

  const navigate = useNavigate();
  const location = useLocation();

  const pacote =
    location.state?.pacote;

  return (
    <DashboardLayout>

      <h1 className="text-5xl font-bold mb-10">
        Billing Information
      </h1>

      <div className="bg-[#121821] p-8 rounded-2xl shadow max-w-3xl">

        <div className="grid grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="First Name"
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-4 rounded-xl col-span-2"
          />

          <input
            type="text"
            placeholder="CPF"
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Address"
            className="border p-4 rounded-xl col-span-2"
          />

        </div>

        <button
          onClick={() => navigate("/payment", {state: {pacote,},})}
          className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
        >
          Continue to Payment
        </button>

      </div>

    </DashboardLayout>
  );
}