import { useState } from "react"
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz () {
    const [userAnswers, setUserAnswers] = useState([]); // 사용자가 선택한 답을 저장하는 배열

    const activeQuestionIndex = userAnswers.length; // 사용자가 선택한 답의갯수 == 퀴즈데이터 배열 번호
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length; //퀴즈완료

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="ㅗ"/>
                <h2>퀴즈는 여기까지다</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; // 셔플된 답변 배열
    shuffledAnswers.sort(() => Math.random() - 0.5); // 솔트를 이용한 랜덤정렬 https://pottatt0.tistory.com/entry/JavaScript-%EB%B0%B0%EC%97%B4-%EB%AC%B4%EC%9E%91%EC%9C%84%EB%A1%9C-%EC%84%9E%EA%B8%B0

    return (
        <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer)=>(
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}