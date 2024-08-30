import React, { useEffect, useState } from 'react';
import acontecimentoServiceService from '../../../services/AcontecimentoService'

const Acontecimentos = () => {
//   const [show, setShow] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState()
//   const [funcionariosCargos, setFuncionariosCargos] = useState([])
//   const [cargos, setCargos] = useState([])
//   const [funcionarios, setFuncionarios] = useState([])
//   const [cidades, setCidades] = useState([])
//   const [formData, setFormData] = useState({})
const [acontecimentos, setAcontecimentos] = useState([]) 

  const employeeColumns = [
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Nome', accessor: 'nome' },    
    { Header: 'Cargo', accessor: 'cargo' },
    { Header: '', accessor: 'button' },
  ];

  const loadAcontecimentos = () => {
    acontecimentoServiceService.getAll().then((response) => {
      let data = response.data
      data = data.map((acontecimento) => {
        return {
          nome: acontecimento.nome,
          tipo_acontecimento:acontecimento.tipo_acontecimento,
          tempo: acontecimento.tempo,
          descricao: acontecimento.descricao
        }
      })
      
      setAcontecimentos(data);
    }).catch((error) => {
      alert("Não foi possível listar os relacionamentos")
    })
}
  useEffect(() => {
    loadAcontecimentos()
  }, [])

  return (
       <div className="widget widget-memebers">
           <div className="widget-heading">
               <h3 className="widget-title">Últimos Acontecimentos</h3>
           </div>

           {(acontecimentos.length> 0 ) &&
           
           <div className="tab-content" key={1}>
               <div className="tab-pane fade show active" id="popular-member" role="tabpanel" key={2}>
                   <div className="members-list" key={3}>
                       <div className="media" key={4}>
                          <div className=" body" key={5}>
                                {acontecimentos.map((acontecimento) => (
                               <div key={acontecimento.nome}>
                                    <h4 className="item-title" key={acontecimento.nome} ><a href="#" key={acontecimento.nome}>{acontecimento.nome}</a></h4>
                                    <div className="item-username" key={acontecimento.tipo_acontecimento}>{acontecimento.tipo_acontecimento}</div>
                                    <div className="item-username" key={acontecimento.tempo}>{acontecimento.tempo}</div>
                                    <div className="item-username" key={acontecimento.descricao}>{acontecimento.descricao}</div>
                                </div>
                                ))}
                          </div>
                       </div>
                   </div>
               </div>
           </div>
            }
       </div>
  );
};

export default Acontecimentos;
