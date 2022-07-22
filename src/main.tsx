import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartPage from "./pages/chart";

const rootNode = document.getElementById("root");

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/chart" element={<ChartPage />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	rootNode
);
