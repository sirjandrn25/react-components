import React from "react";
import {
	XAxis,
	YAxis,
	LineChart,
	Line,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";

type chartMarginType = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

type linePropType = {
	datakey: string;
	color?: string;
};
type axisProp = {
	dataKey: string;
	angle?: number;
	tickMargin?: number;
	tickCount?: number;
	color?: string;
};

export type lineChartProps = {
	data: any[];
	line: linePropType;
	margin?: chartMarginType;
	xaxis: axisProp;
	yaxis: axisProp;
	tooltip?: boolean;
};

const LineChartFigure = (props: lineChartProps) => {
	const { data, line, margin, xaxis, yaxis, tooltip } = props;
	return (
		<ResponsiveContainer width="80%" height="100%">
			<LineChart
				data={data}
				margin={{
					top: margin?.top ? margin.top : 0,
					right: margin?.right ? margin.right : 0,
					bottom: margin?.bottom ? margin.bottom : 0,
					left: margin?.left ? margin.left : 0,
				}}
			>
				<Line
					type="monotone"
					dataKey={line.datakey}
					stroke={line.color ? line.color : "#82ca9d"}
				/>
				<XAxis
					dataKey={xaxis.dataKey}
					angle={-50}
					tickMargin={20}
					tickCount={30}
					stroke={xaxis.color ? xaxis.color : "#0099cc"}
				/>
				<YAxis
					dataKey={"amount"}
					tickCount={30}
					domain={[100, 2000]}
					stroke={yaxis.color ? yaxis.color : "#0099cc"}
				/>
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				{tooltip !== false && <Tooltip />}
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineChartFigure;
