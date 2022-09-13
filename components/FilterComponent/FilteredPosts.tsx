import React, { useMemo } from "react";

//Q8.2.4
import { POSTS } from "./index";

interface PostsProps {
  userId: number | null;
  posts: POSTS[];
}

function FilteredPosts(props: PostsProps) {
  //Q8.2.5
  let filteredPosts = useMemo(() => {
    return props.posts.filter((post) => post.userId == props.userId);
  }, [props.userId]);

  return (
    <div>
      {filteredPosts.map((post: any) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default React.memo(FilteredPosts);
