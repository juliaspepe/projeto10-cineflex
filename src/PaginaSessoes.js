import axios from "axios"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { Link, useParams } from "react-router-dom";

export default function PaginaSessoes() {
    const [sessao, setSessao] = useState([])
    const [dia, setDia] = useState([])
    const { filmeId } = useParams()

    useEffect(() => {
        const listaSessoes = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
        listaSessoes.then((resposta) => {
            setSessao(resposta.data)
            setDia(resposta.data.days)
            console.log(resposta.data)
            console.log(resposta.data.days)
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
                {dia.map((d) =>
                    <>
                        <p data-identifier="session-date">{d.weekday} - {d.date}</p>
                        <Horarios>
                            {d.showtimes.map((s) =>
                                <Link to={`/assentos/${s.id}`}>
                                    <BotaoHora>
                                        <p data-identifier="hour-minute-btn">{s.name}</p>
                                    </BotaoHora>
                                </Link>)}
                        </Horarios>
                    </>
                )}
            </ContainerSessoes>
            <FooterFilme>
                <img data-identifier="movie-img-preview" src={sessao.posterURL} />
                <p data-identifier="movie-and-session-infos-preview">{sessao.title}</p>
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

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        margin-top: 35px;
        margin-bottom: 25px;

    }
`
const ContainerSessoes = styled.div`
width: 300px;
height: 100%;
margin-bottom: 80px;
   
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
margin-bottom: 35px;
margin-top: 25px;
`

const BotaoHora = styled.button`
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
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