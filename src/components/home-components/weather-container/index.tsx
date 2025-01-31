import search from "../../../assets/search.svg";
// import cloudy from "../../../assets/cloudy.svg";
import { useRef, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import { WeatherData } from "../../../@types";

const WeatherContainer = () => {
  const axios = useAxios();
  const [data, setData] = useState<WeatherData | null>(null);

  const userInput = useRef<HTMLInputElement>(null);

  const getWeather = () => {
    if (userInput.current) {
      const country = userInput.current.value; // Input qiymatini olish
      console.log(country);
      
      axios({ url: country, method: "POST" }).then((res) =>
        setData(res?.data)
      );
    }
  };


  return (
    <main className="full-scren">
      <div className="main-container w-[90%] m-auto h-[600px] flex items-center justify-center">
        <div className="w-[47%] flex flex-col gap-[10px] h-[453px] rounded-[55px] p-[50px]  bg-[#000] opacity-[0.8]">
          <form
            onSubmit={(e) => {
                e.preventDefault(),
                getWeather();
            }}
            className="search w-full h-[70px] bg-[#585858] opacity-[0.3] rounded-[53px] flex items-center justify-between px-[20px]"
          >
            <input
              ref={userInput}
              className="bg-transparent text-[30px] text-[#fff] outline-none"
              type="text"
              placeholder="Search.."
            />
            <button
              type="submit"
              className="w-[50px] h-[50px] rounded-[100%] bg-white !opacity-1   flex items-center justify-center text-[10px]"
            >
              <img src={search} alt="" />
            </button>
          </form>
          <div className="center flex flex-col gap-[14px] ">
            <h3 className="font-[600] text-[40px] text-[#fff]">
              Weather in {data?.location?.country}
            </h3>
            <div className="flex flex-col gap-[8px]">
              <h2 className="font-[800] text-[50px] text-white">
                {data?.current?.temp_c} °C
              </h2>
              <div className="flex items-center gap-[10px]">
                <img
                  className="w-[30px] h-[30px] "
                  src={data?.current?.condition.icon}
                  alt="weather-img"
                />

                <h5 className="text-[#fff] font-[500] text-[20px]">
                  {data?.current?.condition.text}
                </h5>
              </div>
              <h5 className="text-[#fff] font-[500] text-[20px]">
                Humidity: {data?.current?.humidity} %
              </h5>
              <h5 className="text-[#fff] font-[500] text-[20px]">
                Wind Speed: {data?.current?.wind_kph} km/hr
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeatherContainer;
