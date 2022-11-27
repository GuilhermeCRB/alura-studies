import { useEffect, useState } from 'react';

import style from './style.module.scss'
import Botao from "../Botao";
import Relogio from "./Relogio";
import ITarefa from '../../types/tarefa';
import { tempoParaSegundos } from '../../common/utils/tempo';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
   const [tempo, setTempo] = useState<number>();

   useEffect(() => {
      if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
      }
   },[selecionado]);
  
   function regressiva(contador = 0) {
      setTimeout(() => {
         if(contador > 0) {
            setTempo(contador - 1);
            regressiva(contador - 1);
         }
      }, 1000);
   };

   return (
      <div className={style.cronometro}>
         <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
         <Relogio tempo={tempo} />
         </div>
         <Botao onClick={() => regressiva(tempo)}>
            Começar!
         </Botao>
      </div>
   )
}