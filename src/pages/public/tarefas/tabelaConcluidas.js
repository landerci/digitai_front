import React, { useEffect, useState, useContext } from 'react';
import TarefasContext from '../../../context/tarefas'

const TabelaTarefasConcluidas = (value ) => {

    const context = useContext(TarefasContext)
    const loadTarefas = () => {
        context.loadTarefasConcluidas()

    }
    useEffect(() => { 
        loadTarefas()
    },[])
    return (
        <>
            {(context.tarefasConcluidas.length > 0)  ?
                <div className="block-box post-input-tab forum-post-input">
                    <table className='table'>
                        <thead>
                        <tr className='table head'>
                            <th>
                                ID
                            </th>
                            <th>
                                Nome
                            </th>
                            <th>
                                Comentario
                            </th>
                            <th>
                                Tempo
                            </th>
                            <th>
                                Recompensa
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {context.tarefasConcluidas.map(tarefa => (
                                <tr key={tarefa.id}>
                                    <td>
                                        {tarefa.id}
                                    </td>
                                    <td>
                                        {tarefa.nome}
                                    </td>
                                    <td>
                                        {tarefa.comentario}
                                    </td>
                                    <td>
                                        {tarefa.tempo}
                                    </td>
                                    <td>
                                        {tarefa.recompensa != "" && tarefa.recompensa != undefined &&
                                            <i class="icofont-cube icofont-3x text-danger"></i>
                                        }
                                    </td>
                                    <td>
                                        {tarefa.completa}
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>: <span> carregando tarefas</span>
            }
        </>
    )

}
export default TabelaTarefasConcluidas