import { useState } from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    *{
        margin: 0px;
    }
    h3{
        padding: 4px;
        background-color: var(--cor-menu);
        color: #ffffff;
    }
    .detalhes{
        padding: 2px;
        background-color: #999999;
        min-height: 100px;
        position: relative;
        left: 0%;
        transition: 0.5s;
    }
    .hide{
        opacity: 0;
        min-height: 0px;
        height: 0px;
        position: relative;
        left: -100%;
        transition: 0.5s;
    }
` 

export const CardUsuario = ({usuario}) => {
    const [visibilidade, setVisibilidade] = useState("hide");

    const alternarVisibilidade = () => {
        if(visibilidade == "show"){
            setVisibilidade("hide")
        }else{
            setVisibilidade("show")
        }
    }

    return(
        <Card>
            <h3 onClick={alternarVisibilidade}>{usuario.nome} - {usuario.modelo}</h3>
            <div className={`detalhes ${visibilidade}`}>
                <p>Modelo: {usuario.modelo}</p>
                <p>Cidade: {usuario.cidade}</p>
                <p>Estado: {usuario.estado}</p>
                <p>Data Nasc.: {usuario.nascimento}</p>
                <p>IMEI 1: {usuario.imei1}</p>
                <p>IMEI 2: {usuario.imei2}</p>
                <p>Resgistrado em {usuario.criacao}</p>
            </div>
        </Card>
    )
}