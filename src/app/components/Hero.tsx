import Image from "next/image";

const RIGHTARROW = (
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 5.5C0 5.31059 0.079009 5.12895 0.219646 4.99502C0.360282 4.86108 0.551026 4.78584 0.749916 4.78584H9.43845L6.21831 1.72068C6.07749 1.58658 5.99838 1.4047 5.99838 1.21506C5.99838 1.02541 6.07749 0.843536 6.21831 0.709436C6.35912 0.575337 6.5501 0.5 6.74925 0.5C6.94839 0.5 7.13937 0.575337 7.28019 0.709436L11.7797 4.99438C11.8495 5.06072 11.9049 5.13952 11.9427 5.22629C11.9805 5.31305 12 5.40606 12 5.5C12 5.59394 11.9805 5.68695 11.9427 5.77371C11.9049 5.86048 11.8495 5.93928 11.7797 6.00562L7.28019 10.2906C7.13937 10.4247 6.94839 10.5 6.74925 10.5C6.5501 10.5 6.35912 10.4247 6.21831 10.2906C6.07749 10.1565 5.99838 9.97459 5.99838 9.78494C5.99838 9.5953 6.07749 9.41342 6.21831 9.27932L9.43845 6.21416H0.749916C0.551026 6.21416 0.360282 6.13892 0.219646 6.00499C0.079009 5.87106 0 5.68941 0 5.5Z"
      fill="white"
    />
  </svg>
);
const HAMBURGERICON = (
  <svg
    width="19"
    height="12"
    viewBox="0 0 19 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.35352 6H17.3535"
      stroke="#393939"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M1.35352 1H10.3535"
      stroke="#393939"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M1.35352 11H13.3535"
      stroke="#393939"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

function Hero() {
  return (
    <div>
      <div className="md:hidden py-[9px] flex justify-between items-center">
        <Image
          src="https://i.ibb.co/WFJb1Xw/header-logo-88445946-1-1.png"
          height={64}
          width={89}
          alt=""
          className="ml-[27px]"
        ></Image>
        <div className="mr-[18px]">{HAMBURGERICON}</div>
      </div>
      <div className="hero py-4 ">
        <div className="w-full flex  justify-between px-[108px]  max-md:hidden">
          <Image
            src="https://i.ibb.co/drfK8Jk/header-logo-88445946-1.png"
            height={89}
            width={124}
            alt=""
          ></Image>
          <div className="flex text-white font-bold items-center gap-x-2 h-[52px] w-[173px] justify-center bg-[#23A6F0] mt-[18px] rounded-md">
            Enquire Now {RIGHTARROW}
          </div>
        </div>
        <div className=" flex flex-col items-center md:flex-row w-full md:justify-between md:px-[108px]">
          <div className=" mt-12 md:mt-[208px]  w-[297px] md:w-[622px] text-white text-[24px] md:text-[48px] font-bold">
            Work From Anywhere, Grow Everywhere.
            <br />
            Get Your Instant Virtual Office
          </div>
          <div className="mt-[78px] bg-white w-[297px] md:w-[481px] h-fit md:h-[589px] flex flex-col items-center px-[14px] md:px-[23px] pt-[25px] pb-[28px]">
            <div className="text-[22px] font-bold max-md:hidden">Get in touch with us</div>
            <div className="text-[15px] text-center text-[#667085] mt-2">
              Submit your Details to get an Instant{" "}
              <span className="font-semibold text-[#E98D16]">
                {" "}
                All-inclusive
              </span>{" "}
              Quote to your email and a{" "}
              <span className="font-semibold text-[#E98D16]">FREE</span> Expert
              consultation
            </div>
            <div className="mt-[30px] w-full px-[30px] md:px-[7px] flex flex-col gap-y-[18px]">
              <div>
                <div className="font-normal text-[#344054] text-[14.52px]">
                  Name
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className=" text-[12px] border-[0.91px] border-[#D0D5DD] mt-[5px] px-[14px] py-[11px] w-full rounded-lg "
                />
              </div>
              <div>
                <div className="font-normal text-[#344054] text-[14.52px]">
                  Name
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className=" text-[12px] border-[0.91px] border-[#D0D5DD] mt-[5px] px-[14px] py-[11px] w-full rounded-lg "
                />
              </div>
              <div>
                <div className="font-normal text-[#344054] text-[14.52px]">
                  Name
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className=" text-[12px] border-[0.91px] border-[#D0D5DD] mt-[5px] px-[14px] py-[11px] w-full rounded-lg "
                />
              </div>
              <div>
                <div className="font-normal text-[#344054] text-[14.52px]">
                  Name
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className=" text-[12px] border-[0.91px] border-[#D0D5DD] mt-[5px] px-[14px] py-[11px] w-full rounded-lg "
                />
              </div>
            </div>
            <div className="w-full mt-[30px] bg-[#3424C2] text-white flex items-center justify-center h-[36px] md:h-[50px] rounded-lg font-bold text-[15px]">
              Get a Detailed Quotation Now!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
