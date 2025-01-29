import telegramicon from "../../assets/telegram-icon.png";
import githubicon from "../../assets/gitub.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-[#001c31]">
      <div className="container backdrop-blur-sm w-[90%] m-auto flex items-center justify-between py-[10px]">
        <Link to={"/"}>
          <h1 className="font-[600] text-[44px] text-white [text-shadow:0_0_10px_#ffff]">
            Harorat.uz
          </h1>
        </Link>
        <nav className="flex items-center gap-3">
          <a href="https://t.me/kadirovs_blogg">
            <img
              className="w-[40px] rounded-[100%] h-[40px]"
              src={telegramicon}
              alt="telegram-channel"
            />
          </a>

          <a href="https://github.com/kdrv-devv">
            <img
              className="w-[35px] h-[35px] rounded-[100%]"
              src={githubicon}
              alt="github-profile"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
