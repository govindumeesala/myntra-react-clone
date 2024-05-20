import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
/* eslint-disable react/prop-types */

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);

  // if item present in bag or not
  const isBagItem = bag.includes(item.id);

  const handleAddtoBag = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };

  const handleRemoveFromBag = async () => {
    await dispatch(bagSliceActions.removeFromBag(item.id));
    console.log(typeof item.id, bag);
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {isBagItem ? (
        <button className="btn-remove-bag" onClick={handleRemoveFromBag}>
          <MdDelete className="btn-icon" />
          Remove from bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddtoBag}>
          <IoMdAdd className="btn-icon" />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
