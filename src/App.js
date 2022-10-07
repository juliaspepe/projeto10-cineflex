import Navbar from "./Navbar"
import PaginaAssentos from "./PaginaAssentos"
import PaginaFilmes from "./PaginaFilmes"
import PaginaFinalizar from "./PaginaFinalizar"
import PaginaSessoes from "./PaginaSessoes"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<PaginaFilmes />} />
                <Route path="/sessoes" element={<PaginaSessoes />} />
                <Route path="/assentos" element={<PaginaAssentos />} />
                <Route path="/finalizar" element={<PaginaFinalizar />} />
            </Routes>
        </BrowserRouter>
    )
}