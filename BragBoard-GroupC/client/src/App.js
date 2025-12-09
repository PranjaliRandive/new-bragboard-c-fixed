import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Leaderboard from './pages/Leaderboard';


export default function App() {
  const role = "user"; // change to "user" to test user view

  return (
    <BrowserRouter>
      <Routes>
        {role === "admin" ? (
          <>
            <Route path="/home" element={<AdminHome role={role} />} />
            <Route path="/leaderboard" element={<Leaderboard role={role} />} />
            <Route path="/reports" element={<Reports role={role} />} />
            <Route path="/settings" element={<Settings role={role} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home role={role} />} />
            <Route path="/leaderboard" element={<Leaderboard role={role} />} />
            <Route path="/reports" element={<Reports role={role} />} />
            <Route path="/settings" element={<Settings role={role} />} />
          </>
        )}
        <Route path="*" element={role === "admin" ? <AdminHome role={role} /> : <Home role={role} />} />
      </Routes>
    </BrowserRouter>
  );
}
