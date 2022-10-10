import { Link } from "react-router-dom"
import styled from "styled-components"

export default function PaginaFinalizar({ infoFinais, setInfoFinais }) {

    console.log(infoFinais)

    return (
        <ContainerPaginaFinalizar>
            <ContainerSelecionar>
                <p>Pedido feito com sucesso!</p>
            </ContainerSelecionar>
            <ContainerFinalizar >
                <h1>Filme e sessão</h1>
                <p data-identifier="movie-session-infos-reserve-finished">{infoFinais.filme}</p>
                <p data-identifier="movie-session-infos-reserve-finished">{infoFinais.data} - {infoFinais.hora}</p>
            </ContainerFinalizar>
            <ContainerFinalizar>
                <h1>Ingressos</h1>
                {infoFinais.assentoEscolhido.map((a) => (<p data-identifier="seat-infos-reserve-finished">Assento {a}</p>))}
            </ContainerFinalizar>
            <ContainerFinalizar>
                <h1>Comprador</h1>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {infoFinais.nome}</p>
                <p data-identifier="buyer-infos-reserve-finished">CPF: {infoFinais.CPF}</p>
            </ContainerFinalizar>
            <BotaoHome>
                <Link to={'/'}>
                    <p data-identifier="back-to-home-btn">Voltar para Home</p>
                </ Link>
            </BotaoHome>
        </ContainerPaginaFinalizar>
    )
}

const ContainerPaginaFinalizar = styled.div`
width: 375px;
height: 650px;
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
width: 150px;
text-align: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        margin-top: 35px;
        margin-bottom: 45px;
        color: #247A6B;
    }
`

const ContainerFinalizar = styled.div`
margin-bottom: 20px;
width: 300px;

    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 5px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 5px;
    }
`

const BotaoHome = styled.div`
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