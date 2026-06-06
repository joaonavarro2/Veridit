import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <DashboardLayout>

      <div className="flex items-center justify-center min-h-[80vh]">

        <div className="bg-[#121821] p-10 rounded-2xl shadow w-full max-w-xl">

          <h1 className="text-4xl font-bold mb-6">
            Logout
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Are you sure you want to log out?
          </p>

          <div className="flex gap-4">

           <Button
              variant="secondary"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>

            <Button
              variant="danger"
              onClick={() => {

              logout();

              navigate("/");
            }}
            >
              Logout
            </Button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}