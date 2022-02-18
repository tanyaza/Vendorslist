import pageSize from "./pageSize";
import vendorData from "./vendorData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	vendorData,
	pageSize,
});

export default rootReducer;
