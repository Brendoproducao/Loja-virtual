import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Card from "./components/card";
import Cadastro from "./pages/form";
import Detalhes from "./pages/detalhes";
import LoginForm from "./pages/login";
function AppRouter() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detalhes/:id" element={<Detalhes/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/card" element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
