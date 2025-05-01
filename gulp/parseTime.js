const now = new Date();
const year = now.getFullYear().toString().padStart(2, "0");
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const day = now.getDate().toString().padStart(2, "0");
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");

export const parseTime = () => {
  return `${year}-${month}-${day}_${hours}-${minutes}`;
};
