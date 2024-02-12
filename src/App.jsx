import { useState } from 'react';

import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './Navegacao.jsx';
import { ItemCardapio } from './ItemCardapio.jsx';
import {pratosPrincipais, sobremesas, bebidas} from "./cardapio.js";



export function App() {               // Daniel: faz o bolo [funcao], Daniel: traz o bolo [return]
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0); //super variavel de estado
  
  return  <> 
            <h1 className='nomeRestaurante'>RESTAURANTE EM MONACO</h1>
            <img className='capa' src={Hashtaurante} alt="imagem do restaurante" /> 
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
            <div className='menu'>
              {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
            </div>           
          </>
}
