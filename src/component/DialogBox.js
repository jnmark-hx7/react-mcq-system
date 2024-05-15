import { useSelector, useDispatch } from "react-redux";
import * as KEY from "../lib";
function prompt(type) {
  // Here is the event
  return { type };
}
function DISPLAY(dispatch, NEXT_SECTION) {
  return (
    <div className="AU">
      <div className="template">
        <div className="upper--wrapper">
          <div className="title--label">
            Are you sure you wanted to proceed?
          </div>
        </div>
        <div className="lower--wrapper">
          <button onClick={() => dispatch(prompt(KEY.CANCEL))}> Cancel</button>
          <button
            onClick={() => {
              dispatch(prompt(NEXT_SECTION + 1));
              dispatch(prompt(KEY.RESET));
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
function Dialog_box() {
  const DIALOG_BOX = useSelector((item) => item.DIALOG_BOX);
  const SECTION = useSelector((item) => item.SECTION);
  const dispatch = useDispatch();
  return <>{DIALOG_BOX !== false ? DISPLAY(dispatch, SECTION.id) : null}</>;
}

export default Dialog_box;
