import React, { useState, useEffect, useContext } from 'react';
import TarefasContext from '../../../context/tarefas'

const TarefasListas = () => {
   
  const context = useContext(TarefasContext)
  const loadData = () => {
    context.loadTarefasPendentes()
    context.loadTarefasConcluidas()
    //console.log("tarefas")
  }

  useEffect(() => {
    loadData()
  }, [])

   return (
      <ul className="user-meta">
        <li>Concluídas:
        <span>{context.tarefasConcluidas.length}</span>
      </li>
          <li>Tarefas Pendentes: <span>{context.tarefasPendentes.length}</span></li>
      </ul>
  );
};

export default TarefasListas;
//export default function  loadTarefas({})
