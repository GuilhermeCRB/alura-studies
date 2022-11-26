import style from './style.module.scss';
import Item from './Item';
import ITarefa from '../../types/tarefa';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
};

export default function Lista({ tarefas, selecionaTarefa }: Props) {  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
          {tarefas.map((item) => (
          <Item
            key={item.id}
            selecionaTarefa={selecionaTarefa}
            {...item}
          />
          ))}
      </ul>
    </aside>
  )
}