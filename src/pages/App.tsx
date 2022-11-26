import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';

function App() {
    const [tarefas, setTarefas] = useState([
        { id: uuidv4(), tarefa: 'React', tempo: '02:00:00' }, 
        { id: uuidv4(), tarefa: 'Javascript', tempo: '01:00:00' },
        { id: uuidv4(), tarefa: 'Typescript', tempo: '03:00:00' }
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
