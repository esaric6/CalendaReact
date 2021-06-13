import database from "./firebase";  //  Importa se varijabla iz firebase.js

const COLLECTION_NAME = "events";

//  Dohvacanje svih dogadaja koji se dogadaju na datum predan kao parametar, sortira ih po vremenu pocetka, te vraca listu njih (U slucaju greske vraca praznu listu)
const getEvents = async (dayItem) => {
  const dbQuery = database
    .collection(COLLECTION_NAME)
    .where("date", "==", dayItem)
    .orderBy("start_time");

  try {
    const querySnaphost = await dbQuery.get();

    const eventsList = [];
    querySnaphost.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();

      const eventItem = {
        id,
        title: data.title,
        date: data.date,
        startTime: data.start_time,
        endTime: data.end_time,
      };

      eventsList.push(eventItem);
    });

    return eventsList;
  } catch (err) {
    return [];
  }
};

//  Uzimanje dogadaja kao parametar, provjera da li on ima ID (Ako ima, azurira ga sa istim ID-em, inace kreira potpuno novi dogadaj kojem baza pridodaje ID)
const deleteEvent = async (eventItem) => {
  const eventId = eventItem.id;

  try {
    const eventRef = database.collection(COLLECTION_NAME).doc(eventId);
    await eventRef.delete();
  } catch (err) {}
};

const insertNewEvent = async (eventItem) => {
  const newEvent = {
    title: eventItem.title,
    date: eventItem.date,
    start_time: eventItem.startTime,
    end_time: eventItem.endTime,
  };

  try {
    await database.collection(COLLECTION_NAME).add(newEvent);
  } catch (err) {}
};

const updateEvent = async (eventItem) => {
  const eventId = eventItem.id;
  const updatedEvent = {
    title: eventItem.title,
    date: eventItem.date,
    start_time: eventItem.startTime,
    end_time: eventItem.endTime,
  };

  try {
    const eventRef = database.collection(COLLECTION_NAME).doc(eventId);
    await eventRef.update(updatedEvent);
  } catch (err) {}
};

// Save event - create new event or update existing one
const saveEvent = async (eventItem) => {
  if (eventItem.id === null) {
    await insertNewEvent(eventItem);
  } else {
    await updateEvent(eventItem);
  }
};

export { getEvents, deleteEvent, saveEvent };
