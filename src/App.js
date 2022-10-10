import Navbar from "./Navbar"
import PaginaAssentos from "./PaginaAssentos"
import PaginaFilmes from "./PaginaFilmes"
import PaginaFinalizar from "./PaginaFinalizar"
import PaginaSessoes from "./PaginaSessoes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App() {
    const [infoFinais, setInfoFinais] = useState({})

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<PaginaFilmes />} />
                <Route path="/sessoes/:filmeId" element={<PaginaSessoes />} />
                <Route path="/assentos/:sessaoId" element={<PaginaAssentos infoFinais={infoFinais} setInfoFinais={setInfoFinais} />} />
                <Route path="/finalizar" element={<PaginaFinalizar infoFinais={infoFinais} setInfoFinais={setInfoFinais} />} />
            </Routes>
        </BrowserRouter>
    )
}