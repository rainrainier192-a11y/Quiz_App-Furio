import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../Data/questions";
import QuestionCard from "../../Componentss/QuestionCard";

export default function QuizPage() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentIndex];

  function handleSubmit() {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: selectedAnswer,
    };

    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex);
      setSelectedAnswer(
        updatedAnswers[questions[nextIndex].id] ?? "",
      );

      return;
    }

    const score = questions.reduce(
      (total, question) =>
        total +
        (updatedAnswers[question.id] === question.answer ? 1 : 0),
      0,
    );

    navigate("/result", {
      state: {
        score,
        total: questions.length,
      },
    });
  }

  return (
    <main className="quiz-page">
      <QuestionCard
        question={currentQuestion}
        current={currentIndex + 1}
        total={questions.length}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
        onSubmit={handleSubmit}
      />
    </main>
  );
}