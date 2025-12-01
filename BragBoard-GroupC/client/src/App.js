import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const role = "admin"; 
  return (
    <BrowserRouter>
      <Routes>

        {/* Admin Routes */}
        <Route
          path="/admin/home"
          element={
            <ProtectedRoute
              element={<AdminHome role={role} />}
              allowedRoles={["admin"]}
              role={role}
            />
          }
        />

        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute
              element={<Reports role={role} />}
              allowedRoles={["admin"]}
              role={role}
            />
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute
              element={<Settings role={role} />}
              allowedRoles={["admin"]}
              role={role}
            />
          }
        />

        {/* Employee Routes */}
        <Route
          path="/user/home"
          element={
            <ProtectedRoute
              element={<Home role={role} />}
              allowedRoles={["user"]}
              role={role}
            />
          }
        />

        <Route
          path="/user/reports"
          element={
            <ProtectedRoute
              element={<Reports role={role} />}
              allowedRoles={["user"]}
              role={role}
            />
          }
        />

        <Route
          path="/user/settings"
          element={
            <ProtectedRoute
              element={<Settings role={role} />}
              allowedRoles={["user"]}
              role={role}
            />
          }
        />

        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />

        {/* Default Route */}
        <Route
          path="*"
          element={role === "admin" ? <AdminHome role={role} /> : <Home role={role} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
