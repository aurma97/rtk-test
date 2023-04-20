import { useState } from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddpostForm from "./features/posts/AddpostForm";

function App() {
	return (
		<div className="App">
			<Counter />
			<AddpostForm />
			<PostsList />
		</div>
	);
}

export default App;
