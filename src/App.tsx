import "./App.css";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import NewOutcome from "./pages/NewOutcome";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Balance from "./pages/Balance";
import Registration from "./pages/Registration";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Balance />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/new-outcome" element={<NewOutcome />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
