import React from "react";
import "./index.scss";

export default function VendorBox({ singleVendor }) {
	return (
		<div className="vendor-box">
			<div className="vendor-box__img">
				<img src={singleVendor.backgroundImage} />
				<div className="vendor-box__logo">
					<img src={singleVendor.defLogo} />
				</div>
			</div>
			<div className="vendor-box__info">
				<div className="vendor-box__firstRow">
					<h3 className="vendor-box__title">{singleVendor.title}</h3>
					<div className="vendor-box__rateContainer">
						<span className="vendor-box__comments">
							({singleVendor.commentCount})
						</span>
						<div className="vendor-box__rate">
							<span>{singleVendor.rate}</span>
						</div>
					</div>
					{/* <div className="discount">تا ۱۵٪</div> */}
				</div>
				<div className="vendor-box__desc">
					<span>{singleVendor.description}</span>
				</div>
				<div className="vendor-box__thirdRow">
					<span className="vendor-box__delivery">ارسال اکسپرس</span>
					<span className="vendor-box__deliveryPrice">
						{singleVendor.deliveryFee}
						تومان
					</span>
				</div>
			</div>
		</div>
	);
}
