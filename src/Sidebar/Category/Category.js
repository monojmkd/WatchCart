import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="ml">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Analog"
          title="Analog"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Smart Watch"
          title="Smart Watch"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Headphones"
          title="Headphones"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
