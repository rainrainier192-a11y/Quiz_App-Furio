import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../../Componentss/ResultCard";
import { questions } from "../Data/questions";

type ResultState = {
  score: number;
  total: number;
};

export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state as ResultState | null;

  if (!result) {
    return (
      <main className="result-page">
        <section className="result-card">
          <h1>No quiz result yet</h1>

          <button
            className="start-button"
            type="button"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        </section>
      </main>
    );
  }

  return (
    <ResultCard
      total={result.total || questions.length}
      correct={result.score}
      onRetake={() => navigate("/quiz", { replace: true })}
      onReturnHome={() => navigate("/")}
    />
  );
}