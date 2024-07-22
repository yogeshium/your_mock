import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamWindow from "./components/ExamWindow.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ResultWindow from "./components/ResultWindow.jsx";
import Exam from "./components/Exam.jsx";
import Root from "./components/Root.jsx";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path="exam/:id" element={<ExamWindow />}/>
          <Route path="result" element={<ResultWindow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
