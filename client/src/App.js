import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Root,
  Dashboard,
  Exam,
  ExamWindow,
  ResultWindow,
  CreatePage
} from "./pages";

import { MockProvider } from "./contexts/MockContext";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Dashboard />} />
          <Route path="exam">
            <Route index element={<Exam />} />
            <Route path=":id" element={<ExamWindow />} />
          </Route>
          {/* <Route path="result" element={<ResultWindow />}></Route> */}
          <Route path="create" element={<MockProvider><CreatePage /></MockProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
