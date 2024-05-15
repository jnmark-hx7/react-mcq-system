/* [==================================================================] 
    Description:
    This is the side section which allow user to select or jump to
    their desired question. This side section can help user to keep 
    track with their unanswered question


    filename: component/side.js
{[====================================================================] */
import "./style/Side.css";
import * as KEY from "../lib";
import { useSelector, useDispatch } from "react-redux";
import { STATUS_MANAGE } from "./config";

function prompt(type, id) {
  // Here is the event
  return { type, payload: { id } };
}

/* Creating a display function */
const DEFAULT = "default";
const ACTIVE = "active";
const CURRENT = "focus";
const DISPLAY = (status, dispatch, curr_id) => {
  let content = [];
  for (let i = 0; i < status.length; i++) {
    content.push(
      <button
        className={
          i === curr_id
            ? CURRENT
            : status[i] === KEY.ANSWERED
            ? ACTIVE
            : DEFAULT
        }
        key={i}
        onClick={() => dispatch(prompt(KEY.NUMBER, i))}
      >
        {" "}
        {i + 1}
      </button>
    );
  }
  return <div className="wrapper">{content}</div>;
};

const Side = () => {
  const CURR_ID = useSelector((item) => item.USER_PROMPT);
  const STATUS = useSelector((item) =>
    item.INQUIRY_STATUS.map((list) => list.status)
  );
  const SECTION = useSelector((item) => item.SECTION);
  const LIST_STATUS = STATUS_MANAGE(SECTION, STATUS);
  const dispatch = useDispatch();

  return (
    <div className="Side">
      <div className="label"> {SECTION.name}</div>
      {DISPLAY(LIST_STATUS, dispatch, CURR_ID)}
    </div>
  );
};

export default Side;
