import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
	const [name, setName] = useState("");
	const renders = useRef(1); //first render
	const prevName = useRef("");

	useEffect(() => {
		renders.current = renders.current + 1;
		prevName.current = name;
	}, [name]);

	return (
		<div>
			<h1>Renders : {renders.current}</h1>
			<h1>Prev State Name : {prevName.current}</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="form-control mb-3"
			/>
		</div>
	);
}

export default UseRefExample2;
