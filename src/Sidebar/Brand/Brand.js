import "./Brand.css";
import Input from "../../components/Input";

const Brands = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title brand-title">Brands</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="Titan"
          title="Titan"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="Casio"
          title="Casio"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="boAt"
          title="boAt"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="Samsung"
          title="Samsung"
          name="test2"
        />
       <Input
          handleChange={handleChange}
          value="Noise"
          title="Noise"
          name="test2"
        />
      </div>
    </>
  );
};

export default Brands;
