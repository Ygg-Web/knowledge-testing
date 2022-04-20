import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "./hoc/Container";
import {
  Header,
  Home,
  Constructor,
  Login,
  SingUp,
  TestPage,
} from "./containers";
import { Profile } from "./containers/Profile";
import { Private } from "./hoc/Private";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:id" element={<TestPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route
            path="/constructor"
            element={
              <Private>
                <Constructor />
              </Private>
            }
          />
          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
