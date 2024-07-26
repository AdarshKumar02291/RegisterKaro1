import Image from "next/image";
import Spring from "../assets/companies/Workspace.png";
import Slack from "../assets/companies/Slack_RGB.png";
import We_work from "../assets/companies/We_work_1.png";
import Oyo from "../assets/companies/Oyo.png";
import Razorpay from "../assets/companies/Group.png";
import ICICI from "../assets/companies/ICICI.png";

function Logo() {
  return (
    <div className="w-screen flex flex-col items-center justify-center px-[195px] h-[448px]">
      <div className="mt-[70px] flex justify-center gap-x-6 h-fit">
        <Image src={Spring} alt="" height={75} width={154}></Image>
        <Image src={Slack} alt="" height={75} width={154}></Image>
        <Image
          src={We_work}
          alt=""
          className="h-[30px]"
          height={30}
          width={154}
        ></Image>
        <Image
          src={Oyo}
          alt=""
          className="h-[30px]"
          height={30}
          width={154}
        ></Image>
        <Image
          src={Razorpay}
          alt=""
          className="h-[30px]"
          height={30}
          width={154}
        ></Image>
        <Image
          src={ICICI}
          alt=""
          className="h-[30px]"
          height={30}
          width={154}
        ></Image>
      </div>
      <div
        className="w-[1024px] h-[124px] mt-[50px] flex items-center text-white font-bold text-[24px] justify-between px-[50px]"
        style={{
          background: "linear-gradient(270deg, #D71489 -1.04%, #004788 100%)",
        }}
      >
        {" "}
        <div className="w-[250px]">Subscribe for Latest Newsletter</div>
        <div className="w-[450px] relative">
          <input
            type="text"
            placeholder="Your Email"
            className="text-[14px] w-[450px] h-[58px] px-4"
            style={{ border: "1px solid #E6E6E6" }}
          />
          <div className=" absolute right-0 top-0 w-[117px] h-[58px] bg-[#3C4647] text-[14px] font-normal flex items-center justify-center">Subscribe</div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
