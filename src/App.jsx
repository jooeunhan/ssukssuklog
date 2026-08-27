import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ChildrenPage from "./pages/Children/ChildrenPage";
import HealthInputPage from "./pages/Health/HealthInputPage";
import HealthHistoryPage from "./pages/Health/HealthHistoryPage";
import ParentMessagePage from "./pages/Parent/ParentMessagePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/health-input" element={<HealthInputPage />} />

          <Route
            path="/children/:id/history"
            element={<HealthHistoryPage />}
          />

          <Route
            path="/parent-message"
            element={<ParentMessagePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;