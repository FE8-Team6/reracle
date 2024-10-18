import { NavBtnTypes } from '@/lib/types/navBtnTypes';

const NavBtn = ({ image, text, onClick }: NavBtnTypes) => {
  return (
    <div className="w-[7vh] h-[6.8vh] relative flex items-center cursor-pointer">
      <button
        onClick={onClick}
        className="cursor-pointer border-none w-[8vh] bg-transparent flex flex-col items-center">
        <img src={image} className="w-[3.2vh] mx-auto" />
        <div className="text-[1.3vh] mt-1 text-center text-grayDark font-medium">{text}</div>
      </button>
    </div>
  );
};

export default NavBtn;
