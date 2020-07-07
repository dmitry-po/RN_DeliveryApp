var allOrders = [
    { key: '1', user: 'Игнатьев Тит Данилович', address: 'Пугачева, 147', weight: '11.1кг', active: true, shift: '08:00-10:00' },
    { key: '2', user: 'Многогрешный Вадим Григорьевич', address: 'Посадского, 215', weight: '22.2кг', active: false, shift: '10:00-12:00' },
    { key: '3', user: 'Ермаков Цицерон Викторович', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: false, shift: '08:00-10:00' },
    { key: '4', user: 'Дубченко Юлиан Максимович', address: 'Пресненская наб. 12', weight: '44.4кг', active: false, shift: '12:00-14:00' },
    { key: '5', user: 'Емельянов Ждан Борисович', address: 'Ленина, 17', weight: '55.5кг', active: false, shift: '14:00-16:00' },
    { key: '6', user: 'Потапов Зигмунд Васильевич', address: 'Жерара Депардье, 81', weight: '66.6кг', active: false, shift: '14:00-16:00' },
    { key: '7', user: 'Барановский Зиновий Петрович', address: 'Адамса, 42', weight: '77.7кг', active: false, shift: '10:00-12:00' },
    { key: '8', user: 'Русаков Зенон Данилович', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: false, shift: '16:00-18:00' },
    { key: '12', user: 'Антонов Болеслав Иванович', address: 'Посадского, 215', weight: '22.2кг', active: false, shift: '08:00-10:00' },
    { key: '13', user: 'Притула Сава Вадимович', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: false, shift: '08:00-10:00' },
    { key: '14', user: 'Шаров Иосиф Леонидович', address: 'Пресненская наб. 12', weight: '44.4кг', active: false, shift: '16:00-18:00' },
    { key: '15', user: 'Уваров Семён Дмитриевич', address: 'Ленина, 17', weight: '55.5кг', active: false, shift: '12:00-14:00' },
    { key: '16', user: 'Марочко Йозеф Григорьевич', address: 'Жерара Депардье, 81', weight: '66.6кг', active: false, shift: '12:00-14:00' },
    { key: '17', user: 'Хижняк Нестор Ярославович', address: 'Адамса, 42', weight: '77.7кг', active: false, shift: '12:00-14:00' },
    { key: '18', user: 'Лебедев Геннадий Эдуардович', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: false, shift: '16:00-18:00' }
]

export function getAllOrders() {
    return allOrders;
}

export function getActiveOrders() {
    return allOrders.filter(item => item.active == true);
}

export function updateOrders(orders) {
    allOrders = orders
}

export function setOrderAddress(order, address) {
    var idx = allOrders.indexOf(order);
    allOrders[idx].address = address;
    console.log(allOrders[idx])
}

export function setOrderStatus(order, status) {
    var idx = allOrders.indexOf(order);
    allOrders[idx].active = status;
}
