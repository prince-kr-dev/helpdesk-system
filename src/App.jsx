import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MainScreen from "./components/MainScreen";
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket";
import MyTicket from "./components/MyTicket";
import ProtectedRoute from "./components/ProtectedRoute";
import Performance from "./components/Performance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes using layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainScreen />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-ticket" element={<NewTicket />} />
          <Route path="my-ticket" element={<MyTicket />} />
          <Route path="performance" element={<Performance/>} />
        </Route>

        {/* Optional fallback */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <MainScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
