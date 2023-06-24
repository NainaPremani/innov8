import mainimg from "../assets/ai-interview.jpg";
const Feedback = () => {
  return (
    <div className=" min-h-screen flex justify-center">
      <div className="flex w-4/5">
        <div>
          <h1 className="text-7xl font-bold text-center text-white">
            Your Journey starts here!
          </h1>
        </div>
        <div>
          <img
            src={mainimg}
            alt="ai interview img"
            className="border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
