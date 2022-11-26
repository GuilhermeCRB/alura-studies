import { useState } from 'react';

import ITarefa from '../types/tarefa';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Cronometro />
            <Lista tarefas={tarefas} />
        </div>
    );
}

export default App;
