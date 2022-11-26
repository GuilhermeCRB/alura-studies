import { useState } from 'react';

import ITarefa from '../types/tarefa';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './style.module.scss';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionaTarefa(tarefaSelecionada: ITarefa){
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })));
    }

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Cronometro />
            <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
        </div>
    );
}

export default App;
