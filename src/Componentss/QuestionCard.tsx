import type { Question } from "../types";
import ProgressBar from "./ProgressBar";

type QuestionCardProps = {
  question: Question;
  current: number;
  total: number;
  selectedAnswer: string;
  onSelect: (answer: string) => void;
  onSubmit: () => void;
};

export default function QuestionCard({
  question,
  current,
  total,
  selectedAnswer,
  onSelect,
  onSubmit,
}: QuestionCardProps) {
  return (
    <section className="question-card">
      <ProgressBar current={current} total={total} />

      <h2>Questions:</h2>
      <div className="question-divider" />

      <p className="question-count">
        Question {current} of {total}
      </p>

      <p className="question-text">
        {question.text} <span className="required">*</span>
      </p>

      <div className="answer-grid">
        {question.options.map((option) => (
          <label
            className={`answer-option ${
              selectedAnswer === option ? "selected" : ""
            }`}
            key={option}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelect(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="question-actions">
        <button
          className="submit-button"
          type="button"
          onClick={onSubmit}
          disabled={!selectedAnswer}
        >
          {current === total ? "Submit" : "Next"}
        </button>
      </div>
    </section>
  );
}