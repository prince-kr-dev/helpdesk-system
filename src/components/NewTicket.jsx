import { useState, useEffect } from "react";

export default function NewTicket() {
  const [form, setForm] = useState({
    id: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
    status: "Pending",
    rating: 0,
  });

  useEffect(() => {
    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    if (existingTickets.length === 0) {
      const demoTicket = {
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        name: "Demo User",
        department: "IT",
        subject: "Sample Ticket Subject",
        category: "Software",
        type: "Request",
        priority: "Medium",
        description: "This is a demo ticket added by default.",
        status: "Pending",
        rating: 0,
      };
      localStorage.setItem("tickets", JSON.stringify([demoTicket]));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("tickets")) || [];
    const newTicket = { ...form, id: Date.now() };
    localStorage.setItem("tickets", JSON.stringify([...existing, newTicket]));
    alert("Ticket submitted successfully!");
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-6">Create New Ticket</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-3">
          <input
            name="date"
            type="date"
            className="border p-2 rounded w-70"
            onChange={handleChange}
            required
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="border p-2 rounded w-70"
            onChange={handleChange}
            required
          />
          <select
            name="department"
            className="border p-2 rounded w-70"
            onChange={handleChange}
            defaultValue=""
            required
          >
            <option value="" disabled>Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <select
              name="category"
              className="border p-2 rounded"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="" disabled>Select Category</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Network">Network</option>
            </select>

            <select
              name="type"
              className="border p-2 rounded"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="" disabled>Select Type</option>
              <option value="Bug">Bug</option>
              <option value="Request">Request</option>
              <option value="Query">Query</option>
            </select>

            <select
              name="priority"
              className="border p-2 rounded"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="" disabled>Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <textarea
            name="description"
            placeholder="Description"
            className="border p-2 rounded h-37 w-90 resize-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input type="checkbox" required />
            <span>I'm not a robot</span>
          </label>
          <button
            type="submit"
            className="bg-teal-500 text-white px-15 py-2 rounded hover:bg-teal-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
