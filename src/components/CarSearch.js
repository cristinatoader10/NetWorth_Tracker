import {changeSearchTerm} from "../store/index.js";
import {useDispatch, useSelector} from "react-redux";

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.cars.searchTerm);
    const handleSearchTermChange = (event) => {
        const value = event.target.value;
        dispatch(changeSearchTerm(value));
    }
    return <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input
                className="input"
                value={searchTerm}
                onChange={handleSearchTermChange}/>
        </div>
    </div>
}

export default CarSearch;