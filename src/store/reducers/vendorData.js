const initialState = {
	vendorsList: [],
	resultCount: "",
};

const vendorData = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VENDORS":
			return {
				...state,
				vendorsList: action.value,
			};
		case "SET_RESULT_COUNT":
			return {
				...state,
				resultCount: action.value,
			};
		default:
			return state;
	}
};
export default vendorData;
