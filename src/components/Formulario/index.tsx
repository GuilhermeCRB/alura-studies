import React, { useState } from 'react';
import Botao from '../Botao';
import style from './style.module.scss';

export default function Formulario () {
    const [input, setInput] = useState({ 
        tarefa: '--',
        tempo: "00:00"
    })

    function adicionarTarefa(e: React.FormEvent){
        e.preventDefault();
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    value={input.tarefa}
                    onChange={(e => setInput({ ...input, tarefa: e.target.value}))}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>                    
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={input.tempo}
                    onChange={(e => setInput({ ...input, tempo: e.target.value}))}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao>Adicionar</Botao>
        </form>
    );
}
