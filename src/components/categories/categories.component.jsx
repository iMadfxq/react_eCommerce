import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({categories}) => {
  return (
    <section className="categories--container">
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </section>
  );
};

export default Categories;
