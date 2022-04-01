let month = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']

export const DateParser = (date) => {
    let parsedArr = date.split('-')
    let parsedStr = parsedArr[2] + ' ' + month[(Number(parsedArr[1]) + 1)] + ', ' + parsedArr[0]
    return parsedStr
}
