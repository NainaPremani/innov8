import { useEffect } from "react";
import Test from "../components/Test";

const Practice = () => {

useEffect(()=>{
  const data = {
    bot: "\n\n1. What is the MERN stack?\n2. What are the benefits of using the MERN stack?\n3. How do I set up a development environment for a MERN application?\n4. What are some common challenges when working with the MERN stack?\n5. What libraries and frameworks are commonly used in a MERN application?",
  };
  
  const botResponse = data.bot;
  const questions = botResponse.split("\n").filter((question) => question.trim() !== "");
  
  console.log(questions);
  
},[])

  

  return (
    <div className="h-screen">
      <Test />
    </div>
  );
};

export default Practice;
