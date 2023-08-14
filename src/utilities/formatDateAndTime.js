export function formatDateAndTime(dateTime) {
  const [date, time] = dateTime.split(' ');

  const [, month, day] = date.split('-');

  const [hour, minutes] = time.split(':');

  const formattedDateAndTime = `${day}/${month} às ${hour - 3}h${minutes}`
  
  return formattedDateAndTime;
}  