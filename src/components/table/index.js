import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTable, useSortBy } from 'react-table';

import {
  FaPlus,
  FaAmbulance,
  FaNotesMedical,
  FaClipboardList,
  FaFileSignature,
  FaFileAlt,
  FaBan,
  FaCopy,
  FaList,
  FaRecycle,
} from "react-icons/fa";

import * as S from './styles';
import AuthContext from '../../context/auth';

const TableContainer = (props) => {
  const { columns, data, type, rowProps, duplicateOccurrence, openStatusHistory, cancel, changeStatus } = props;

  console.log(data)

  const navigate = useNavigate();
  const { user, role } = useContext(AuthContext)

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  const openSceneForm = (id) => {
    navigate("/cena", {
      state: {
        action: "EDIT",
        id: id
      }
    })
  }

  const isMedico = () => {
    return (["ROOT","MÉDICO","ADMINISTRADOR"].indexOf(role) >= 0)
  }

  const isRadioOperador = () => {
    return (["ROOT","RADIO OPERADOR","ADMINISTRADOR"].indexOf(role) >= 0)
  }

  return (
    <S.TableContainer>
      <S.Table {...getTableProps}>
        <S.Head>
          {headerGroups.map((headerGroup) => (
            <S.Tr {...headerGroup.getHeaderGroupProps()}>
              {type === 'first' && <S.Th></S.Th>}
              {(type === 'second' || type === 'third') && (
                <>
                  <S.Th></S.Th>
                  <S.Th></S.Th>
                  <S.Th>Observação</S.Th>
                </>
              )}
              {headerGroup.headers.map((column) => (
                <S.Th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </S.Th>
              ))}
              {(type === 'second' || type === 'third') && (
                <>
                  { (isMedico() || isRadioOperador()) &&
                    <S.Th colSpan={5}></S.Th>
                  }
                  { !(isMedico() || isRadioOperador()) &&
                    <S.Th colSpan={3}></S.Th>
                  }
                </>
              )}
            </S.Tr>
          ))}
        </S.Head>
        <S.Body>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <S.Tr
                {...row.getRowProps(rowProps)}
                key={row.index}
              >
                {type === 'first' &&
                  <S.Td>
                    <FaPlus size={20} cursor='pointer' />
                  </S.Td>
                }
                {type === 'second' &&
                  <>
                    <S.Td className={row.original.alert}>
                      <FaAmbulance size={20} cursor='pointer' />
                    </S.Td>
                    <S.Td className={row.original.alert}>
                      <FaFileAlt size={20} cursor='pointer' onClick={() => openSceneForm(row.original.id)} />
                    </S.Td>
                    <S.Td className={row.original.alert}>
                      <FaFileSignature size={20} cursor='pointer' />
                    </S.Td>
                  </>
                }
                {type === 'third' &&
                  <>
                    <S.Td>
                      <FaNotesMedical size={20}  cursor='pointer' />
                    </S.Td>
                    <S.Td>
                      <FaClipboardList size={20} cursor='pointer' onClick={() => navigate('/cena', {
                        state: {
                          action: "EDIT",
                          id: row.original.id
                        }
                      })} title='Cena' />
                    </S.Td>
                    <S.Td>
                      <FaFileSignature size={20} cursor='pointer' />
                    </S.Td>
                  </>
                }
                {row.cells.map((cell) => (
                  <S.Td>
                    {cell.render('Cell')}
                  </S.Td>
                ))}
                {type === 'second' &&
                  <>
                    <S.Td>                      
                      { (isRadioOperador() && row.original.status.id == 3) && //status VTR Enviada
                        <FaBan size={20} cursor='pointer' onClick={() => cancel(row.original)} />
                      }
                    </S.Td>
                    { isMedico() &&
                      <S.Td>
                        <S.ButtonIcon onClick={() => duplicateOccurrence(row.original.id)}>
                          <FaCopy size={20} cursor='pointer' />                      
                        </S.ButtonIcon>
                      </S.Td>
                    }
                    { (isMedico() || isRadioOperador()) &&
                      <S.Td>
                        <S.ButtonIcon onClick={() => openStatusHistory(row.original.id)}>
                          <FaList size={20} cursor='pointer' />                      
                        </S.ButtonIcon>
                      </S.Td>
                    }
                    { (isMedico() || isRadioOperador()) &&
                      <S.Td>
                        <S.ButtonIcon onClick={() => changeStatus(row.original)}>
                          <FaRecycle size={20} cursor='pointer' />                      
                        </S.ButtonIcon>
                      </S.Td>
                    }                    
                  </>
                }
                {type === 'third' &&
                  <>
                    <S.Td>
                      <FaBan size={20} cursor='pointer' />
                    </S.Td>
                    { isMedico() &&
                      <S.Td>
                        <S.ButtonIcon onClick={() => duplicateOccurrence(row.original.id)}>
                          <FaCopy size={20} cursor='pointer' />                      
                        </S.ButtonIcon>
                      </S.Td>
                    }                    
                  </>
                }
              </S.Tr>
            );
          })}
        </S.Body>
      </S.Table>
    </S.TableContainer>
  );
};

TableContainer.defaultProps = {
  rowProps: () => ({}),
};

TableContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  rowProps: PropTypes.func,
};

export default TableContainer;
