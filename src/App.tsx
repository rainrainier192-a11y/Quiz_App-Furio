import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./assets/Pages/HomePage";
import QuizPage from "./assets/Pages/QuizPage";
import ResultPage from "./assets/Pages/ResultPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}