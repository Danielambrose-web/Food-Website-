import { assets     } from "../../assets/assets";
import "./FoodItem.css";

const FoodItem = ({ id, description, name, price, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          {name}
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
