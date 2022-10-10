import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function PaginaAssentos({ infoFinais, setInfoFinais }) {
    const [nome, setNome] = useState('')
    const [CPF, setCPF] = useState('')
    const [poster, setPoster] = useState('')
    const [hora, setHora] = useState([])
    const [lugar, setLugar] = useState([])
    const [dia, setDia] = useState([])
    const [data, setData] = useState([])
    const [filme, setFilme] = useState([])
    const [status, setStatus] = useState('disponivel')
    const [assentoEscolhido, setAssentoEscolhido] = useState([])
    const { sessaoId } = useParams()
    const navigate = useNavigate()
    console.log(status)

    console.log(lugar)

    useEffect(() => {
        const listaAssentos = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        listaAssentos.then((resposta) => {
            setHora(resposta.data.name)
            setLugar(resposta.data.seats)
            setPoster(resposta.data.movie.posterURL)
            setFilme(resposta.data.movie.title)
            setDia(resposta.data.day.weekday)
            setData(resposta.data.day.date)

        })
        listaAssentos.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])

    function reservarAssento(disponibilidade, idAssento, escolhido) {
        console.log(disponibilidade)

        if (disponibilidade === true) {
            setStatus('selecionado')
            setAssentoEscolhido([...assentoEscolhido, escolhido])
            alert(`assento ${escolhido} escolhido`)
        } else {
            alert("Assento indisponível")
        }
    }

    function Infos(evento) {

        evento.preventDefault();
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
            {
                ids: assentoEscolhido,
                name: nome,
                cpf: CPF
            });

        setInfoFinais({ nome, CPF, filme, data, assentoEscolhido, hora })

        requisicao.then(() => { navigate("/finalizar") })
    }

    return (
        <>
            <ContainerPaginaAssentos>
                <ContainerSelecionar>
                    <p>Selecione o(s) assento(s)</p>
                </ContainerSelecionar>
                <ContainerAssentos>
                    {lugar.map((n) =>
                        <Assento status={status}>
                            <p data-identifier="seat" onClick={() => reservarAssento(n.isAvailable, n.id, n.name)}>{n.name}</p>
                        </Assento>
                    )}
                </ContainerAssentos>
                <Legendas>
                    <Legenda>
                        <Selecionado />
                        <p data-identifier="seat-selected-subtitle">Selecionado</p>
                    </Legenda>
                    <Legenda>
                        <Disponivel />
                        <p data-identifier="seat-available-subtitle">Disponível</p>
                    </Legenda>
                    <Legenda>
                        <Indisponivel />
                        <p data-identifier="seat-unavailable-subtitle">Indisponível</p>
                    </Legenda>
                </Legendas>
                <InfoComprador>
                    <p>Nome do comprador:</p>
                    <input data-identifier="buyer-name-input" type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
                    <p>CPF do comprador:</p>
                    <input data-identifier="buyer-cpf-input" type="text" value={CPF} onChange={e => setCPF(e.target.value)}></input>
                </InfoComprador>
                <BotaoReservar>
                    <p data-identifier="reservation-btn" onClick={Infos}>Reservar assento(s)</p>
                </BotaoReservar>
                <FooterFilme>
                    <img src={poster} />
                    <FilmeHorario>
                        <p>{filme}</p>
                        <p>{dia} - {hora}</p>
                    </FilmeHorario>
                </FooterFilme>
            </ContainerPaginaAssentos>
        </>
    )
}

const ContainerPaginaAssentos = styled.div`
width: 375px;
height: 850px;
background: #E5E5E5;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
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
const ContainerAssentos = styled.div`
width: 300px;
height: 200px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;  
`

const Assento = styled.div`
    width: 26px;
    height:26px;
    border: 1px solid #808F9D;
    border-radius: 12px;
    background-color: #C3CFD9;
        p{
            display: flex;
            justify-content: center;
            align-itens: center;
            margin-top: 7px;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            color: #000000;
        }
`

const Legendas = styled.div`
        width: 250px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-itens: center;
        margin-top: 10px;
`

const Legenda = styled.div`
display: flex;
flex-direction: column;
align-itens: center;
justify-content: center;
    
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #4E5A65;
        
    }
`

const Selecionado = styled.div`  
width: 26px;
height: 26px;
background-color: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 12px;
margin-left: 17px;
margin-bottom: 10px;
`

const Disponivel = styled.div`  
width: 26px;
height: 26px;
background-color: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 12px;
margin-left: 17px;
margin-bottom: 10px;
`
const Indisponivel = styled.div`  
width: 26px;
height: 26px;
background-color: #FBE192;
border: 1px solid #F7C52B;
border-radius: 12px;
margin-left: 17px;
margin-bottom: 10px;
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
`

const FilmeHorario = styled.div`
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        color: #293845;
    }
`

const InfoComprador = styled.div`
width: 330px;
margin-top:35px;

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #293845;
        margin-top: 7px;
        margin-bottom: 5px;
    }

    input{
        width: 320px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
`

const BotaoReservar = styled.button`
width: 225px;
height: 42px;
background-color: #E8833A;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 35px;
border: none;

    p{
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }
`