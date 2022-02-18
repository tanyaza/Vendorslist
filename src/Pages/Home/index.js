import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.scss";

function Home() {
	return (
		<div className="home-page">
			<a href="/vendorList">go to vendors list</a>
		</div>
	);
}

export default Home;
