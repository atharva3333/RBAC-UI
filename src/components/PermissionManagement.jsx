import { useState } from "react";
const PermissionManagement = () => {
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false,
  });

  const handlePermissionChange = (event) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">Permission Management</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="read"
            checked={permissions.read}
            onChange={handlePermissionChange}
            className="mr-2"
          />
          Read
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="write"
            checked={permissions.write}
            onChange={handlePermissionChange}
            className="mr-2"
          />
          Write
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="delete"
            checked={permissions.delete}
            onChange={handlePermissionChange}
            className="mr-2"
          />
          Delete
        </label>
      </div>
    </div>
  );
};

export default PermissionManagement;
