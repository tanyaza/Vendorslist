const pageSize = (state = 10, action) => {
	switch (action.type) {
		case "SET_SIZE":
			return state + 10;
		default:
			return state;
	}
};

export default pageSize;
