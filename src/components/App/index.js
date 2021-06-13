import React, { useState } from "react";
import moment from "moment";
  import "moment/locale/hr";
import styled from "styled-components";

import {CalGrid} from "../CalGrid";
import {CalNav} from "../CalNav";
import {TitleBar} from "../TitleBar";
import {Form} from "../Form";

import * as EventService from "../../services/event.service";

const ShadoWrap = styled('div')`
  border-bottom: 2px solid #464648;
  border-left: 1px solid #464648;
  border-radius: 8px;
  border-right: 1px solid #464648;
  border-top: 1px solid #737374;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
  overflow: hidden;
`;

//  Komponenta ima varijable stanja "isFormOpen" i "eventItem", te funkcije azuriranja

function App() {
  moment.locale('hr');
  
  //  Show and hide edit form
  //  Varijabla "setIsFormOpen" je isprva postavljena na "false" i nije vidljiva
  const [isFormOpen, setIsFormOpen] = useState(false);

  //  Current event that will be shown in the form
  //  Varijabla "setEventItem" je isprva postavljena na "null" otkako se ne ureduje nijedan dogadaj u formi
  const [eventItem, setEventItem] = useState(null);

  // Keep track of month and current day
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  
  // Navigate calendar months
  const prevMontHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const currMontHandler = () => setToday(moment());
  const nextMontHandler = () => setToday(prev => prev.clone().add(1, 'month'));
  
  // Save reference of event for editing form and show form
  const handleFormOpen = (eventItem) => {
    if (isFormOpen) { return; }
    setEventItem(eventItem);
    setIsFormOpen(true);
  };

  // Clear event from editing form and hide form
  const handleFormClose = () => {
    setEventItem(null);
    setIsFormOpen(false);
  };

  //  Klikom na gumb za stvaranje novog dogadaja, poziva se funkcija "handleFormOpen" sa parametrom "null" otkako se ne ureduje vec postojeci dogadaj, vec se kreira potpuno novi
  //  Komponenti "CalGrid"se predaje funkcija "editEventHandler" koja poziva funkciju "handleFormOpen"
  //  Funkcija "handleFormOpen" sprjecava ponovno otvaranje iste forme; te postavlja parametar u varijabli "eventItem", a varijablu "isFormOpen" u "true"
  //  Funkcija "handleFormClose" postavlja varijablu "eventItem" u "null" - i "isFormOpen" u "false" - kako bi se forma zatvorila, odnosno uklonila
  //  Forma se prikazuje ako je varijable "isFormOpen" "true", cime se renderira komponenta "Form"; inace se ne prikazuje ništa
  /*
    Komponenti "Form" se predaju parametri:
      - "eventItem" --> iz varijable stanja (prethodno postavljena funkcijom "setEventItem")
      - "saveButtonHandler" --> funkcija iz "event.service.js"
      - "deleteButtonHandler" --> funkcija iz "event.service.js"
      - "quitButtonHandler" - funkcija iz L86
  */

  return (
    <ShadoWrap>
      <TitleBar newEventHandler={() => { handleFormOpen(null); }} />
      <CalNav
        today={today}
        prevMontHandler={prevMontHandler}
        currMontHandler={currMontHandler}
        nextMontHandler={nextMontHandler}
      />
      <CalGrid startDay={startDay} today={today} editEventHandler={handleFormOpen} />
      {isFormOpen ? (
        <Form
          eventItem={eventItem}
          saveButtonHandler={EventService.saveEvent}
          deleteButtonHandler={EventService.deleteEvent}
          quitButtonHandler={handleFormClose}
        />
      ) : null}
    </ShadoWrap>
  );
};

export default App;