import { airtableBase } from '../App';

export const getTeacherById = (teacherId, teachers) => {
  if (!teachers) {
    return false;
  }

  return teachers.find(t => t.id === teacherId);
};

export const getPracticeById = (practiceId, practices) => {
  if (!practices) {
    return false;
  }

  return practices.find(t => t.id === practiceId);
};

export const getEventById = (eventId, events) => {
  if (!events) {
    return false;
  }

  return events.find(t => t.id === eventId);
};

export const getActualEvents = events => {
  if (!events) {
    return [];
  }

  return events.filter(t => new Date(t.startDate).getTime() > new Date().getTime());
};

export const getTeacherEvents = (events, teacherEvents) => {
  if (!events || !teacherEvents) {
    return false;
  }

  return teacherEvents.map(teacherEvent => events.find(t => t.id === teacherEvent));
};

export const createProfileRecord = async form => {
  const practices = form.practices.map(item => item.id);

  const requestData = {
    Name: form.name,
    Practices: practices,
    Instagram: form.contact,
    City: form.city,
  };

  await airtableBase('New Profiles').create(requestData);
};
