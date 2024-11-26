import { useState } from "react";

const Sidebar = ({ onFilter }) => {
  // Example state for filter (if needed in Sidebar)
  const [filter, setFilter] = useState({
    name: '',
    role: '',
    industry: ''
  });

  // Handle changes to filter
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevState => ({ ...prevState, [name]: value }));
    onFilter(filter); // Call parent function with the current filter values
  };

  return (
    <div className="sidebar w-64 p-8 bg-white text-white rounded-lg shadow-lg">
      {/* Example filter fields */}
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          value={filter.name}
          onChange={handleInputChange}
          placeholder="Filter by name"
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          name="role"
          value={filter.role}
          onChange={handleInputChange}
          placeholder="Filter by role"
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          name="industry"
          value={filter.industry}
          onChange={handleInputChange}
          placeholder="Filter by industry"
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};

export default Sidebar;
