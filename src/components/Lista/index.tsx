import style from './style.module.scss';
import Item from './Item';
import ITarefa from '../../types/tarefa';

export default function Lista({ tarefas }: { tarefas: ITarefa[] }) {  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
          {tarefas.map((item) => (
          <Item
            key={item.id}
            {...item}
          />
          ))}
      </ul>
    </aside>
  )
}