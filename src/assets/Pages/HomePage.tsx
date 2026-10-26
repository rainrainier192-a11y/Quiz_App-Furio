import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="welcome-content">
        <p className="welcome-line">Welcome to the</p>

        <h1>Frontend Quiz!</h1>

        <button
          className="start-button"
          type="button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </button>
      </section>
    </main>
  );
}