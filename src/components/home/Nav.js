import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const { items } = useSelector((state) => state.cartReducer);
  return (
    <>
      <nav className="nav">
        <div className="my-container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="/logo.svg" className="w-40 h-15 object-cover" alt="logo" />
            </Link>
            <ul className="flex items-center">
              {userToken ? (
                <li className="nav-li">
                  <Link to="/user" className="nav-link">
                    {user?.name}
                  </Link>
                </li>
              ) : (
                <li className="nav-li">
                  <Link to="/login" className="nav-link">
                    sign in
                  </Link>
                </li>
              )}

              <li className="nav-li relative">
                <Link to="/cart">
                  <BsHandbag size={20} />
                  <span className="nav-circle">{items}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Search />
    </>
  );
};
export default Nav;
