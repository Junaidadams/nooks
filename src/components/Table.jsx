import React from "react";
import PropTypes from "prop-types";

const Table = ({ operatingHours }) => {
  return (
    <table className="w-full border-collapse  mt-4 mx-auto">
      {/* <thead>
        <tr className="">
          <th className="  px-4 py-2 text-left">Day</th>
          <th className="  px-4 py-2 text-left">Open</th>
          <th className="  px-4 py-2 text-left">Close</th>
        </tr>
      </thead> */}
      <tbody>
        {operatingHours.map(({ key, day, open, closed }) => (
          <tr key={key} className="even:bg-space-cadet-lighter">
            <td className=" text-left px-4 py-3">{day}</td>
            <td className=" text-left px-4 py-3">{open}</td>
            <td className=" text-left px-4 py-3">{closed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  operatingHours: PropTypes.array.isRequired,
};

export default Table;
