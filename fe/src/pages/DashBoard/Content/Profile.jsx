import { useSelector } from "react-redux";

import ProfileCard from './../../../components/Profile/ProfileCard';
import EditProfileModal from './../../../components/Profile/EditProfileModal';
import TransactionHistory from './../../../components/Profile/TransactionHistory';

const Profile = () => {
  const transactions = useSelector((state) => state.profile.transactions);

  return (
    <div className="p-6 space-y-6">
      <ProfileCard />
      <TransactionHistory transactions={transactions} />
      <EditProfileModal />
    </div>
  );
};

export default Profile;
