import { faker } from '@faker-js/faker';

import style from './style.module.scss';
import Item from './Item';
import { useState } from 'react';

export default function Lista() {
    const [tarefas, setTarefas] = useState([
      { id: faker.datatype.uuid(), tarefa: 'React', tempo: '02:00:00' }, 
      { id: faker.datatype.uuid(), tarefa: 'Javascript', tempo: '01:00:00' },
      { id: faker.datatype.uuid(), tarefa: 'Typescript', tempo: '03:00:00' }
    ]);
    
    return (
      <aside className={style.listaTarefas}>
        <h2 onClick={() => {
            setTarefas([...tarefas, { id: faker.datatype.uuid(), tarefa: "Estudar estado", tempo: "05:00:00" }])
        }}>Estudos do dia</h2>
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