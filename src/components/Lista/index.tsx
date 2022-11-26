import { faker } from '@faker-js/faker';

import style from './style.module.scss';
import Item from './Item';

export default function Lista() {
    const tarefas = [
      { id: faker.datatype.uuid(), tarefa: 'React', tempo: '02:00:00' }, 
      { id: faker.datatype.uuid(), tarefa: 'Javascript', tempo: '01:00:00'  }
    ]
    
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