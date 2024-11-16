import ContactTiles from "../components/ContactTiles";
import { contactInformation } from "../../constants";

const Contact = () => {
  return (
    <div className="flex min-h-screen -mt-[56px]  bg-delft-blue flex-col ">
      <div>
        <ContactTiles contactInformation={contactInformation} />
      </div>
    </div>
  );
};

export default Contact;
