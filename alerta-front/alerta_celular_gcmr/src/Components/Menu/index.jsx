import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuEstilizado = styled.header`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    background-color: var(--cor-menu);
    p{
        font-size: 1.2rem;
        color: white;
    }
`

export const Menu = () => {
    return(
        <MenuEstilizado> 
            <Link to={"/"}> <p>Início</p> </Link>
            <Link to={"/cadastrar"}> <p>Cadastro</p></Link>
            <Link to={"/usuarios"}> <p>Usuários</p></Link>
        </MenuEstilizado>
    )
}