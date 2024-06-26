import { differenceInYears, format, formatDistanceToNow, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";

// Функция для форматирования даты
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();

  // Проверка разницы в днях
  const daysDifference = differenceInDays(now, date);
  const yearsDifference = differenceInYears(now, date);

  if (daysDifference < 1) {
    // Если разница меньше одного дня, выводим разницу во времени (например, "2 часа")
    return formatDistanceToNow(date, { addSuffix: false });
  } else if (yearsDifference < 1) {
    // Если разница больше одного дня, но меньше одного года, выводим дату в формате "D MMMM"
    return format(date, 'd MMMM', { locale: ru});
  } else {
    // Если разница больше одного года, выводим дату в формате "dd.MM.yyyy"
    return format(date, 'dd.MM.yyyy');
  }
}