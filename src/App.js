import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "./hoc/Container";
import {
  Header,
  Home,
  Constructor,
  Auth,
  Registration,
  TestPage,
} from "./containers";
import { autoLogin } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/test/:id" element={<TestPage />} />
          <Route path="/constructor" element={<Constructor />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
