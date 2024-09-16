import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Root,
  Dashboard,
  Exam,
  ExamWindow,
  ResultWindow,
  CreatePage,
  Signup,
  Login,
} from "./pages";

import { Navigate } from "react-router-dom";
import { MockProvider } from "./contexts/MockContext";
import { useAuth } from "./contexts/Auth";

function App() {
  const {isLoggedIn} = useAuth();
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
          <Route
            path="create"
            element={
              <MockProvider>
                <CreatePage />
              </MockProvider>
            }
          />
          <Route path="login" element={isLoggedIn ? <Navigate replace to="/" /> : <Login />} />
          <Route path="signup" element={isLoggedIn ? <Navigate replace to="/" /> : <Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
