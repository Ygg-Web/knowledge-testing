import { useState } from "react";
import { Header } from "./containers/Header";
import { Container } from "./hoc/Layout/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ListTests } from "./containers/ListTests/";
import { Constructor } from "./containers/Constructor";
import { PreviewTest } from "./containers/PreviewTest";
import { Auth } from "./containers/Auth";
import { Testing } from "./containers/Testing";

// const initialState = {
//   id: 1,

// }

function App() {
  const [test, setTest] = useState({});

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
            {/* <Redirect to="/" /> */}
            <Route path="/test/:id/" element={<Testing />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
