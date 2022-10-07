import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components"

export default function PaginaSessoes() {
    const [horario, setHorario] = useState([])

    useEffect(() => {
        const listaSessoes = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes");
        listaSessoes.then((resposta) => {
            console.log(resposta.data)
            setHorario(resposta.data)
            console.log(resposta.data.id)
        })
        listaSessoes.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])

    return (
        <ContainerPaginaSessoes>
            <ContainerSelecionar>
                <p>Selecione o horário</p>
            </ContainerSelecionar>
            <ContainerSessoes>
                <p>quinta-feira - 20/05/2022</p>
                <Horarios>
                    <BotaoHora>
                        <p>10:30</p>
                    </BotaoHora>
                    <BotaoHora>
                        <p>18:30</p>
                    </BotaoHora>
                </Horarios>
            </ContainerSessoes>
            <FooterFilme>
                <img src="https://pad.mymovies.it/filmclub/2019/06/247/locandina.jpg"/>
                <p>Enola Holmes</p>
            </FooterFilme>
        </ContainerPaginaSessoes>

    )
}

const ContainerPaginaSessoes = styled.div`
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
const ContainerSessoes = styled.div`
width: 300px;
height: 500px;
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #293845;
    }
`

const Horarios = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const BotaoHora = styled.button`
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 22px;
margin-right:8px;
border: none;
    p{
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }
`

const FooterFilme = styled.div`
width: 375px;
height: 117px;
background-color: #DFE6ED;
position: fixed;
left: 0;
bottom: 0;
display: flex;
justify-content: flex-start;
align-items: center;
    img{
        width: 48px;
        height: 72px;
        margin-left:18px;
        margin-right: 14px;
        border: 8px solid white;
        border-radius: 2px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        color: #293845;
    }
`