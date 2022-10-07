import { useState } from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom';


export default function PaginaAssentos() {
    const [nome, setNome] = useState('')
    const [CPF, setCPF] = useState('')
    console.log(nome)
    console.log(CPF)
    const {filmeId} = useParams();

	console.log(filmeId);

    return (
        <>
            <ContainerPaginaAssentos>
                <ContainerSelecionar>
                    <p>Selecione o(s) assento(s)</p>
                </ContainerSelecionar>
                <ContainerAssentos>
                    <div>
                        <p>01</p>
                    </div>
                </ContainerAssentos>
                <Legendas>
                    <Legenda>
                        <div></div>
                        <p>Selecionado</p>
                    </Legenda>
                    <Legenda>
                        <div></div>
                        <p>Disponível</p>
                    </Legenda>
                    <Legenda>
                        <div></div>
                        <p>Indisponível</p>
                    </Legenda>
                </Legendas>
                <InfoComprador>
                    <p>Nome do comprador:</p>
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
                    <p>CPF do comprador:</p>
                    <input type="text" value={CPF} onChange={e => setCPF(e.target.value)}></input>
                </InfoComprador>
                <BotaoReservar>
                    <p>Reservar assento(s)</p>
                </BotaoReservar>
                <FooterFilme>
                    <img src="https://pad.mymovies.it/filmclub/2019/06/247/locandina.jpg" />
                    <FilmeHorario>
                        <p>Enola Holmes</p>
                        <p>Quinta-feira - 18:00</p>
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
width: 330px;
height: 200px;
display: flex;
justify-content: space-between;
background-color: blue;
flex-wrap: wrap;

    div{
        width: 26px;
        height:26px;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

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
    
div {
        width: 26px;
        height:26px;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
        margin-left: 17px;
        margin-bottom: 10px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #4E5A65;
        
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