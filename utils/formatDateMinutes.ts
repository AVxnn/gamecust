import { format } from "date-fns";
// Функция для форматирования даты
export const formatDateMinutes = (timestamp: number) => {
  const date = new Date(timestamp);

  return format(date, 'HH:MM');
}