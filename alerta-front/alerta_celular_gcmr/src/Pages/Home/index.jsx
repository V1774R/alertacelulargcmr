import styled from "styled-components"

const TelaInicial = styled.div`
    width: 100%;
    height: calc(100vh - 60px - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1, p{
        text-align: center;
    }
    .logo{
        width: 100px;
    }
`

export const Home = () => {
    return(
        <TelaInicial>
            <img className="logo" src="https://boegcmr-front.app.emprel.gov.br/imgs/logo.png" alt="Brasão GCMR" />
            <h1 className="titulo">Alerta Celular GCMR</h1>
            <p>
                Essa ferramenta permite otimizar a atividade de cadastro de usuários 
                do serviço alerta celular para fins de utilização nas plataformas da GCMR.
            </p>
        </TelaInicial>
    )
}