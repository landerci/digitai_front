import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "moment/locale/pt-br"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Menu from '../../../components/menu';
import * as S from './style';

const localizer = momentLocalizer(moment);

const Calendario = () => {
  const today = new Date()
  const events = [
    {
      start: new Date(),
      end: new Date(moment().add(1, 'days')),
      title: 'Some title',
    },
    {
      start: new Date(moment().add(2, 'days')),
      end: new Date(moment().add(3, 'days')),
      title: 'Some title',
    },
  ];

  return (
    <>
      <Menu></Menu>
      <S.LayoutPagina>

        <S.TitleCalendario>CALENDÁRIO</S.TitleCalendario>
        <S.ContainerCalendario>
          <Calendar
            localizer={localizer}
            defaultDate={today}
            events={events}
            startAccessor="start"
            endAccessor="end"
            components={{
              event: () => <span>Event</span>,
              day: ({ date }) => <span>{moment(date).format('DD')}</span>
            }}
            style={{
              height: 500,
              fontSize: '3em',
            }}
          />
        </S.ContainerCalendario>
      </S.LayoutPagina>
    </>
  )
}

export default Calendario;
