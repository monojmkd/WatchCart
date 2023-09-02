import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="Blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="Red"
          title="Red"
          name="test1"
          color="red"
        />
          <Input
          handleChange={handleChange}
          value="Gold"
          title="Gold"
          name="test1"
          color="gold"
        />
        <Input
          handleChange={handleChange}
          value="Rose pink"
          title="Rose pink"
          name="test1"
          color="#f4b5dc"
        />
      
      </div>
    </>
  );
};

export default Colors;
