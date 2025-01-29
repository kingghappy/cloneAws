import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, closeEditModal } from "../../redux/profileSlice.js";

const EditProfileModal = () => {
  const dispatch = useDispatch();
  const { isEditing, name, email } = useSelector((state) => state.profile);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  if (!isEditing) return null;

  const handleSave = () => {
    dispatch(updateProfile({ name: updatedName, email: updatedEmail }));
    dispatch(closeEditModal());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Edit Profile</h3>
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border mb-4 rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => dispatch(closeEditModal())}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
