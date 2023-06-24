import { useDispatch, useSelector } from "react-redux";
const Feedback = () => {
  const { isLoading, isError, evalres } = useSelector(
    (state) => state.dataReducer
  );


  return (
    <div>
      <p>{evalres}</p>
    </div>
  );
};

export default Feedback;
