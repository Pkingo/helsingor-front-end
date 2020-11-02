export const formatTimeInterval = (startDate, endDate) =>
  `${startDate.getHours()}:${startDate.getMinutes()}-${endDate.getHours()}:${endDate.getMinutes()}`;
