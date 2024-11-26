import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AddMemberPopup = ({ onClose, onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Read');

  const handleAdd = () => {
    const newUser = { id: Date.now(), name, email, role }; // Generating a new unique ID
    onAddUser(newUser);  // Pass the new user back to the parent
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Member</h2>
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        >
          <option value="Read">Read</option>
          <option value="Write">Write</option>
          <option value="Admin">Admin</option>
          <option value="Owner">Owner</option>
        </select>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberPopup;
