const ordersLines = {
    '1': [
        { lineNum: '1', content: 'Огурцы маринованные', volume: '1', unit: 'банка' },
        { lineNum: '2', content: 'Картофель молодой', volume: '0.6', unit: 'кг' },
        { lineNum: '3', content: 'Горошек консервированный', volume: '1', unit: 'банка' },
        { lineNum: '4', content: 'Морковь свежая', volume: '0.3', unit: 'кг' },
        { lineNum: '5', content: 'Майонез', volume: '1', unit: 'шт' },
        { lineNum: '6', content: 'Колбаса', volume: '0.5', unit: 'кг' }],
    '2': [
        { lineNum: '1', content: 'Огурцы маринованные', volume: '1', unit: 'банка' },
        { lineNum: '2', content: 'Картофель молодой', volume: '0.6', unit: 'кг' },
        { lineNum: '3', content: 'Горошек консервированный', volume: '1', unit: 'банка' },
        { lineNum: '4', content: 'Морковь свежая', volume: '0.3', unit: 'кг' },
        { lineNum: '5', content: 'Майонез', volume: '1', unit: 'шт' },
        { lineNum: '6', content: 'Колбаса', volume: '0.5', unit: 'кг' }]
};

export default function getOrderLines(orderKey) {
    var orderLines = ordersLines[orderKey]
    if (typeof orderLines === 'undefined') {
        orderLines = []
    }
    return orderLines
}