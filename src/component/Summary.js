import "./style/Summary.css";
import { useSelector } from "react-redux";
import REAL from "../data/config";
import * as KEY from "../lib";
const GAGAL = "GAGAL";
const LULUS = "LULUS";
function EVALUATE(SELECT_ANSWER, REAL, initial, end) {
  let count = 0;
  for (let i = initial; i < end; i++) {
    if (SELECT_ANSWER[i] === REAL[i]) {
      count = count + 1;
    }
  }
  return count;
}
function Summary() {
  // Now task to match the selected answer with real answer
  const LOCKED_ANSWER = useSelector((item) =>
    item.INQUIRY_STATUS.map((list) => list.lock)
  );
  const REAL_ANSWER = REAL.map((list) => list.answer);
  const TC_BLIND_TEST = EVALUATE(LOCKED_ANSWER, REAL_ANSWER, 0, 10);
  const TOTAL_CORRECT = EVALUATE(
    LOCKED_ANSWER,
    REAL_ANSWER,
    10,
    KEY.TOTAL_QUESTION
  );

  return (
    // <>Summary</>
    <div className="Summary">
      <header className="flex">Result</header>
      <div className="wrapper">
        <div>
          <div>Makluman</div>
          <div>
            1. Dimaklumkan bahawa tuan/puan telah{" "}
            <span>{TC_BLIND_TEST < 10 ? GAGAL : LULUS}</span> Ujian Kecacatan,
            Warna dan Penglihatan
          </div>
          <div>
            2. Dimaklumkan bahawa tuan/puan telah{" "}
            <span>{TOTAL_CORRECT < 42 ? GAGAL : LULUS}</span> Ujian Bahagian I
            (Statik)
          </div>
          <div>3. Jumlah markah tuan/puan adalah seperti berikut:</div>
          <ul>
            <li>
              {" "}
              BLIND TEST : {EVALUATE(LOCKED_ANSWER, REAL_ANSWER, 0, 10)}/10
            </li>
            <li>
              {" "}
              SEKSYEN A: {EVALUATE(LOCKED_ANSWER, REAL_ANSWER, 10, 25)}/15
            </li>
            <li>
              {" "}
              SEKSYEN B :{EVALUATE(LOCKED_ANSWER, REAL_ANSWER, 25, 50)}/25
            </li>
            <li>
              {" "}
              SEKSYEN C :{EVALUATE(LOCKED_ANSWER, REAL_ANSWER, 50, 60)}/10
            </li>
            <li> JUMLAH MARKAH: {TOTAL_CORRECT + TC_BLIND_TEST}/50</li>
            <li> Markah LULUS: 42/50</li>
          </ul>
        </div>
      </div>{" "}
      {/* End of div */}
    </div>
  );
}

export default Summary;
