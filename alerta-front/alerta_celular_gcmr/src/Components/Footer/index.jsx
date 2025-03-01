import styled from "styled-components"

const Rodape = styled.footer`
    background-color: var(--cor-rodape);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 0.8rem;
`
export const Footer = () => {
    return (
        <Rodape>
            &copy; - Todos os direitos reservados. 
            {/* <br />
            Desenvolvido por Victor Almeida (Villar) */}
        </Rodape>
    )
}