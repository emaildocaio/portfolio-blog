import { LinkedCameraSharp } from '@material-ui/icons';
import React, {useState} from 'react';
import salvarNovoPost from '../../../utils/salvarNovoPost';
import './NovoPost.css'

const NovoPost = ({categorias}) => {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [idCategoria, setIdCategoria] = useState(-1)
const [image, setImage] = useState('')
const [likes, setLikes] = useState(0)

const [mensagem, setMensagem] = useState("")



    const incluirNovoPost = evento => {
        console.log("Form submitado")
        evento.preventDefault();

        if (!image || !description || !title ||!idCategoria){
            return false
        }

        const novoPost = {
            "image": image,  
            "title": title,
            "description": description,
            "idCategoria": idCategoria,
            "likes": likes,
            "dataPostagem": `${ano}-${mesFormatado}-${dia}`
        };

        salvarNovoPost(novoPost, setMensagem);
    }

    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();
    const dia = hoje.getDate();

    const mesFormatado = (mes + 1) < 10 ? "0" + String( (mes + 1) ) : String((mes + 1));

   

    // Chamar o serviço e passar objeto novo post

    
  

    return (
        <div className='inserir-bloco'>
            <div id="np">
                <h1>Novo Post</h1>

                { mensagem ? <p>{mensagem}</p>: null }

                <form onSubmit = { evento => incluirNovoPost(evento)}>
                    <div className="np-campo">
                        <label htmlFor='np-campo-titulo'>Título</label>
                        <input id='np-campo-titulo' 
                        name='np-campo-titulo'
                        value ={title} 
                        onChange = {evento => setTitle(evento.target.value)} 
                        required></input>
                    </div>
                    <div className="np-campo">
                        <label htmlFor = 'np-campo-categoria'>Categoria</label>
                        <select 
                                id = "np-campo-categoria"
                                name = "np-campo-categoria"
                                value = {idCategoria}
                                onChange = {evento => setIdCategoria(evento.target.value)}>
                            <option value={-1} id='np-campo-categoria' name='np-campo-categoria' disable>Selecione uma Categoria</option>
                            { categorias.map(item => {
                               return <option value={item.id} key={item.id}>{item.descricao}</option>
                            })}
                        </select>
                    </div>

                    <div className="np-campo">
                        <label htmlFor='np-campo-imagem'>Imagem</label>
                        <input 
                        id='np-campo-imagem' 
                        name='np-campo-imagem'
                        value={image}
                        onChange = {evento => setImage(evento.target.value)}
                        required></input>                        
                    </div>

                    <div className="np-campo">
                        <label htmlFor='np-campo-descricao'>Descrição</label>
                        <textarea type  
                        id='np-campo-descricao' 
                        name='np-campo-descricao'
                        value= {description}
                        onChange = {evento => setDescription(evento.target.value)}
                        required></ textarea>
                    </div> 

                    <button>Salvar</button>

                </form>
            </div>
        </div>
        )
};

export default NovoPost;