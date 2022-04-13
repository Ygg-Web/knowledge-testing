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
import { DiscriptionTest } from "./components/StepConstructor/DiscriptionTest";
import { ConfigureTest } from "./components/StepConstructor/ConfigureTest";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<ListTests />} />
            <Route path="/test/:id" element={<PreviewTest />} />
            <Route path="/constructor" element={<Constructor />} />
            <Route path="/constructor/step1" element={<DiscriptionTest />} />
            <Route path="/constructor/step2" element={<ConfigureTest />} />
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
