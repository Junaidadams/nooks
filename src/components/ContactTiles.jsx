import React from "react";
import PropTypes from "prop-types";

const ContactTiles = ({ contactInformation }) => {
  return (
    <div className=" rounded-md grid grid-cols-1 sm:grid-cols-2">
      {contactInformation.map(({ key, name, address, icon: Icon }) => (
        <div key={key} className=" bg-periwinkle p-6 m-4">
          <div className="flex flex-row ">
            <Icon size={30} color="#e4d9ff" />
            <h1 className="text-space-cadet text-2xl font-bold">{name}</h1>
          </div>
          <div className="w-full">
            <a
              href={address}
              className="text-lg text-space-cadet text-center w-full"
            >
              {address}
            </a>
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
