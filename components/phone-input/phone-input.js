import InputPhone from "react-phone-input-labelled";
import "react-phone-input-labelled/dist/style.css";

const PhoneInput = () => {
  const handleOnChange = () => {
    console.log("changed");
  };

  return <InputPhone defaultCountry={"us"} onChange={handleOnChange} />;
};

export { PhoneInput };
