import "./App.css";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import NewOutcome from "./pages/NewOutcome";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Balance from "./pages/Balance";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/balance" element={<Balance />}></Route>
          <Route path="/new-outcome" element={<NewOutcome />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
