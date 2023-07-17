import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default () => {
  const dateTime = document.querySelectorAll('.dateTime');
  const aux = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  for (let i = 0; i < dateTime.length; i += 1) { dateTime[i].textContent = aux; }
};
