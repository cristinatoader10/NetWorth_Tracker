import {changeName,changeCost,addCar} from "../store"
import {useDispatch, useSelector} from "react-redux"

function CarForm() {
    const dispatch = useDispatch();
    const name = useSelector(state => state.form.name);
    const cost = useSelector(state => state.form.cost);
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({name, cost}));

    }
    const handleNameChange = (event) => {
        const updatedInput = event.target.value;
        dispatch(changeName(updatedInput));
    };
    const handleCostChange = (event) => {
       const updatedCost = parseInt(event.target.value) || 0;
       dispatch(changeCost(updatedCost));
    };
    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={onSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded"
                           value={name}
                           onChange={handleNameChange}/>
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input type="number" className="input is-expanded"
                           value={cost || ''}
                           onChange={handleCostChange}/>
                </div>
                <div className="field">
                <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    </div>
}

export default CarForm;