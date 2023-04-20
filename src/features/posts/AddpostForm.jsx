import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";

const AddpostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [userId, setUserId] = useState("");
	const users = useSelector(selectAllUsers);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);
	const onAuthorChanged = (e) => setContent(e.target.value);

	const onSavePostClicked = (e) => {
		if (title && content) {
			dispatch(postAdded(title, content, userId));

			setTitle("");
			setContent("");
		}
	};

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

	const usersOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	const dispatch = useDispatch();

	return (
		<section>
			<h2>Add a New Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChanged}
				/>

				<label htmlFor="postAuthor">Author:</label>
				<select id="postAuthor" onChange={onAuthorChanged} value={userId}>
					<option value=""></option>
					{usersOptions}
				</select>

				<label htmlFor="postContent">Content:</label>
				<textarea
					name="postContent"
					id="postContent"
					value={content}
					onChange={onContentChanged}
				/>
				<button disabled={!canSave} type="button" onClick={onSavePostClicked}>
					Save Post
				</button>
			</form>
		</section>
	);
};

export default AddpostForm;
