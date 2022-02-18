import { getVendorList } from "../Constants/urls";
import axios from "axios";

export const increaseSize = () => {
	return { type: "SET_SIZE" };
};
export const setVendors = (val) => {
	return { type: "SET_VENDORS", value: val };
};
export const setResultCount = (val) => {
	return { type: "SET_RESULT_COUNT", value: val };
};
export const getVendors = (size) => {
	return (dispatch) => {
		axios
			.get(`${getVendorList}?page=0&page_size=${size}&lat=35.754&long=51.328`)
			.then((res) => {
				const vendors = res.data.data.finalResult.filter(function (value) {
					return value.type == "VENDOR";
				});
				const resultCount = res.data.data.finalResult.filter(function (value) {
					return value.type == "TEXT";
				});

				if (res.status) {
					dispatch(setVendors(vendors));
					dispatch(setResultCount(resultCount[0].data));
				}
			});
	};
};
