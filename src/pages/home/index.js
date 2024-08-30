import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import TableContainer from '../../components/table';
import Loading from '../../assets/images/loading.gif';
import moment from 'moment';
import './styles.css'

import {
  FaUserCircle,
  FaFolderPlus,
} from "react-icons/fa";

import {
  equipmentColumns,
  secondColumns,
  thirdColumns,
  firstTableData,
  thirdTableData,
  fourthTableData,
  fifthTableData,
  ambulanceStatus,
} from './mock';

import * as S from './styles';
import chamadoService from '../../services/ChamadoService';
import AuthContext from '../../context/auth';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Select from '../../components/select';
import Swal from 'sweetalert2';

const Home = () => {

  const navigate = useNavigate();

  const { user, role } = useContext(AuthContext)

  const [ isLoading, setLoading ] = useState(true)
  const [itemsStatus, setItemsStatus] = useState([]) //StatusHistory
  const [equipments, setEquipments] = useState([
    // {
    //   date: '16/03/2023',
    //   establishment: 'UPA III - Unidade de Pronto Atendimento de Guaratinguetá',
    //   vtr: 'USA 01 - GUARA',
    //   time: '19:35:00',
    // },
    // {
    //   date: '16/03/2023',
    //   establishment: 'UPA III - Unidade de Pronto Atendimento de Guaratinguetá',
    //   vtr: 'USA 02 - GUARA',
    //   time: '19:44:00',
    // }
  ])

  const loadChamados = () => {
    //setLoading(true)
    chamadoService.getActive().then((response) => {
      let data = response.data
      console.log(data)
 
      //setLoading(false)
    }).catch((error) => {
      //setLoading(false)
      alert("Não foi possível carregar os chamados")
    })
  }


  return (
    <></>
  );
};

export default Home;
