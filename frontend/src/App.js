import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import { MainLayout } from "./components/layouts/MainLayout";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/register";
import ProfilePage from "./components/profile";
import ManageUsersPage from "./components/ManageUsers";
import AdminDashboard from "./components/AdminDashboard";
import HrDashboard from "./components/HrDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="manage-users-page" element={<ManageUsersPage />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="hr-dashboard" element={<HrDashboard />} />
          <Route path="employee-dashboard" element={<EmployeeDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
