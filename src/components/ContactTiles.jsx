import React from "react";
import PropTypes from "prop-types";

const ContactTiles = ({ contactInformation }) => {
  return (
    <div className="">
      {contactInformation.map(({ key, name, address, icon: Icon }) => (
        <div key={key}>
          <Icon />
          <div>
            <h1>{name}</h1>
            <a href={address}>{address}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

ContactTiles.propTypes = {
  contactInformation: PropTypes.array.isRequired,
};

export default ContactTiles;
