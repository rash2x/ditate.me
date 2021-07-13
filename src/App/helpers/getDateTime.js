import dayjs from 'dayjs';

const getCurrentWeek = () => {
  const today = new Date();
  const oneJan = new Date(today.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((today - oneJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((today.getDay() + 1 + numberOfDays) / 7);
};

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const getDayName = date => {
  if (date.isToday()) {
    return 'Сегодня';
  }

  if (date.isTomorrow()) {
    return 'Завтра';
  }

  if (date.isoWeek() + 1 === getCurrentWeek()) {
    return capitalizeFirstLetter(date.format('dddd'));
  }

  return date.format('DD MMM YYYY');
};

const getDateTime = (startDate, endDate) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const dayName = getDayName(dayjs(start));
  const time = `${start.format('H:mm')} - ${end.format('H:mm')}`;

  return `${dayName}, ${time}`;
};

export default getDateTime;
