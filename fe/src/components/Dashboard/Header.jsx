import { useState } from "react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/auth/useLogout";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let hoverTimeout;

  const { logout } = useLogout();

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Hủy bỏ bất kỳ sự kiện timeout nào
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // Đợi 200ms để đảm bảo menu không tắt đột ngột
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, User!</span>
        {/* Vùng bao bọc lớn hơn */}
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Ảnh đại diện */}
          <img
            src="https://media.istockphoto.com/id/1495088043/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-h%E1%BB%93-s%C6%A1-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ho%E1%BA%B7c-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-%E1%BA%A3nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ch%C3%A2n.jpg?s=612x612&w=0&k=20&c=ZNv-8f5ixoGcFpltjahvCUGVA8Xc3-pL3-lt9fvxFjM="
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {/* Submenu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10 overflow-hidden">
              <ul className="text-sm text-gray-700">
                <li className="hover:bg-gray-100">
                  <Link
                    to="/dashboard/profile"
                    className="block px-4 py-2 w-full text-left"
                  >
                    Profile
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    to="/dashboard/settings"
                    className="block px-4 py-2 w-full text-left"
                  >
                    Settings
                  </Link>
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 w-full text-left cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
