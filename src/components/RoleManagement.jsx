

const RoleManagement = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">Role Management</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="New Role"
          className="border border-gray-300 rounded p-2 flex-grow"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Role</button>
      </div>
    </div>
  );
};

export default RoleManagement;
