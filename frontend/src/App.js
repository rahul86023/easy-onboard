import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import { MainLayout } from "./components/layouts/MainLayout";
import { EmployeeLayout } from "./components/layouts/EmployeeLayout";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/register";
import ProfilePage from "./components/profile";
import Feedback from "./components/Employee/Feedback";
import FillForm from "./components/Employee/FillForm";
import UploadDocuments from "./components/Employee/UploadDocuments";
import StatusCheck from "./components/Employee/StatusCheck";
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

          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="hr-dashboard" element={<HrDashboard />} />
          <Route path="employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee" element={<EmployeeLayout />}>
            <Route path="fill-form" element={<FillForm />} />
            <Route path="upload-document" element={<UploadDocuments />} />
            <Route path="status-check" element={<StatusCheck />} />
            <Route path="feedback-form" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
