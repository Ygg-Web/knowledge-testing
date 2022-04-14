import { Header } from "./containers/Header";
import { Container } from "./hoc/Layout/Container";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ListTests } from "./containers/ListTests/";
import { Constructor } from "./containers/Constructor";
import { PreviewTest } from "./containers/PreviewTest";
import { Auth } from "./containers/Auth";
import { Testing } from "./containers/Testing";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {});

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<ListTests />} />
            <Route path="/test/:id" element={<PreviewTest />} />
            <Route path="/constructor" element={<Constructor />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/test/:id/" element={<Testing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
