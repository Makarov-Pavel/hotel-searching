export const numberFormatChange = (number) => {
    let thousands = String(number).substring(0, String(number).length-3)

    return thousands + ' ' + String(number).substring(String(number).length-3)
}