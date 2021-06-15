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

export const addProfile = async (fields) => {
  await airtableBase('New Profiles').create(fields)
}
