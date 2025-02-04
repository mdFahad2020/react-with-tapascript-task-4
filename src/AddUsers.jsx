import PropTypes from "prop-types";

const AddUsers = ({ addUser }) => {
  return (
    <button
      onClick={addUser}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 cursor-pointer"
    >
      Add User +
    </button>
  );
};

AddUsers.propTypes = {
  addUser: PropTypes.func.isRequired,
};
export default AddUsers;
