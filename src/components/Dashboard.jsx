import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(data);
  }, []);

  const total = tickets.length;
  const solved = tickets.filter((t) => t.status === "Solved").length;
  const awaiting = tickets.filter((t) => t.status === "Pending").length;

  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        <div
          className="w-50 h-50 bg-blue-500 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center"
          style={{ boxShadow: "6px 6px 0px 0px rgba(100, 111, 100, 0.4)" }}
        >
          <span className="text-lg font-medium">Total Tickets</span>
          <span className="text-7xl font-bold">{total + awaiting}</span>
        </div>
        <div
          className="w-50 h-50 bg-green-500 text-white rounded-2xl shadow flex flex-col items-center justify-center"
          style={{ boxShadow: "6px 6px 0px 0px rgba(100, 111, 100, 0.4)" }}
        >
          <span className="text-lg font-medium">Total Solved</span>
          <span className="text-6xl font-bold">{solved}</span>
        </div>
        <div
          className="w-50 h-50 bg-red-500 text-white rounded-2xl shadow flex flex-col items-center justify-center"
          style={{ boxShadow: "6px 6px 0px 0px rgba(100, 111, 100, 0.4)" }}
        >
          <span className="text-lg font-medium text-center">Total Awaiting<br/>Approval</span>
          <span className="text-6xl font-bold">{awaiting}</span>
        </div>
        <div
          className="w-50 h-50 bg-yellow-400 text-black rounded-2xl shadow flex flex-col items-center justify-center"
          style={{ boxShadow: "6px 6px 0px 0px rgba(100, 111, 100, 0.4)" }}
        >
          <span className="text-lg font-medium">Total In Progress</span>
          <span className="text-6xl font-bold">{awaiting}</span>
        </div>
      </div>
    </>
  );
}
