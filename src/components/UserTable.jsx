import ProfilePic1 from '../assets/pr1.avif';
import ProfilePic2 from '../assets/pr2.avif';
import ProfilePic3 from '../assets/pr3.avif';
import ProfilePic4 from '../assets/pr4.avif';
import ProfilePic5 from '../assets/pr5.avif';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// Example users data is no longer needed here, as users are passed down from the parent component.

const profilePics = [
  ProfilePic1, // For id = 1
  ProfilePic2, // For id = 2
  ProfilePic3, // For id = 3
  ProfilePic4, // For id = 4
  ProfilePic5, // For id = 5
];

const roleColors = {
  Admin: 'bg-red-600',  // Red for Admin
  Owner: 'bg-blue-600', // Blue for Owner
  Read: 'bg-green-600', // Green for Read
  Write: 'bg-yellow-600', // Yellow for Write
};

const roleColorsText = {
  Admin: 'text-red-600',  // Red for Admin
  Owner: 'text-blue-600', // Blue for Owner
  Read: 'text-green-600', // Green for Read
  Write: 'text-yellow-600', // Yellow for Write
};



const UserCard = ({ user, onEdit, onDelete }) => {
  // Generate the profile picture path dynamically
  const profilePic = profilePics[(user.id - 1) % 5];

  const handleDelete = () => {
    // Confirmation prompt
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      onDelete(user.id);  // Pass user id to the parent component for deletion
    }
  };

  return (
    <div className={`p-4 bg-opacity-10 ${roleColors[user.role]} ${roleColorsText[user.role]} relative`}>
      {/* Profile and User Info */}
      <div className="flex items-center gap-4">
        {/* Profile Picture */}
        <img
          src={profilePic}  // Dynamically use the profilePic
          alt={`${user.name}'s profile`}
          className="w-16 h-16 rounded-full object-cover" // Style to make it round
        />
        
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="opacity-60">{user.email}</p>
          <p className="opacity-60">{user.industry}</p>
          <p className="mt-2">{user.role}</p>
        </div>
      </div>

      {/* Edit and Delete Buttons at the Top-Right Corner */}
      <div className="absolute top-1 right-1 flex">
        <button
          onClick={() => onEdit(user)}  // When edit is clicked, pass the user to onEdit
          className="p-2"
        >
          <MdEdit />
        </button>
        <button
          onClick={handleDelete}  // When delete is clicked, show the confirmation dialog
          className="p-2"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};


const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {users.map(user => (
        <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />  // Pass onDelete prop to UserCard
      ))}
    </div>
  );
};

export default UserTable;
