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

export const getAllPracticesTeacherId = (practices, state) => {
  const id = practices.practices.map(item => {
    return  state.practices.find(t => t.name === item).id
  })

  return {
    Name: practices.name,
    Practices: id,
    Instagram: practices.contact,
    City: practices.city
  }
}

export const addProfile = async (fields) => {
  await airtableBase('New Profiles').create(fields)
}
