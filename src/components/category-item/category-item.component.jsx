import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({category}) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)
  return (
    <div
      className="category"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={onNavigateHandler}
    >
      <div className="category--text__container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
