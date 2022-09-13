import React, { useCallback, useEffect, useState } from "react";
import FilteredPosts from "./FilteredPosts";
import UserSelector from "./UserSelector";

//Q8.2.1

export type POSTS = {
  userId: 1;
  id: 4;
  title: "eum et est occaecati";
  body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit";
};

function FilterComponent() {
  const [posts, setPosts] = useState<POSTS[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    console.log("Fetch is run");
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const updateUser = (newId: number) => {
    setUserId(newId);
  };

  return (
    <div>
      <UserSelector handleSelectUser={updateUser} />
      <FilteredPosts userId={userId} posts={posts} />
    </div>
  );
}

export default FilterComponent;
