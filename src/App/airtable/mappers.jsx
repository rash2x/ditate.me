import defaultThumbnailSvg from '../../assets/default-thumbnail.svg'
import { getInstagramName } from './utils';


export const mapTeachers = (response) => {
  return response.map(item => {
    return {
      id: item.id,
      name: item.fields.Name,
      image: item.fields['Avatar'] ? item.fields['Avatar'][0].thumbnails.large.url : defaultThumbnailSvg,
      instagramUrl: item.fields.Instagram,
      instagram: getInstagramName(item.fields.Instagram),
      practiceIds: item.fields.Practices,
    };
  })
};

export const mapPractices = (response) => {
  return response.map(item => {
    const hasTeachers = !!item.fields.Teachers;

    return {
      id: item.id,
      name: item.fields.Name,
      color: item.fields.Color,
      teacherIds: item.fields.Teachers,
      hasTeachers
    }
  })
}

export const mapTeacher = (teacherId, state) => {
  if(!state.teachers) {
    return;
  }

  return state.teachers.find(t => t.id === teacherId);
};



