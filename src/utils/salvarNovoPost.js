import axios from '../axios/axios'


const salvarNovoPost = async (novoPost, setMensagem) => {

    try { 
       const resposta = await axios.post('post', novoPost);
       setMensagem('O novo post foi cadastrado!')
    }
    catch(error) {
        setMensagem("Houve algum problema no cadastro do novo Post");
    }
}

export default salvarNovoPost;