import React, { useEffect, useState } from 'react';
import relacionamentoServiceService from '../../../services/RelacionamentoService'

const Relacionamentos = () => {
//   const [show, setShow] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState()
//   const [funcionariosCargos, setFuncionariosCargos] = useState([])
//   const [cargos, setCargos] = useState([])
//   const [funcionarios, setFuncionarios] = useState([])
//   const [cidades, setCidades] = useState([])
//   const [formData, setFormData] = useState({})
const [relacionamentos, setRelacionamentos] = useState([]) 

  const employeeColumns = [
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Nome', accessor: 'nome' },    
    { Header: 'Cargo', accessor: 'cargo' },
    { Header: '', accessor: 'button' },
  ];

  const loadRelacionamentos = () => {
    relacionamentoServiceService.getAll().then((response) => {
      let data = response.data
      data = data.map((relacionamento) => {
        return {
          nome: relacionamento.nome,
          tipo_relacionamento:relacionamento.tipo_relacionamento,
          foto: relacionamento.pessoa.foto,
          nome_pessoa: relacionamento.pessoa.nome
        }
      })
      
      setRelacionamentos(data);
    }).catch((error) => {
      alert("Não foi possível listar os relacionamentos")
    })
}
  useEffect(() => {
    loadRelacionamentos()
  }, [])

  return (
       <div className="widget widget-memebers">
           <div className="widget-heading">
               <h3 className="widget-title">Relacionamentos</h3>
               {/* <div className="dropdown">
                   <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                       <Text>...</Text>
                   </button>
                   <div className="dropdown-menu dropdown-menu-right">
                       <a className="dropdown-item" href="#">Close</a>
                       <a className="dropdown-item" href="#">Edit</a>
                       <a className="dropdown-item" href="#">Delete</a>
                   </div>
               </div> */}
           </div>
           <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item">
                   <a className="nav-link active" data-toggle="tab" href="#newest-member" role="tab" aria-selected="true">NEWEST</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" data-toggle="tab" href="#popular-member" role="tab" aria-selected="false">POPULAR</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" data-toggle="tab" href="#active-member" role="tab" aria-selected="false">ACTIVE</a>
               </li>
           </ul>
           {(relacionamentos.length> 0 ) &&
           
           <div className="tab-content">
               <div className="tab-pane fade show active" id="popular-member" role="tabpanel">
                   <div className="members-list">
                       <div className="media">
                           <div className="item-img">
                               <a href="#">
                                   <img src={relacionamentos[0].foto} width={44} height={44} alt="Chat" />
                               </a>
                           </div>
                           <div className="media-body">
                               <h4 className="item-title"><a href="#">{relacionamentos[0].nome_pessoa}</a></h4>
                               <div className="item-username">{relacionamentos[0].nome}</div>
                               <div className="member-status online"><i className="icofont-check"></i></div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            }
       </div>
  );
};

export default Relacionamentos;
