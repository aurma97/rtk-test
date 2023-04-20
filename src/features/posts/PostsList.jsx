import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function PostsList() {
	const posts = useSelector(selectAllPosts);
	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date));
	const renderedPosts = orderedPosts.map((post) => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p className="postCredit">
				<PostAuthor className="postCredit" userId={post.user} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
			<p>{post.content.substring(0, 100)}</p>
		</article>
	));
	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	);
}
