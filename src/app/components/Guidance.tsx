import Image from "next/image";
import phone from "../assets/logos/phone.png";

function Guidance() {
  return (
    <div className="mt-[50px] bg-white flex justify-center items-center">
      <div className="w-[1100px] h-[480px] flex items-center justify-between mt-[25px]">
        <div className="max-md:hidden ">
          <div className="flex items-center gap-x-2">
            <div className="h-fit p-4 rounded-[20px]" style={{ border: "2px solid #C8C8C8" }}>
              <Image
                src={phone}
                alt="Rectangle-2144-1"
                height={25}
                width={25}
              ></Image>
            </div>
            <div className="font-bold text-[30px] w-[500px]">
              Expert Guidance: Consultation and Company Formation
            </div>
          </div>
          <div className="w-[400px] mt-[40px]">
            Book a free CONSULTATION with our CA/CS and company formation
            expert.
          </div>
          <div className="w-[318px] h-[52px] text-white flex items-center justify-center text-[16px] md:text-[24px] font-semibold bg-[#FFA229] rounded-lg mt-[40px] ">
            Talk to an Expert
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/YT32GSd/Group-1410123093.png"
            alt="Rectangle-2144-1"
            height={475}
            width={475}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Guidance;
