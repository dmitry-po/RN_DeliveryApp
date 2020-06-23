var allOrders = [
    { key: '1', address: 'Пугачева, 147', weight: '11.1кг', active: true, shift: '08:00-10:00' },
    { key: '2', address: 'Посадского, 215', weight: '22.2кг', active: false, shift: '10:00-12:00' },
    { key: '3', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: false, shift: '08:00-10:00' },
    { key: '4', address: 'Пресненская наб. 12', weight: '44.4кг', active: false, shift: '12:00-14:00' },
    { key: '5', address: 'Ленина, 17', weight: '55.5кг', active: false, shift: '14:00-16:00' },
    { key: '6', address: 'Жерара Депардье, 81', weight: '66.6кг', active: false, shift: '14:00-16:00' },
    { key: '7', address: 'Адамса, 42', weight: '77.7кг', active: false, shift: '10:00-12:00' },
    { key: '8', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: false, shift: '16:00-18:00' },
    { key: '12', address: 'Посадского, 215', weight: '22.2кг', active: false, shift: '08:00-10:00' },
    { key: '13', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: false, shift: '08:00-10:00' },
    { key: '14', address: 'Пресненская наб. 12', weight: '44.4кг', active: false, shift: '16:00-18:00' },
    { key: '15', address: 'Ленина, 17', weight: '55.5кг', active: false, shift: '12:00-14:00' },
    { key: '16', address: 'Жерара Депардье, 81', weight: '66.6кг', active: false, shift: '12:00-14:00' },
    { key: '17', address: 'Адамса, 42', weight: '77.7кг', active: false, shift: '12:00-14:00' },
    { key: '18', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: false, shift: '16:00-18:00' }
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
