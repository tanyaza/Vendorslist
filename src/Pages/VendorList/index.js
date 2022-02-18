import React, { useEffect } from "react";
import VendorBox from "../../Components/VendorBox/index";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getVendors, increaseSize } from "../../store/actions";

function VendorList() {
	const dispatch = useDispatch();
	const vendorsList = useSelector((state) => state.vendorData);
	const size = useSelector((state) => state.pageSize);
	useEffect(() => {
		window.addEventListener("scroll", loadMore);
	}, []);

	useEffect(() => {
		dispatch(getVendors(size));
	}, [size]);

	function loadMore() {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.scrollingElement.scrollHeight
		) {
			dispatch(increaseSize());
		}
	}

	return (
		<div className="vendors-page">
			<div className="vendors-page__count">
				<h2>{vendorsList.resultCount}</h2>
			</div>
			<div className="vendors-page__list">
				{vendorsList.vendorsList.map((singleVendor) => (
					<VendorBox singleVendor={singleVendor.data} />
				))}
			</div>
		</div>
	);
}

export default VendorList;
