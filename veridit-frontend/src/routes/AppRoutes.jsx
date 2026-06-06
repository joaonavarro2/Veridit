import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecoverPassword from "../pages/auth/RecoverPassword";
import BuyCredits from "../pages/credits/BuyCredits";
import Dashboard from "../pages/dashboard/Dashboard";
import Recording from "../pages/dashboard/Recording";
import Records from "../pages/dashboard/Records";
import RecordDetails from "../pages/dashboard/RecordDetails";
import Logout from "../pages/dashboard/Logout";
import Billing from "../pages/credits/Billing";
import Payment from "../pages/credits/Payment";
import PaymentSuccess from "../pages/credits/PaymentSuccess";
import ProtectedRoute from "./ProtectedRoute";


export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/recover"
          element={<RecoverPassword />}
        />

        <Route
            path="/credits"
            element={<BuyCredits />}
        />

        <Route
            path="/dashboard"
            element={<Dashboard />}
        />
        <Route
          path="/recording"
          element={
            <ProtectedRoute>
              <Recording />
            </ProtectedRoute>
          }
        />

        <Route
          path="/records"
          element={<Records />}
        />

        <Route
          path="/records/:id"
          element={<RecordDetails />}
        />

        <Route
          path="/logout"
          element={<Logout />}
        />
        
        <Route
          path="/billing"
          element={<Billing />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />
        <Route
          path="/buy-credits"
          element={<BuyCredits />}
        />


      </Routes>

    </BrowserRouter>
  );
}