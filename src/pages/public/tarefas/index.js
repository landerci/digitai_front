import React, { useState, useEffect, useContext } from 'react';
import Acontecimentos from '../acontecimentos/index';
import Relacionamentos from '../relacionamentos/index'
import CadastrarTarefas from '../tarefas/cadastrar';
import TarefasListas from '../tarefas/listaTarefas'
import { ListaTarefas } from '../../../context/tarefas';
import TabelaTarefasConcluidas from '../tarefas/tabelaConcluidas';
//import TarefasContext from '../../context/tarefas';
import TabelaTarefasPendentes from '../tarefas/tabelaPendentes';
import Menu from '../../../components/menu';
import * as S from './styles';



const Tarefas = () => {

    // const abaNova = document.getElementById("nova");
    // const abaConcluida = document.getElementById("concluida");
    // const abaPendente = document.getElementById("pendente");
    // const [isLoading, setLoading] = useState(true)

    const [listaTarefaConcluida, setSelecionaListaTarefaConcluida] = useState("Nova")

    const selecionaAba = (data) => {
        let abaSelecionada = data.target.childNodes[0].data
        let abaNova = document.getElementById("nova");
        let abaConcluida = document.getElementById("concluida");
        let abaPendente = document.getElementById("pendente");
        if (abaSelecionada === "Nova") {
            abaNova.className = "active"
            abaConcluida.className = ""
            abaPendente.className = ""
        }
        if (abaSelecionada === "Concluídas") {
            abaConcluida.className = "active"
            abaNova.className = ""
            abaPendente.className = ""
        }
        if (abaSelecionada === "Pendentes") {
            abaConcluida.className = ""
            abaNova.className = ""
            abaPendente.className = "active"
        }
        setSelecionaListaTarefaConcluida(abaSelecionada)
        //setLoading(false)
    }
    return (
        <>
            <Menu>
            </Menu>
            <S.LayoutPagina>
                <S.TitleTarefas>TAREFAS</S.TitleTarefas>
                <S.ContainerTarefas>
                    <ListaTarefas>
                        <div className="page-content">
                            <div className="container">
                                <div className="banner-user banner-forum">
                                    <div className="banner-content">
                                        <div className="media">
                                            <div className="item-img">
                                                <img src="https://www.radiustheme.com/demo/html/cirkle/media/figure/forum_7.jpg" alt="User" />
                                            </div>
                                            <div className="media-body">
                                                <h3 className="item-title">Tarefas</h3>
                                                <div className="item-subtitle">É melhor dar conta disso logo...</div>
                                                <ul className="item-social">
                                                    <li><a href="#" className="bg-fb"><i className="icofont-facebook"></i></a></li>
                                                    <li><a href="#" className="bg-twitter"><i className="icofont-twitter"></i></a></li>
                                                    <li><a href="#" className="bg-dribble"><i className="icofont-dribbble"></i></a></li>
                                                    <li><a href="#" className="bg-youtube"><i className="icofont-brand-youtube"></i></a></li>
                                                    <li><a href="#" className="bg-behance"><i className="icofont-behance"></i></a></li>
                                                </ul>
                                                <TarefasListas></TarefasListas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-box user-top-header">
                                    <ul className="menu-list">
                                        <li className="active" id="nova" onClick={(e) => selecionaAba(e)}><a>Nova</a></li>
                                        <li className="" id="concluida" onClick={(e) => selecionaAba(e)}><a>Concluídas</a></li>
                                        <li className="" id="pendente" onClick={(e) => selecionaAba(e)}><a>Pendentes</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8" >
                                        {listaTarefaConcluida === "Nova" ?
                                            <CadastrarTarefas></CadastrarTarefas> :
                                            listaTarefaConcluida === "Concluídas" ?
                                                <TabelaTarefasConcluidas></TabelaTarefasConcluidas> :
                                                <TabelaTarefasPendentes></TabelaTarefasPendentes>
                                        }
                                    </div>
                                    <div className="col-lg-4 widget-block widget-break-lg">

                                        <Acontecimentos></Acontecimentos>
                                        <Relacionamentos></Relacionamentos>


                                        <div className="widget widget-groups">
                                            <div className="widget-heading">
                                                <h3 className="widget-title">Grupos</h3>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                        ...
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Close</a>
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group-list">
                                                <div className="media">
                                                    <div className="item-img">
                                                        <a href="#">
                                                            <img src="https://www.radiustheme.com/demo/html/cirkle/media/groups/groups_9.jpg" alt="group" />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4 className="item-title"><a href="#">Kito Development</a></h4>
                                                        <div className="item-member">265 Members</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="see-all-btn">
                                                <a href="#" className="item-btn">Ver todos os Grupos</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ListaTarefas>
                </S.ContainerTarefas>
            </S.LayoutPagina>
        </>
    );
};

export default Tarefas;
