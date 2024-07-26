import Image from "next/image";
import Dabur from "../assets/companies/Dabur.png";

const LEFTARROW = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.0287 5.25017L7.40366 10.8752H20.4377V13.1252H7.40366L13.0287 18.7502L11.4377 20.3412L3.09668 12.0002L11.4377 3.65918L13.0287 5.25017Z"
      fill="black"
    />
  </svg>
);

const RIGHTARROW = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.9713 18.7503L16.5963 13.1253L3.56233 13.1253L3.56233 10.8753L16.5963 10.8753L10.9713 5.25032L12.5623 3.65933L20.9033 12.0003L12.5623 20.3413L10.9713 18.7503Z"
      fill="black"
    />
  </svg>
);

function Testimonial() {
  return (
    <div className="w-screen flex justify-center items-center bg-white pb-[88px]">
      <div className="mt-[68px] w-[1091px] h-[294px] flex flex-col justify-center items-center">
        <div className="font-bold text-[32px]">Client Testimonial</div>
        <div className="mt-[72px] flex items-center gap-x-[64px]">
          <div
            className="rounded-full p-3 h-fit"
            style={{ border: "1px solid #000000" }}
          >
            {LEFTARROW}
          </div>
          <div className="flex gap-x-[85px]">
            <div>
              <Image src={Dabur} alt="" height={175} width={204}></Image>
            </div>
            <div className="w-[548px]">
              <div>
                The LaunchWise team is very professional and 100% transparent.
                We would surely recommend them to everyone who wants to have a
                new business setup or those who already have a company. Their
                experts are thorough with all corners of business. They have
                surely earned us as their permanent client.
              </div>
              <div className="mt-5 font-bold"> Sunil Duggal, CEO, Dabur Healthcare</div>
            </div>
          </div>
          <div
            className="rounded-full p-3 h-fit"
            style={{ border: "1px solid #000000" }}
          >
            {RIGHTARROW}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
