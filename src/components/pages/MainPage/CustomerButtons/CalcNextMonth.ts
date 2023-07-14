const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export function calcNextMonth(): string {
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();

    if (currentDate <= 15) {
        return months[currentMonth];
    } else {
        if (currentMonth === 11) {
            return months[0];
        } else {
            return months[currentMonth + 1];
        }
    }
}