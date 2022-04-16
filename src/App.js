import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "./hoc/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./containers/Header";

import { ListTests } from "./containers/ListTests/";
import { Constructor } from "./containers/Constructor";
import { Auth } from "./containers/Auth";
import { autoLogin } from "./redux/actions/auth";
import { Registration } from "./components/Registratiion";
import { PreviewTest } from "./containers/PreviewTest";

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
          <Route path="/" element={<ListTests />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/test/:id" element={<PreviewTest />} />
          <Route path="/constructor" element={<Constructor />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
