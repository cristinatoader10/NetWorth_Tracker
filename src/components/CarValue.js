import {useSelector} from 'react-redux';
function CarValue() {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        return data
            .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .reduce((total, car) => {
                return total + car.cost;
            },0)
    });
    return <div className="car-value">
        Total cost of displayed items: ${totalCost}
    </div>
}
export default CarValue;