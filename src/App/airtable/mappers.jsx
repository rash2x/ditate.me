import defaultThumbnailSvg from '../../assets/default-thumbnail.svg';
import { getInstagramName } from './utils';

export const mapTeachers = response => {
  return response.map(item => {
    return {
      id: item.id,
      name: item.fields.Name,
      description: item.fields.Description,
      image: item.fields['Avatar']
        ? item.fields['Avatar'][0].thumbnails.large.url
        : defaultThumbnailSvg,
      instagramUrl: item.fields.Instagram,
      instagram: getInstagramName(item.fields.Instagram),
      telegram: item.fields.Telegram,
      practiceIds: item.fields.Practices,
    };
  });
};

export const mapPractices = response => {
  return response.map(item => {
    const hasTeachers = !!item.fields.Teachers;

    return {
      id: item.id,
      name: item.fields.Name,
      color: item.fields.Color ? item.fields.Color : '#fff',
      teacherIds: item.fields.Teachers,
      hasTeachers,
    };
  });
};

export const mapEvents = response => {
  return response.map(item => {
    return {
      id: item.id,
      name: item.fields.Name,
      price: item.fields.Price,
      teacherId: item.fields.Teacher[0],
      teacherName: item.fields['Teacher Name'][0],
      teacherImage: item.fields['Teacher Avatar']
        ? item.fields['Teacher Avatar'][0].thumbnails.large.url
        : defaultThumbnailSvg,
      teacherTelegram: item.fields['Teacher Telegram'] && item.fields['Teacher Telegram'][0],
      teacherInstagram: item.fields['Teacher Instagram'] && getInstagramName(item.fields['Teacher Instagram'][0]),
      location: item.fields.Location,
      practiceId: item.fields.Practice[0],
      practiceName: item.fields['Practice Name'] && item.fields['Practice Name'][0],
      practiceColor: item.fields['Practice Color'] && item.fields['Practice Color'][0],
      startDate: item.fields.StartDate,
    };
  });
};
