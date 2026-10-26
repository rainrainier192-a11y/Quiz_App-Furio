type ResultCardProps = {
  total: number;
  correct: number;
  onRetake: () => void;
  onReturnHome: () => void;
};

export default function ResultCard({
  total,
  correct,
  onRetake,
  onReturnHome,
}: ResultCardProps) {
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return (
    <main className="result-page">
      <section className="result-card">
        <p className="result-kicker">Quiz Completed</p>

        <h1>Your score:</h1>

        <div className="score-box">
          <strong>
            {correct} / {total}
          </strong>
          <span>{percentage}%</span>
        </div>

        <div className="result-details">
          <p>
            <span>Total questions</span>
            <strong>{total}</strong>
          </p>

          <p>
            <span>Correct answers</span>
            <strong>{correct}</strong>
          </p>

          <p>
            <span>Incorrect answers</span>
            <strong>{incorrect}</strong>
          </p>
        </div>

        <div className="result-actions">
          <button
            className="start-button"
            type="button"
            onClick={onRetake}
          >
            Retake Quiz
          </button>

          <button
            className="return-button"
            type="button"
            onClick={onReturnHome}
          >
            Return Home
          </button>
        </div>
      </section>
    </main>
  );
}