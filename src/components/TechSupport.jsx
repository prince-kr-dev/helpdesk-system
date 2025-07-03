import userIMG from "../assets/user.png";
export default function TechSupport({number}) {
  return (
    <>
      <div className="flex justify-between">
        <div className="h-18 w-16 bg-[#E0E0E0] rounded-2xl overflow-hidden">
          <img src={userIMG} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-lg font-medium">Technical support {number}</h1>
          <p className="bg-teal-400 text-center font-medium py-1 rounded-xl cursor-pointer hover:bg-teal-500 transition-all">
            View Details
          </p>
        </div>
      </div>
    </>
  );
}
