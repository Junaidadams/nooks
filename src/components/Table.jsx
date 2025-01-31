import PropTypes from "prop-types";

const Table = ({ operatingHours }) => {
  return (
    <div className="bg-gradient-to-t from-delft-blue to-space-cadet p-4">
      <table className="w-full border-collapse mt-4 mx-auto bg-white shadow-lg rounded-sm overflow-hidden">
        <thead>
          {/* <tr className="bg-ghost-white text-space-cadet">
            <th className="px-6 py-3 text-left text-sm font-medium uppercase"></th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Open
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Close
            </th>
          </tr> */}
        </thead>
        <tbody>
          {operatingHours.map(({ key, day, open, closed }, index) => (
            <tr
              key={key}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50`}
            >
              <td className="px-6 py-4 text-left text-gray-700 font-medium">
                {day}
              </td>
              <td className="px-6 py-4 text-left text-gray-700">{open}</td>
              <td className="px-6 py-4 text-left text-gray-700">{closed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  operatingHours: PropTypes.array.isRequired,
};

export default Table;
