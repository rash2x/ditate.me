import defaultThumbnailSvg from '../../assets/default-thumbnail.svg'
export const mapTeacher = (teacherId, state) => {
  if(!state.teachers) {
    return;
  }

  const teacher = state.teachers.find(t => t.id === teacherId);
  const practices = state.practices?.filter(practice => {
    return Array.isArray(practice.fields['Teachers']) && practice.fields['Teachers'].some(t => t === teacherId);
  });

  const instagram = teacher.fields.Instagram;
  const imageUrl = teacher.fields['Avatar'] ? teacher.fields['Avatar'][0].thumbnails.large.url : defaultThumbnailSvg;
  const name = teacher.fields['Name'];

  const practicesName = practices[0].fields['Name'];
  const practicesColor = practices[0].fields['Color'];

  return {
    instagram,
    imageUrl,
    name,
    id: teacherId,
    practicesName,
    practicesColor
  };
};



