import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "./hoc/Container";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./containers/Header";

import { ListTests } from "./containers/ListTests/";
import { Constructor } from "./containers/Constructor";
import { Auth } from "./containers/Auth";
import { autoLogin } from "./redux/actions/auth";
import { Registration } from "./components/Registratiion";
import { EmptyList } from "./components/EmptyList";
import { PreviewTest } from "./containers/PreviewTest";
import { ConfigureTest } from "./components/StepConstructor/ConfigureTest";
import { TestHeader } from "./components/TestItem/TestHeader";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/hed" element={<TestHeader />} />

            <Route path="/constructor/1" element={<ConfigureTest />} />
            <Route path="/" element={<ListTests />} />
            <Route path="/test/:id" element={<PreviewTest />} />
            <Route path="/constructor" element={<Constructor />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/emptylist" element={<EmptyList />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
