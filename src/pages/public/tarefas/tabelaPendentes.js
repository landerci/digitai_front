import React, { useEffect, useState, useContext } from 'react';
import TarefasContext from '../../../context/tarefas'

const TabelaTarefasPendentes = () => {

    const context = useContext(TarefasContext)
    const loadTarefas = () => {        
        context.loadTarefasPendentes()
    }
    const finalizarTarefa = (data) =>{
        console.log(data)
        context.finalizarTarefa(data)
    }
    function changeColorOver(data){        
        data.target.className = "icofont-circled-down icofont-3x text-success"
    }
    function changeColorOut(data){        
        data.target.className = "icofont-circled-down icofont-3x"
    }
    const [permiteEdicao, setPermiteEdicao] = useState(false)
    //loadTarefas()

    useEffect(() => { 
        loadTarefas()
    }, [])

    const handleClick = (e) => {
        switch (e.detail) {
 
          case 2:
            if(permiteEdicao){
                setPermiteEdicao(false)
            }else{
                setPermiteEdicao(true)
            }
            break;
        }
      };

    return (
        <>
            {(context.tarefasPendentes.length > 0)  ?
                <div className="block-box post-input-tab forum-post-input">
                    <table className='table'>
                        <thead className='table head'>
                            <tr>
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
                                Finalizar
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {context.tarefasPendentes.map(tarefa => (
                                <tr key={tarefa.id}>
                                    <td>
                                        {tarefa.id}
                                    </td>
                                    <td>
                                        {tarefa.nome}
                                    </td>
                                    <td onClick={(e) => handleClick(e)}>
                                    {permiteEdicao ?
                                    <div contentEditable>
                                        {tarefa.comentario}
                                    </div>
                                    :
                                        tarefa.comentario
                                    }
                                    </td>
                                    <td>
                                        {tarefa.tempo}
                                    </td>
                                    <td>
                                        {
                                        tarefa.recompensa != "" && tarefa.recompensa != undefined &&
                                            <i class="icofont-cube icofont-3x text-danger"></i>
                                        }
                                    </td>
                                    <td>
                                        <div className="submit-btn">
                                            <a><i value="btnValidado" className="icofont-circled-down icofont-3x" onClick={(e) => finalizarTarefa(tarefa.id)} onMouseOver={(e) => changeColorOver(e)} onMouseOut={(e) => changeColorOut(e)}></i></a>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>: <span> carregando tarefas pendentes</span>
            }
        </>
    )

}
export default TabelaTarefasPendentes