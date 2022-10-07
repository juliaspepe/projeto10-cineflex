import styled from "styled-components"

export default function Navbar(){
    return(
        <ContainerNavbar>
            <p>CINEFLEX</p>
        </ContainerNavbar>
    )
}

const ContainerNavbar = styled.div`
width: 375px;
height: 67px;
background-color: #C3CFD9;
position: fixed;
left: 0;
top: 0;

      p{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #E8833A;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        margin-top: 18px;
    }
`