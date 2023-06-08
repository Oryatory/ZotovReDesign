import Post from "../Post/Post";
import { postList } from "../../data";

const PostList = () => {
  return (
    <main>
      <h1 style={{ fontSize: "100px", textAlign: "center" }}>
        ВЫСТАВКИ И СОБЫТИЯ
      </h1>
      <div className="post-list">
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
};
export default PostList;
