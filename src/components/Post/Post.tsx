interface PostType {
  title: string;
  category: string;
  date: string;
  img: string;
  type: string;
}

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const { title, category, date, img, type } = post;

  const getColor = (category: string) => {
    switch (category) {
      case "cinema":
        return "#d73d3f";
      case "education":
        return "#d3b04d";
      case "children":
        return "#8a38a3";
      case "main":
        return "#0b2873";
      default:
        return "#0b2873";
    }
  };

  return (
    <div className="post__wrapper">
      <button className="post__btn">Купить билет</button>
      <div className="post__img-wrapper">
        <img src={img} alt="" />
      </div>
      <div
        className="post__info-wrapper"
        // style={{ borderTop: `4px solid ${getColor(category)}` }}
      >
        <h3 className="post__title">{title}</h3>
        <div className="post__footer">
          <span className="post__date">{date}</span>
          <span className="post__type">
            <span
              className="post__marker"
              style={{ backgroundColor: getColor(category) }}
            ></span>
            <b>{type}</b>
          </span>
        </div>
      </div>
      <div
        className="post__backdrop"
        style={{ backgroundColor: getColor(category) }}
      ></div>
    </div>
  );
};
export default Post;
