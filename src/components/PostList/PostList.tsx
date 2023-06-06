import Post from "../Post/Post";
import { postList } from "../../data";

const PostList = () => {
  return (
    <main>
      <div className="post-list">
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
};
export default PostList;
