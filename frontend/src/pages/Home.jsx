const Home = () => {
  return (
    <div className="h-screen">
      <h1 className="font-bold text-2xl">Home</h1>
      <div className="Container border p-2">
        <p>
          <span> Question :</span>
          <span> </span>
        </p>
        <div>
          <textarea className="w-4/5 h-20 border">{}</textarea>
        </div>
        <button className="p-1 border space-x-1.5">Mike</button>
        <button className="p-1 border space-x-1.5">Submit</button>
      </div>
    </div>
  );
};

export default Home;
