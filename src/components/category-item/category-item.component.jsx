import "./category-item.styles.scss";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div
      className="category"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="category--text__container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
