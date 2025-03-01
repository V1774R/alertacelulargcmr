import axios from "axios"

const base_api = "http://45.197.14.129/alertacelulargcmr"
const url = `http://45.197.14.129/alertacelulargcmr/api`

const postConfig = {
    headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer seu-token-aqui" // Token de autenticação, se necessário
    }
}

const listarUsuarios = async () => {
    const res = await axios.get(`${url}/usuario/listar`)
    return res.data
}


const cadastrarUsuario = async (dados) => {
    const res = await axios.post(`${url}/usuario/inserir`, dados, postConfig)
    console.log(res)
    return res.data
}

const processarListaUsuarios = async (lista) => {
    var count = 0;
    for (const usuario of lista) {
        if(usuario.nome != ""){
            const usuarioInserir = {
                "nome": usuario.nome,
                "cidade": usuario.cidade ? usuario.cidade : "registro ausente",
                "estado": usuario.estado ? usuario.estado : "registro ausente",
                "escolaridade": usuario.escolaridade ? usuario.escolaridade : "registro ausente",
                "nascimento": usuario.nascimento ? usuario.nascimento : "0001-01-01",
                "imei1": usuario.imei1 ? usuario.imei1 : "registro ausente",
                "imei2": usuario.imei2 ? usuario.imei2 : "registro ausente",
                "modelo": usuario.modelo ? usuario.modelo : "registro ausente",
            }
            try {
                await cadastrarUsuario(usuarioInserir)
                console.log("sucesso!")
                console.log(usuarioInserir)
                count++;
               
            } catch (error) {
                console.error(`Erro ao processar usuário: ${usuarioInserir.nome}`);
                console.log(usuarioInserir)
                break;
            }
        }

    }
}

export default {
    listarUsuarios,
    cadastrarUsuario,
    // processarListaUsuarios
}