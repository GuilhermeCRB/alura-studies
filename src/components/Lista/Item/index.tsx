import { memo } from 'react';

import style from '../style.module.scss';
import ITarefa from '../../../types/tarefa';

interface Props extends ITarefa{
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void    
}

function Item({ selecionaTarefa, tarefa, tempo, selecionado, completado, id}: Props) {
  return (
    <li 
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={()=> selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      })}
    >
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  )
}

export default memo(Item);