import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigation = useNavigate();
  const handleNavClick = (path: string) => {
    navigation(path);
  };
  const handleUserIconClick = () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      handleNavClick('/mypage');
    } else {
      handleNavClick('/login');
    }
  };
  return (
    <div className="w-[56.3vh] h-[6.3vh] bg-purpleLight rounded-t-lg flex items-center relative">
      <img
        src="/logosmall.svg"
        alt="logo"
        onClick={() => handleNavClick('/')}
        className="w-[10vh] absolute ml-[3vh] cursor-pointer"
      />
      <img
        src="/person_20dp_FILL1_wght400_GRAD0_opsz20.svg"
        alt="user"
        onClick={handleUserIconClick}
        className="w-[3.5vh] absolute right-0 mr-[3vh] cursor-pointer"
      />
    </div>
  );
};

export default Header;
