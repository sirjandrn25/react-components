import React from "react";
import { Link, Outlet } from "react-router-dom";

const Chart = () => {
	return (
		<div className="h-screen w-screen  flex flex-row ">
			<div className="h-full w-[280px] bg-base-200">
				<ul className="w-full p-3">
					<li className="px-5 py-3">
						<Link to="/chart">Line chart</Link>
					</li>
					<li className="px-5 py-3">
						<Link to="/chart/bar">Bar chart</Link>
					</li>
				</ul>
			</div>
			<div className="w-full h-full">
				<div className="h-[500px] w-[600px]">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Chart;
