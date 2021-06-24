import axios from '../axios/axios';

const pegarPosts = async (salvarState) => {

try {
    const resposta = await axios.get('pics');
    salvarState(resposta.data);
} catch (erro) {
    console.log(`Ocorreu um erro": ${ erro.message }`)
};

};

export default pegarPosts;

