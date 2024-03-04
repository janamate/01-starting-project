import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]; // 셔플된 답변 배열
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // 솔트를 이용한 랜덤정렬 https://pottatt0.tistory.com/entry/JavaScript-%EB%B0%B0%EC%97%B4-%EB%AC%B4%EC%9E%91%EC%9C%84%EB%A1%9C-%EC%84%9E%EA%B8%B0
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
