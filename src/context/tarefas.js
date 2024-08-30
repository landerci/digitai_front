import React, { createContext, useEffect, useState } from "react";
import tarefaService from '../services/TarefaService'
import Swal from 'sweetalert2';

const TarefasContext = createContext();

export const ListaTarefas = ({children}) => {
  
    const [tarefasConcluidas, setTarefasConcluidas] = useState([]) 
    const [tarefasPendentes, setTarefasPendentes] = useState([]) 

    
    const loadTarefasConcluidas=() => {
        tarefaService.getAllConcluidas().then((response) => {
            let data = response.data
            data = data.map((tarefa) => {
                return {
                    id: tarefa.id,
                    nome: tarefa.nome,
                    comentario: tarefa.comentario,
                    tempo: tarefa.tempo,
                    recompensa:tarefa.recompensa
                }
            })
            setTarefasConcluidas(data) 
        }).catch((error) => {
            alert("deu erro tarefas Concluidas")
        })
    
    }

    const loadTarefasPendentes=() => {
        tarefaService.getAllPendentes().then((response) => {
            let data = response.data
            data = data.map((tarefa) => {
                return {
                    id: tarefa.id,
                    nome: tarefa.nome,
                    comentario: tarefa.comentario,
                    tempo: tarefa.tempo,
                    recompensa:tarefa.recompensa
                }
            })
            setTarefasPendentes(data) 
        }).catch((error) => {
            alert("deu erro tarefas Pendentes")
        })
    }

    const finalizarTarefa = (data) => {
        console.log(data)
        tarefaService.finalizar(data).then((response) => {
            let data = response.data
            Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Tarefa finalizada'
            }).then(() => {
                loadTarefasPendentes()
                loadTarefasConcluidas()
            })
        }).catch((error) => {
            alert("Não foi possível finalizar a tarefa")
        })
    }

    const save = (data) => {
        let putData = {
            nome:data.nome,
            comentario:data.comentario,
            completa: false,
            recompensa:"",
            tempo:data.tempo
        }

        console.log(putData)
        tarefaService.save(putData).then((response) => {

            console.log("tarefaService.save",data)
            console.log(response)
            Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Dados salvos com sucesso'
            }).then(() => {
                loadTarefasPendentes()
                loadTarefasConcluidas()
            })
        }).catch((error) => {
            alert("Não foi possível salvar os dados do funcionário")
        })
    }

    // useEffect(() => { 

    // }, [save , finalizarTarefa])
    
    return (
    <TarefasContext.Provider value={{ tarefasPendentes , tarefasConcluidas , loadTarefasConcluidas , loadTarefasPendentes , save , finalizarTarefa} }>
        {children}
    </TarefasContext.Provider>
    )
};
 
export default TarefasContext;