import today from "./calculateTodaysDate";

let defaultLastDate = new Date(today)
defaultLastDate.setDate(defaultLastDate.getDate()+1)
let d = defaultLastDate.getDate();
let m = defaultLastDate.getMonth() + 1;
let y = defaultLastDate.getFullYear();

if (m < 10) m = "0" + m;
if (d < 10) d = "0" + d;

let defaultLastDay = y + "-" + m + "-" + d;

export default defaultLastDay