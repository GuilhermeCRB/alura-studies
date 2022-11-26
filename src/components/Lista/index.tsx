import style from './style.module.scss';
import Item from './Item';

export default function Lista() {
    const tarefas = [{ tarefa: 'React', tempo: '02:00:00' }, { tarefa: 'Javascript', tempo: '01:00:00'  }]
    return (
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
            <Item
              key={index}
              {...item}
            />
            ))}
        </ul>
      </aside>
    )
}