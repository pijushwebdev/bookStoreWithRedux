import { useDispatch } from "react-redux";
import { statusChange } from "../redux/filterSlice/action";

const Filter = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>
        <div className="flex items-center space-x-4">
          <button onClick={() =>dispatch(statusChange('All'))} className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button onClick={() =>dispatch(statusChange('featured'))} className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
