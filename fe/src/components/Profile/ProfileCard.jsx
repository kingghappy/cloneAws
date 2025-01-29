import { useSelector, useDispatch } from "react-redux";
import { openEditModal } from "../../redux/profileSlice";

const ProfileCard = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={profile.image || "https://via.placeholder.com/40"}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-gray-500">Balance: ${profile.balance}</p>
        </div>
      </div>
      <button
        onClick={() => dispatch(openEditModal())}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
