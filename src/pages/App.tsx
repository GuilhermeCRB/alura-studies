import { useState } from 'react';
import { faker } from '@faker-js/faker';

import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';

function App() {
    const [tarefas, setTarefas] = useState([
        { id: faker.datatype.uuid(), tarefa: 'React', tempo: '02:00:00' }, 
        { id: faker.datatype.uuid(), tarefa: 'Javascript', tempo: '01:00:00' },
        { id: faker.datatype.uuid(), tarefa: 'Typescript', tempo: '03:00:00' }
    ]);

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Cronometro />
            <Lista tarefas={tarefas} />
        </div>
    );
}

export default App;
