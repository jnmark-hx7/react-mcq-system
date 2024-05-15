/* [==================================================================] 
    Description:
    This is the main section which display question and answer.
    User is allowed to select their desire answer when handling
    the test.

    filename: component/main.js
{[====================================================================] */
import "./style/Main.css";
import REQ_IMG from "../data/img_db";
import { useSelector, useDispatch } from "react-redux";
import * as KEY from "../lib";
import { DATA_MANAGE } from "./config";
import Low from "./Low";
import Timer from "./Timer";

/* Function for answer prompt */
function answer_prompt(option, answer) {
  return {
    type: answer,
    payload: { id: option }, // Array start from 0, Each ID following Normal Counting
  };
} // End of function answer prompt

//Function to change style for any changes of states.
function util_indicator(type) {
  switch (type) {
    case KEY.ANSWER_A:
      return 0;
    case KEY.ANSWER_B:
      return 1;
    case KEY.ANSWER_C:
      return 2;
    default:
      return null;
  }
}

function DISPLAY_ANSWER(current_list, id, status, dispatch) {
  const DICT = [KEY.ANSWER_A, KEY.ANSWER_B, KEY.ANSWER_C];
  return current_list.map((item, index) => (
    <button
      className={
        item.img !== "none"
          ? "active " +
            (index === util_indicator(status[id - 1]) ? "answered" : null)
          : index === util_indicator(status[id - 1])
          ? "answered"
          : null
      }
      key={index}
      onClick={() => dispatch(answer_prompt(id, DICT[index]))}
    >
      {item.img === "none" ? (
        item.ans
      ) : (
        <div className="image--only active">
          <img src={REQ_IMG[item.img]} alt="gambar"></img>
        </div>
      )}
    </button>
  ));
}

// New display function
function DISPLAY_QUESTION(data, id) {
  return (
    <>
      <div className="header">
        {" "}
        <span>Soalan : {id + 1}</span>{" "}
        <span>
          <Timer />
        </span>
      </div>
      <div className="question--display">{data.question} </div>
      {data.image !== "none" ? (
        <div className="image--display-wrapper">
          <img src={REQ_IMG[data.image]} alt="gambar"></img>
        </div>
      ) : null}
    </>
  );
}

function Main() {
  const USER_PROMPT = useSelector((item) => item.USER_PROMPT);
  const SECTION = useSelector((item) => item.SECTION);
  const STATUS = useSelector((item) =>
    item.INQUIRY_STATUS.map((list) => list.lock)
  );
  const DTT = DATA_MANAGE(SECTION);
  const MCQ = DTT.map((item) => item.mcq);
  const dispatch = useDispatch();

  return (
    <div className="Main">
      <div className="wrapper">
        <div className="main--section--wrapper">
          <div className="display--section-wrapper flex">
            {DISPLAY_QUESTION(DTT[USER_PROMPT], USER_PROMPT)}
          </div>
          <div className=" btn--section-wrapper flex">
            {DISPLAY_ANSWER(
              MCQ[USER_PROMPT],
              DTT[USER_PROMPT].id,
              STATUS,
              dispatch
            )}
          </div>
        </div>
        <div className="low--section-wrapper">
          <Low />
        </div>
      </div>
    </div> /* End of line */
  );
}

export default Main;
