import "./style/Low.css";
import * as KEY from "../lib";
import { useSelector, useDispatch } from "react-redux";
import { DATA_MANAGE } from "./config";

function prompt(type) {
  // Here is the event
  return { type };
}

function this_next_prompt(type, total) {
  // Here is the event
  return { type, payload: { total } };
}

const Low = () => {
  const dispatch = useDispatch();
  const CURRENT_PROMPT = useSelector((item) => item.USER_PROMPT);
  const SECTION = useSelector((item) => item.SECTION);
  const DTT = DATA_MANAGE(SECTION);
  return (
    <div className="Low flex">
      <button onClick={() => dispatch(prompt(KEY.PREV))}>previous</button>
      {CURRENT_PROMPT !== DTT.length - 1 ? (
        <button
          onClick={() => dispatch(this_next_prompt(KEY.NEXT, DTT.length))}
        >
          Next
        </button>
      ) : (
        <button onClick={() => dispatch(prompt(KEY.SUBMIT))}>Submit</button>
      )}
    </div>
  );
};

export default Low;
