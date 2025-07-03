import userIMG from "../assets/user.png";
import TechSupport from "./TechSupport";
import { useState, useEffect } from "react";

export default function Performance() {
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
      <h2 className="text-2xl font-bold mb-8 underline">Performance</h2>
      <div className="flex justify-between">
        <div className="flex w-1/3 justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-7">
              <div className="h-40 w-35 bg-[#E0E0E0] rounded-3xl overflow-hidden">
                <img src={userIMG} alt="" />
              </div>
              <div className="flex flex-col justify-between h-38">
                <h1 className="font-medium">Technical Support Name</h1>
                <div className="bg-[#E0E0E0] px-2 py-1 rounded-xl">
                  <h1 className="text-sm font-medium">
                    <strong>Contact no.:</strong> 0123456789
                  </h1>
                  <h2 className="text-sm font-medium">
                    <strong>Department:</strong> Finance
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-[#E0E0E0] p-4 rounded-2xl">
              <ul>
                <li className="flex justify-between font-medium text-xl mb-2">
                  <h1>Total Ticket Handled</h1>
                  <p>{total + awaiting}</p>
                </li>
                <li className="flex justify-between font-medium">
                  <h1>Total Solved</h1>
                  <p>{solved}</p>
                </li>
                <li className="flex justify-between font-medium">
                  <h1>Total in Progress</h1>
                  <p>{awaiting}</p>
                </li>
                <li className="flex justify-between font-medium">
                  <h1>Total waiting Approval</h1>
                  <p>{awaiting}</p>
                </li>
                <li className="flex justify-between font-medium">
                  <h1>Ratings</h1>
                  <p>⭐⭐⭐⭐</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 px-35 flex flex-col gap-4">
          <TechSupport number={1} />
          <TechSupport number={2} />
          <TechSupport number={3} />
          <TechSupport number={4} />
        </div>
      </div>
    </>
  );
}
