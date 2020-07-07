const ordersLines = {
    '1': [
        { lineNum: '1', content: 'Огурцы маринованные', volume: '1', unit: 'банка', active: true },
        { lineNum: '2', content: 'Картофель молодой', volume: '0.6', unit: 'кг', active: true },
        { lineNum: '3', content: 'Горошек консервированный', volume: '1', unit: 'банка', active: false },
        { lineNum: '4', content: 'Морковь свежая', volume: '0.3', unit: 'кг', active: true },
        { lineNum: '5', content: 'Майонез', volume: '1', unit: 'шт', active: true },
        { lineNum: '6', content: 'Колбаса', volume: '0.5', unit: 'кг', active: true },
        { lineNum: '11', content: 'Огурцы маринованные', volume: '1', unit: 'банка', active: false },
        { lineNum: '12', content: 'Картофель молодой', volume: '0.6', unit: 'кг', active: false },
        { lineNum: '13', content: 'Горошек консервированный', volume: '1', unit: 'банка', active: false },
        { lineNum: '14', content: 'Морковь свежая', volume: '0.3', unit: 'кг', active: false },
        { lineNum: '15', content: 'Майонез', volume: '1', unit: 'шт', active: false },
        { lineNum: '16', content: 'Колбаса', volume: '0.5', unit: 'кг', active: false }],
    '2': [
        { lineNum: '1', content: 'Огурцы маринованные', volume: '1', unit: 'банка', active: true },
        { lineNum: '2', content: 'Картофель молодой', volume: '0.6', unit: 'кг', active: true },
        { lineNum: '3', content: 'Горошек консервированный', volume: '1', unit: 'банка', active: false },
        { lineNum: '4', content: 'Морковь свежая', volume: '0.3', unit: 'кг', active: true },
        { lineNum: '5', content: 'Майонез', volume: '1', unit: 'шт', active: true },
        { lineNum: '6', content: 'Колбаса', volume: '0.5', unit: 'кг', active: true }]
};

export const getAllOrderLines = (orderKey) => {
    var lines = ordersLines[orderKey];
    if (typeof lines === 'undefined') {
        lines = [];
    }
    return lines
}

export const getActiveLines = (orderKey) => {
    var lines = getAllOrderLines(orderKey)
    lines = lines.filter((item) => item.active);
    return lines
}

export const updateOrderLines = (orderKey, orderLines) => {
    ordersLines[orderKey] = orderLines;
}

