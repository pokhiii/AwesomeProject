const uuid = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const formatDate = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateListItemData = numItems => {
  const data = [];
  const currentDate = new Date();

  for (let i = 1; i <= numItems; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);

    data.push({
      id: uuid(),
      title: `Item ${i}`,
      date: formatDate(date),
    });
  }
  return data;
};
