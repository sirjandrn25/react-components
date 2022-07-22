import React from "react";
import LineChartFigure from "../../Components/Chart/lineChart.component";
import { getRandomNumberBetweenRange } from "../../Utils/math.utils";
import { lineChartProps } from "../../Components/Chart/lineChart.component";

const generateDate = (i: number) => {
	return new Date(`${2022}-${10}-${i}`).toDateString();
};

const generateRandomData = () => {
	let data_arr = [];
	for (let i = 1; i <= 100; i++) {
		const data = {
			date: `day ${i}`,
			amount: getRandomNumberBetweenRange(500, 1500),
		};
		data_arr.push(data);
	}

	return data_arr;
};

const data = generateRandomData();

export const Chart = () => {
	const prop_list: lineChartProps = {
		data: data,
		line: {
			datakey: "amount",
		},
		xaxis: {
			dataKey: "date",
		},
		yaxis: {
			dataKey: "amount",
		},
	};
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<LineChartFigure {...prop_list} />
		</div>
	);
};

export default Chart;
