export const calculateLastDay = (currentInputValue,daysValue) => {
    let selectedDate = new Date(currentInputValue)
    selectedDate.setDate(selectedDate.getDate()+Number(daysValue))
    let selectedDateDay = selectedDate.getDate();
    let selectedDateMonth = selectedDate.getMonth() + 1;
    let selectedDateYear = selectedDate.getFullYear();
    if (selectedDateMonth < 10) selectedDateMonth = "0" + selectedDateMonth;
    if (selectedDateDay < 10) selectedDateDay = "0" + selectedDateDay;
    let lastDay = selectedDateYear + "-" + selectedDateMonth + "-" + selectedDateDay;
    return lastDay
}