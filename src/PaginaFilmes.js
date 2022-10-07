import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components"

export default function PaginaFilmes() {
    const [filmes, setFilmes] = useState([])
    const [idFilme, setIdFilme] = useState('')

    useEffect(() => {
        const listaFilmes = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        listaFilmes.then((resposta) => {
            setFilmes(resposta.data)
            console.log(resposta.data)
        })
        listaFilmes.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])

    return (
        <ContainerPaginaFilmes>
            <ContainerSelecionar>
                <p>Selecione o filme</p>
            </ContainerSelecionar>
            <ContainerFilmes>
                {filmes.map((posterfilme) => <img src={posterfilme.posterURL} />)}
            </ContainerFilmes>
        </ContainerPaginaFilmes>
    )
}

const ContainerPaginaFilmes = styled.div`
width: 375px;
height: 100%;
background: #E5E5E5;
display: flex;
flex-direction: column;
align-items: center;
`

const ContainerSelecionar = styled.div`
margin-top: 67px;
display: flex;
justify-content: center;
align-items: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        margin-top: 35px;
        margin-bottom: 35px;

    }
`

const ContainerFilmes = styled.div`
width: 300px;
height: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
    img {
        width: 129px;
        height: 193px;
        margin-bottom: 25px;
    }
`