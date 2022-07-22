import { Outlet } from "react-router-dom";

export default function App() {
	return (
		// <h1 className="text-3xl font-bold underline text-blue-500">
		// 	Hello world!
		// 	<button className="btn">primary</button>
		// </h1>
		<div className="bg-white h-screen w-screen">
			<Outlet />
		</div>
	);
}
