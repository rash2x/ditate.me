import { airtableBase } from '../App';

export const getTeacherById = (teacherId, teachers) => {
  if (!teachers) {
    return;
  }

  return teachers.find(t => t.id === teacherId);
};

export const getPracticeById = (practiceId, practices) => {
  if (!practices) {
    return;
  }

  return practices.find(t => t.id === practiceId);
};

export const createProfileRecord = async (form) => {
  const practices = form.practices.map(item => item.id);

  const requestData = {
    Name: form.name,
    Practices: practices,
    Instagram: form.contact,
    City: form.city
  };

  await airtableBase('New Profiles').create(requestData)
}
