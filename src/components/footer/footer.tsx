import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001c31] h-[43.6px]">
      <div className="footer w-[90%] m-auto ">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h6 className="font-[400] text-[26px] text-[#fff] ">harorat.uz</h6>
          </Link>
          <p className="font-[400] text-[13px] text-[#fff] ">
            © 2025 All right reserved .created by{" "}
            <a href="https://t.me/kadirovs_blogg" className="underline">
              kdrv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
