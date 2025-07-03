import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function MainScreen() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const location = useLocation();

  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showNotifPopup, setShowNotifPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-teal-400 flex items-center justify-between px-6 z-10 shadow">
        <h1 className="text-white font-bold text-4xl">Helpdesk</h1>
        <div className="relative flex items-center">
          <button className="bg-black text-white font-medium px-1 py-1 rounded-l-md">BM</button>
          <button className=" text-black border-4 px-2 font-bold rounded-r-md">BI</button>

          {/* Notification Icon with Popup */}
          <div className="relative">
            <i
              className="ri-notification-2-fill text-2xl cursor-pointer hover:bg-white px-3 rounded-md transition-all py-1"
              onClick={() => {
                setShowNotifPopup(!showNotifPopup);
                setShowUserPopup(false);
              }}
            ></i>

            {showNotifPopup && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50 p-4">
                <h3 className="font-bold text-lg mb-2">Notifications</h3>
                <p className="text-gray-600 text-sm">No new notifications</p>
              </div>
            )}
          </div>

          {/* User Icon with Popup */}
          <div className="relative">
            <i
              className="ri-user-fill text-2xl cursor-pointer hover:bg-white px-3 rounded-md transition-all py-1"
              onClick={() => {
                setShowUserPopup(!showUserPopup);
                setShowNotifPopup(false); 
              }}
            ></i>

            {/* Popup */}
            {showUserPopup && (
              <div className="absolute right-0 mt-2 h-65 w-100 bg-white border border-gray-300 rounded shadow-lg z-50 pl-10 p-2">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-lg mb-2">User Info</h3>
                  <i
                    onClick={() => setShowUserPopup(!showUserPopup)}
                    className="ri-close-large-line bg-white transition-all hover:bg-gray-200 cursor-pointer px-2 py-1 rounded-full font-bold"
                  ></i>
                </div>
                <div className="flex flex-col gap-3">
                  <p>
                    <strong>Username:</strong> {username}
                  </p>
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                  <p>
                    <strong>Role:</strong> Deveoper
                  </p>
                  <p>
                    <strong>Department:</strong> Computer Science
                  </p>
                  <p>
                    <strong>Status:</strong> Active
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button onClick={handleLogout}>
            <i className="ri-logout-box-r-line text-2xl cursor-pointer px-4 rounded-md py-1 text-black hover:bg-white transition-all"></i>
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-20">
        <aside className="fixed top-20 left-0 bottom-0 w-64 bg-gray-200 p-4 overflow-y-auto shadow-inner">
          <h2 className="text-xl font-bold mb-6">Welcome, {username}!</h2>
          <ul className="space-y-4">
            <li
              onClick={() => navigate("/dashboard")}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${
                isActive("/dashboard") ? "bg-teal-300 font-semibold" : ""
              } hover:bg-blue-200`}
            >
              <span>
                <i class="ri-dashboard-line text-2xl font-light"></i>
              </span>
              <span>Dashboard</span>
            </li>
            <li
              onClick={() => navigate("/new-ticket")}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${
                isActive("/new-ticket") ? "bg-teal-300 font-semibold" : ""
              } hover:bg-blue-200`}
            >
              <span>
                <i class="ri-sticky-note-add-fill text-2xl font-light"></i>
              </span>
              <span>New Ticket</span>
            </li>
            <li
              onClick={() => navigate("/my-ticket")}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${
                isActive("/my-ticket") ? "bg-teal-300 font-semibold" : ""
              } hover:bg-blue-200`}
            >
              <span>
                <i class="ri-ticket-fill text-2xl font-light"></i>
              </span>
              <span>My Ticket</span>
            </li>
            <li
              onClick={() => navigate("/performance")}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${
                isActive("/performance") ? "bg-teal-300 font-semibold" : ""
              } hover:bg-blue-200`}
            >
              <span>
                <i class="ri-file-settings-fill text-2xl font-light"></i>
              </span>
              <span>Performance</span>
            </li>
          </ul>
        </aside>

        <main
          className="ml-64 flex-1 overflow-y-auto p-8 bg-white"
          style={{ height: "calc(100vh - 80px - 48px)" }}
        >
          <Outlet />
        </main>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 h-12 bg-teal-400 flex items-center justify-center shadow">
        <p className="text-black font-medium text-sm">© 2025 Helpdesk System</p>
      </footer>
    </div>
  );
}
