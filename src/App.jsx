import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ChildrenPage from "./pages/Children/ChildrenPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/children" element={<ChildrenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;