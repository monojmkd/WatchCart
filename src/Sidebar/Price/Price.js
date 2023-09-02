import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        
        <Input
          handleChange={handleChange}
          value="0-1000"
          title="₹0 - ₹1000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="₹1000 - ₹5000"
          title="₹1000 - ₹5000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="₹5000 - ₹10000"
          title="₹5000 - ₹10000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="₹10000-₹1000000"
          title="Over ₹10000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
