import { useState } from 'react';
import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';
import AddMemberPopup from '../components/AddMemberPopup';
import EditUserPopup from '../components/EditUserPopup';
import { MdPersonAdd } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import Sidebar from '../components/Sidebar';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components with Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
 
const [users, setUsers] = useState([
  { id: 1, name: 'John Doe', email: 'john@vrvsecurity.com', role: 'Admin', industry: 'IT' },
  { id: 2, name: 'Jane Smith', email: 'jane@vrvsecurity.com', role: 'Owner', industry: 'Finance' },
  { id: 3, name: 'Alex Johnson', email: 'alex@vrvsecurity.com', role: 'Read', industry: 'HR' },
  { id: 4, name: 'Sara Parker', email: 'sara@vrvsecurity.com', role: 'Write', industry: 'IT' },
  { id: 5, name: 'Tom Brown', email: 'tom@vrvsecurity.com', role: 'Read', industry: 'Finance' },
  { id: 6, name: 'Emily Wilson', email: 'emily@vrvsecurity.com', role: 'Owner', industry: 'Healthcare' },
  { id: 7, name: 'Chris Evans', email: 'chris@vrvsecurity.com', role: 'Admin', industry: 'Marketing' },
  { id: 8, name: 'Patricia Lee', email: 'patricia@vrvsecurity.com', role: 'Write', industry: 'HR' },
  { id: 9, name: 'Robert King', email: 'robert@vrvsecurity.com', role: 'Admin', industry: 'Finance' },
  { id: 10, name: 'Linda Allen', email: 'linda@vrvsecurity.com', role: 'Owner', industry: 'Marketing' },
  { id: 11, name: 'Michael Scott', email: 'michael@vrvsecurity.com', role: 'Read', industry: 'IT' },
  { id: 12, name: 'Angela Martin', email: 'angela@vrvsecurity.com', role: 'Write', industry: 'HR' },
  { id: 13, name: 'Jim Halpert', email: 'jim@vrvsecurity.com', role: 'Read', industry: 'Sales' },
  { id: 14, name: 'Pam Beesly', email: 'pam@vrvsecurity.com', role: 'Admin', industry: 'Marketing' },
  { id: 15, name: 'Dwight Schrute', email: 'dwight@vrvsecurity.com', role: 'Owner', industry: 'Healthcare' },
  { id: 16, name: 'Oscar Martinez', email: 'oscar@vrvsecurity.com', role: 'Read', industry: 'Finance' },
  { id: 17, name: 'Kevin Malone', email: 'kevin@vrvsecurity.com', role: 'Admin', industry: 'IT' },
  { id: 18, name: 'Stanley Hudson', email: 'stanley@vrvsecurity.com', role: 'Write', industry: 'Finance' },
  { id: 19, name: 'Kelly Kapoor', email: 'kelly@vrvsecurity.com', role: 'Owner', industry: 'Marketing' },
  { id: 20, name: 'Ryan Howard', email: 'ryan@vrvsecurity.com', role: 'Admin', industry: 'HR' },
]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const toggleAddPopup = () => setIsAddPopupOpen(!isAddPopupOpen);
  const openEditPopup = (user) => { setCurrentUser(user); setIsEditPopupOpen(true); };
  const closeEditPopup = () => { setIsEditPopupOpen(false); setCurrentUser(null); };
  
  const handleAddUser = (newUser) => {
    setUsers(prev => [...prev, newUser]);
    setFilteredUsers(prev => [...prev, newUser]);
    setIsAddPopupOpen(false);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(user => user.id !== userId));
      setFilteredUsers(prev => prev.filter(user => user.id !== userId));
    }
  };

  const handleEditUser = (updatedUser) => {
    setUsers(prev => prev.map(user => user.id === updatedUser.id ? updatedUser : user));
    setFilteredUsers(prev => prev.map(user => user.id === updatedUser.id ? updatedUser : user));
    setIsEditPopupOpen(false);
  };

  const handleFilterChange = (filter) => {
    const { name, role, industry } = filter;
    const filtered = users.filter(user => {
      return (
        (!name || user.name.toLowerCase().includes(name.toLowerCase())) &&
        (!role || user.role === role) &&
        (!industry || user.industry === industry)
      );
    });
    setFilteredUsers(filtered);
  };

  const industries = ['IT', 'Finance', 'HR', 'Marketing', 'Healthcare'];
  const industryCounts = industries.map(industry => 
    users.filter(user => user.industry === industry).length
  );

  const data = {
    labels: industries,
    datasets: [
      {
        label: 'Number of Employees',
        data: industryCounts,
        backgroundColor: 'rgba(141, 128, 209, 0.3)',
        borderColor: '#8D80D1',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        borderColor: 'black', // Color for X-axis line
        ticks: {
          display: true, // Show X-axis ticks
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines
        },
        borderColor: 'black', // Color for Y-axis line
        ticks: {
          display: true, // Show Y-axis ticks
        },
      },
    },
  };
  
  return (
    <div className="w-full min-h-screen bg-slate-100">
      {/* Navbar */}
      <Navbar />

      {/* Main layout with Sidebar and Content */}
      <div className="flex flex-col pt-20"> {/* Added padding-top for navbar height */}
        
        {/* Centered Sidebar and Line Chart */}
        <div className="flex md:flex-row flex-col justify-center items-center mt-8 space-x-8"> {/* Center horizontally */}
          <div className="p-4 bg-white rounded-lg shadow-lg sm:mb-0 mb-4">
            <h2 className="text-xl font-semibold mb-4">Employee Stats</h2>
            <Line data={data} options={options} />
          </div>
          <Sidebar onFilter={handleFilterChange} />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col justify-center items-center p-4 lg:p-6">
          <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg sm:px-14 sm:py-8 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="sm:text-2xl text-lg flex gap-2 items-center font-bold">
                <AiOutlineTeam /> Team Members
              </h1>
              <button
                onClick={toggleAddPopup}
                className="px-6 py-2 flex gap-2 items-center bg-[#8D80D1] font-medium text-white rounded-lg"
              >
                <MdPersonAdd className='text-xl' /> Add Member
              </button>
            </div>

            {/* User Table */}
            <UserTable users={filteredUsers} onEdit={openEditPopup} onDelete={handleDeleteUser} />


            {/* Add Member Popup */}
            {isAddPopupOpen && <AddMemberPopup onClose={toggleAddPopup} onAddUser={handleAddUser} />}

            {/* Edit User Popup */}
            {isEditPopupOpen && <EditUserPopup user={currentUser} onClose={closeEditPopup} onEditUser={handleEditUser} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
