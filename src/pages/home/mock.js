export const equipmentColumns = [
  { Header: 'Data', accessor: 'date' },
  { Header: 'Estabelecimento', accessor: 'establishment' },
  { Header: 'VTR', accessor: 'vtr' },
  { Header: 'Horário Ret.', accessor: 'time' },
];

export const secondColumns = [
  { Header: 'VTR', accessor: 'vtr' },
  { Header: 'Pr.', accessor: 'pr' },
  { Header: 'Cidade', accessor: 'city' },
  { Header: 'Bairro', accessor: 'neighborhood' },
  { Header: 'Paciente', accessor: 'patient' },
  { Header: 'Idade', accessor: 'age' },
  { Header: 'HD', accessor: 'hd' },
  { Header: 'Nº Ch.', accessor: 'callNumber' },
  { Header: 'Data', accessor: 'date' },
  { Header: 'H.Ch.', accessor: 'hora' },
  { Header: 'Hospital', accessor: 'hospital' },
];

export const thirdColumns = [
  { Header: 'Pr.4', accessor: 'pr' },
  { Header: 'Paciente', accessor: 'patient' },
  { Header: 'Idade', accessor: 'age' },
  { Header: 'HD', accessor: 'hd' },
  { Header: 'Solicitante', accessor: 'requester' },
  { Header: 'Med. Reg.', accessor: 'doctor' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'VTR', accessor: 'vtr' },
  { Header: 'Nº Ch.', accessor: 'callNumber' },
  { Header: 'Data', accessor: 'date' },
  { Header: 'H.Ch.', accessor: 'hora' },
  { Header: 'Cidade', accessor: 'city' },
  { Header: 'Bairro', accessor: 'neighborhood' },
  { Header: 'Destino', accessor: 'destination' },
];


export const thirdTableData = [
  {
    vtr: 'USB 02 - GUARA',
    pr: 'CEna VTR',
    city: 'GUARATINGUETÁ',
    neighborhood: '',
    patient: '(I) ISABEL CRISTINA BATISTA DOS SANTOS',
    age: '44A',
    hd: 'DOR ABDOMINAL',
    callNumber: '153304/1',
    date: '16/03/2023',
    hora: '21:15',
    hospital: (
      <>
        <p>(Origem:) UBS Colonia do Piagui</p>
        <p>(Destino:) UPA III - Inidade de Pronto Atendimento de Guaratinguetá</p>
      </>
    ),
  }
];

export const fourthTableData = [
  {
    patient: 'LUIZ',
    age: '30A',
    hd: 'CONVULSÂO',
    requester: 'GABRIEL',
    doctor: '',
    status: 'Ag. Regulação',
    vtr: '',
    callNumber: '151415/1',
    date: '16/03/2023',
    hora: '21:02',
    city: 'GUARATINGUETÁ',
    neighborhood: 'CHÁCARA SELLES',
    destination: '',
  },
  {
    patient: 'ANTONIO',
    age: '70A',
    hd: 'INSUFICIÊNCIA RESPIRATÓRIA',
    requester: 'MARIA EDUARDA',
    doctor: 'LETICIA DE TOLEDO OLIVEIRA',
    status: 'VTR Enviada',
    vtr: 'USA 02 - PINDAMONHANGABA',
    callNumber: '151395/1',
    date: '16/03/2023',
    hora: '19:52',
    city: 'PINDAMONHANGABA',
    neighborhood: 'JARDIM CRISTINA',
    destination: '',
  },
  {
    patient: 'DESCONHECIDO',
    age: '60A',
    hd: 'CAÍDO EM VIA PÚBLICA',
    requester: 'ALINE',
    doctor: 'LETICIA DE TOLEDO OLIVEIRA',
    status: 'VTR Enviada',
    vtr: 'USB 10 - PIQUETE',
    callNumber: '151411/1',
    date: '16/03/2023',
    hora: '20:47',
    city: 'PIQUETE',
    neighborhood: 'VILA DA ESTRELA',
    destination: '',
  }
];

export const fifthTableData = [
  {
    patient: '(I) ISABEL CRISTINA BATISTA DOS SANTOS',
    age: '44A',
    hd: 'DOR ABDOMINAL',
    requester: 'DRª CLÉLIA',
    doctor: 'RICARDO EURICO DE OLIVEIRA E SILVA',
    status: 'Cena VTR',
    vtr: 'USB 02 - GUARA',
    callNumber: '153304/1',
    date: '16/03/2023',
    hora: '21:15',
    city: 'GUARATINGUETÁ',
    neighborhood: '',
    destination: (
      <>
        <p>(Origem:) UBS Colonia do Piagui</p>
        <p>(Destino:) UPA III - Inidade de Pronto Atendimento de Guaratinguetá</p>
      </>
    ),
  }
];

export const ambulanceStatus = [
  { city: 'GUARATINGUETÁ(NEIVA)', name: 'USB 01 - GUARATINGUETÁ' },
  { city: 'GUARATINGUETÁ(PARQUE SF)', name: 'USB 01 - GUARATINGUETÁ' },
  { city: 'APARECIDA', name: 'USB 03 - APARECIDA' },
  { city: 'BANANAL', name: 'USB 04 - BANANAL' },
  { city: 'CRUZEIRO', name: 'USB 05 - CRUZEIRO' },
  { city: 'CUNHA', name: 'USB 06 - CUNHA' },
  { city: 'LORENA', name: 'USB 07 - LORENA' },
  { city: 'PINDAMONHANGABA', name: 'USB 08 - PINDAMONHANGABA' },
  { city: 'MOREIRA CESAR', name: 'USB 09 - MOREIRA CESAR' },
  { city: 'PIQUETE', name: 'RT - PIQUETE' },
  { city: 'POTIM', name: 'USB 11 - POTIM' },
  { city: 'QUELUZ', name: 'USB 12 - QUELUZ' },
  { city: 'GUARATINGUETÁ', name: 'USA 03 - GUARATINGUETÁ' },
];
