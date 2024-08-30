import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../../components/button';
import Input from '../../../components/input';
import Select from '../../../components/select';
import Swal from 'sweetalert2'

import * as S from './styles';
import loginService from '../../../services/LoginServices';
import AuthContext from '../../../context/auth';

const Login = () => {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const [isLoading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    let data = {
        username: usuario,
        password: senha
      }
    
      loginService.login(data)
      .then((response) => {
        setLoading(false)
        let user = response.data
        const hash = user.access_token;
        window.sessionStorage.setItem("hash", hash);
        const type = user.type
        const name = user.name
        window.sessionStorage.setItem("type", type)
        login(name, type)        
        navigate('/home')
        
      })
      .catch((error) => {
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: '"Usuário e/ou senha incorretos"',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      })
  }

  const onEnter = (event, callback) => {
    if (event.charCode == 13){
      callback(event)
    }
  }

  return (
    <S.ContainerLogin>
      <S.Container>
        <S.Title>SAMU On-line</S.Title>
        {/* <S.Wrapper>
          <Select data={[{ value: 'GUARATINGUETÁ', name: 'GUARATINGUETÁ' }]} />
        </S.Wrapper> */}
        <S.Wrapper>
          <Input type='input' label='Usuário' onChange={(e) => setUsuario(e.target.value)} onKeyPress={(e) => onEnter(e, handleSubmit)} />
        </S.Wrapper>
        <S.Wrapper>
          <Input type='password' label='Senha' onChange={(e) => setSenha(e.target.value)} onKeyPress={(e) => onEnter(e, handleSubmit)} />
        </S.Wrapper>
        <S.Wrapper style={{ display: 'block' }}>
          { !isLoading && 
            <Button type="submit" kind='primary' name='Entrar' onClick={handleSubmit} />
          }
          { isLoading && 
            <span style={{fontSize: "20px"}}>Carregando...</span>
          }
        </S.Wrapper>
      </S.Container>
    </S.ContainerLogin>
  );
};

export default Login;
