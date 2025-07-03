import { useEffect, useState } from "react";

export default function MyTicket() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const toggleStatus = (id) => {
    const updated = tickets.map((ticket) => {
      if (ticket.id === id) {
        const newStatus = ticket.status === "Pending" ? "Solved" : "Pending";
        return { ...ticket, status: newStatus };
      }
      return ticket;
    });

    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const openPopup = (ticket) => {
    setSelectedTicket(ticket);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedTicket(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">List of Tickets</h2>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Ticket No</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="text-center">
              <td
                onClick={() => openPopup(ticket)}
                className="p-2 border text-blue-600 underline cursor-pointer bg-gray-200 hover:bg-gray-400 transition-all"
              >
                {ticket.id}
              </td>
              <td className="p-2 border">{ticket.subject}</td>
              <td className="p-2 border">{ticket.status}</td>
              <td className="p-2 border">
                <button
                  onClick={() => toggleStatus(ticket.id)}
                  className={`px-3 py-1 rounded text-white ${
                    ticket.status === "Pending"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  } hover:opacity-80`}
                >
                  Mark as {ticket.status === "Pending" ? "Solved" : "Pending"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ticket Detail Popup */}
      {showPopup && selectedTicket && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-12">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[700px] relative border">
            <h3 className="text-xl font-bold mb-4">Ticket Details</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>ID:</strong> {selectedTicket.id}
              </p>
              <p>
                <strong>Date:</strong> {selectedTicket.date}
              </p>
              <p>
                <strong>Name:</strong> {selectedTicket.name}
              </p>
              <p>
                <strong>Department:</strong> {selectedTicket.department}
              </p>
              <p>
                <strong>Subject:</strong> {selectedTicket.subject}
              </p>
              <p>
                <strong>Category:</strong> {selectedTicket.category}
              </p>
              <p>
                <strong>Type:</strong> {selectedTicket.type}
              </p>
              <p>
                <strong>Priority:</strong> {selectedTicket.priority}
              </p>
              <p>
                <strong>Description:</strong> {selectedTicket.description}
              </p>
              <p>
                <strong>Status:</strong> {selectedTicket.status}
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={closePopup}
                className="bg-green-500 font-medium text-xl px-10 py-1 rounded-md cursor-pointer hover:bg-green-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
