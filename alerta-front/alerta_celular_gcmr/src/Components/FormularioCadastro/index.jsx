import { useState } from 'react'
import styled from 'styled-components'
import conn from '../../Requisicoes/conn'

const FormularioRegistro  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    label{
        font-size: 0.8rem;
        font-weight: bold;
    }
    input, select, button{
        padding: 8px;
    }
`

export const FormularioCadastro = () => {

    const [campos, setCampos] = useState({
        nome: '',
        cidade: '',
        estado: '',
        escolaridade: '',
        nascimento: '',
        imei1: '',
        imei2: '',
        modelo: ''
    })

    const handleCampos = (e) => {
        const {name, value} = e.target
        setCampos((prevState) => ({
            ...prevState, 
            [name]: value, 
        }));
        console.log(campos)
    }

    const inserir = async (dados) => {
        try{
            const res = await conn.cadastrarUsuario(dados)
            alert('Cadastro realizado com sucesso!')
            setCampos({
                nome: '',
                cidade: '',
                estado: '',
                escolaridade: '',
                nascimento: '',
                imei1: '',
                imei2: '',
                modelo: ''
            })
        }catch(error){
            console.log(error)
            alert(error)
        }
    }

    const validar = (dados) => {
        console.log(dados)
        const listaCamposVazios = []
        for(let chave in dados){
            if(dados[chave] == ''){
                listaCamposVazios.push(chave)
            }
        }
        if(listaCamposVazios.length > 0){
            alert(`Necessário preencher para continuar: ${listaCamposVazios}`)
        }else{
            inserir(dados)
        }
    }



    return(
        <>
            <h1>Cadastro</h1>
            <FormularioRegistro>
                <input type="text" name="nome" placeholder="Nome" value={campos.nome} onChange={handleCampos}/>
                <input type="text" name="cidade" placeholder="Cidade" value={campos.cidade} onChange={handleCampos}/>
                <input type="text" name="estado" placeholder="Estado" value={campos.estado} onChange={handleCampos}/>
                
                <label htmlFor="escolaridade">Data de nascimento</label>
                <select name="escolaridade" id="escolaridade" onChange={handleCampos} value={campos.escolaridade}>
                    <option value="">Escolaridade (selecione)</option>
                    <option value="Sem Instrução">Sem Instrução</option>
                    <option value="Fundamental Incompleto">Fundamental Incompleto</option>
                    <option value="Fundamental Completo">Fundamental Completo</option>
                    <option value="Médio Incompleto">Médio Incompleto</option>
                    <option value="Médio Completo">Médio Completo</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Superior Incompleto">Superior Incompleto</option>
                    <option value="Superior Completo">Superior Completo</option>
                    <option value="Pós-Graduação">Pós-Graduação</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                    <option value="Pós-Doutorado">Pós-Doutorado</option>
                </select>


                <label htmlFor="nascimento">Data de nascimento</label>
                <input name="nascimento" type="date" id='nascimento'onChange={handleCampos} value={campos.nascimento}/>
                <input name="imei1" type="text" placeholder="IMEI 1" onChange={handleCampos} value={campos.imei1}/>
                <input name="imei2" type="text" placeholder="IMEI 2" onChange={handleCampos} value={campos.imei2}/>
                <input name="modelo" type="text" placeholder="Modelo do aparelho" onChange={handleCampos} value={campos.modelo}/>
                <button onClick={()=>{validar(campos)}}>cadastrar</button>
            </FormularioRegistro>
        </>

    )
}