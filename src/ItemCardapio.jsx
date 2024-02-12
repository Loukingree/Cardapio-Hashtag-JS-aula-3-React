//import { enroladinhoMignon } from "./cardapio.js";
//Ctrl + D para selecionar cursor em todos os items similares
//Ctrl + Alt + setas para aumentar o cursor

export function ItemCardapio(props) {
    
    return  <div className="container-item-cardapio">
                <div>
                    <h2>{props.nome}</h2>
                    <p>{props.preco}</p>
                    <p>{props.descricao}</p>
                </div>
                <img src={props.imagem} alt="" />
            </div> 
}