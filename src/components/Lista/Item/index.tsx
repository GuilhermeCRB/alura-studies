import { memo } from 'react';

import style from '../style.module.scss';
import ITarefa from '../../../types/tarefa';

function Item({ tarefa, tempo, selecionado, completado, id}: ITarefa) {
    return (
     <li className={style.item}>
       <h3> {tarefa} </h3>
       <span> {tempo} </span>
     </li>
    )
}

export default memo(Item);