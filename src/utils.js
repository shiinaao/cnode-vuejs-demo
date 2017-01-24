import Timeago from 'timeago'

export const baseURL = 'https://cnodejs.org/api/v1'

export function timeBeforeNow (time) {
  var str = '';
  if (time !== null && time !== '') {
    let timeagoInstance = new Timeago();
    str = timeagoInstance.format(time, 'en_US');
  }
  return str;
}
