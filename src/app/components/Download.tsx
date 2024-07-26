import Image from "next/image";

const PEOPLEICON = (
  <svg
    width="48"
    height="40"
    viewBox="0 0 48 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_200_151)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.917 38.6666C45.917 38.6666 49.0003 38.6666 49.0003 35.5555C49.0003 32.4444 45.917 23.111 33.5837 23.111C21.2503 23.111 18.167 32.4444 18.167 35.5555C18.167 38.6666 21.2503 38.6666 21.2503 38.6666H45.917ZM21.3182 35.5555H45.8492C45.8636 35.5538 45.878 35.5517 45.8923 35.5493L45.917 35.543C45.9108 34.7217 45.4021 32.3386 43.5737 30.1919C41.8717 28.179 38.8808 26.2221 33.5837 26.2221C28.2896 26.2221 25.2987 28.1821 23.5937 30.1919C21.7652 32.3386 21.2534 34.7248 21.2503 35.543C21.2729 35.5474 21.2955 35.5516 21.3182 35.5555ZM33.5837 16.8888C35.2192 16.8888 36.7877 16.2333 37.9441 15.0664C39.1006 13.8995 39.7503 12.3168 39.7503 10.6666C39.7503 9.01635 39.1006 7.4337 37.9441 6.26681C36.7877 5.09992 35.2192 4.44436 33.5837 4.44436C31.9482 4.44436 30.3796 5.09992 29.2232 6.26681C28.0667 7.4337 27.417 9.01635 27.417 10.6666C27.417 12.3168 28.0667 13.8995 29.2232 15.0664C30.3796 16.2333 31.9482 16.8888 33.5837 16.8888ZM42.8337 10.6666C42.8337 11.8923 42.5944 13.1059 42.1295 14.2383C41.6647 15.3707 40.9833 16.3996 40.1244 17.2662C39.2655 18.1329 38.2457 18.8204 37.1235 19.2895C36.0012 19.7585 34.7984 19.9999 33.5837 19.9999C32.3689 19.9999 31.1661 19.7585 30.0438 19.2895C28.9216 18.8204 27.9019 18.1329 27.0429 17.2662C26.184 16.3996 25.5026 15.3707 25.0378 14.2383C24.5729 13.1059 24.3337 11.8923 24.3337 10.6666C24.3337 8.19123 25.3082 5.81726 27.0429 4.06692C28.7776 2.31658 31.1304 1.33325 33.5837 1.33325C36.0369 1.33325 38.3897 2.31658 40.1244 4.06692C41.8591 5.81726 42.8337 8.19123 42.8337 10.6666ZM21.053 23.9821C19.8196 23.5903 18.5482 23.3326 17.2605 23.2137C16.5369 23.1443 15.8105 23.11 15.0837 23.111C2.75033 23.111 -0.333008 32.4444 -0.333008 35.5555C-0.333008 37.6306 0.693742 38.6666 2.75033 38.6666H15.7497C15.2926 37.6953 15.0646 36.6305 15.0837 35.5555C15.0837 32.4132 16.2461 29.2026 18.4445 26.5208C19.1937 25.6061 20.0663 24.7506 21.053 23.9821ZM14.837 26.2221C9.69399 26.2844 6.77408 28.2133 5.09366 30.1919C3.25291 32.351 2.75033 34.7435 2.75033 35.5555H12.0003C12.0003 32.3044 12.9962 29.0657 14.837 26.2221ZM4.29199 12.2221C4.29199 9.74679 5.26654 7.37282 7.00125 5.62248C8.73597 3.87214 11.0887 2.88881 13.542 2.88881C15.9952 2.88881 18.348 3.87214 20.0827 5.62248C21.8174 7.37282 22.792 9.74679 22.792 12.2221C22.792 14.6975 21.8174 17.0715 20.0827 18.8218C18.348 20.5721 15.9952 21.5555 13.542 21.5555C11.0887 21.5555 8.73597 20.5721 7.00125 18.8218C5.26654 17.0715 4.29199 14.6975 4.29199 12.2221ZM13.542 5.99992C11.9065 5.99992 10.338 6.65547 9.1815 7.82236C8.02503 8.98926 7.37533 10.5719 7.37533 12.2221C7.37533 13.8724 8.02503 15.455 9.1815 16.6219C10.338 17.7888 11.9065 18.4444 13.542 18.4444C15.1775 18.4444 16.746 17.7888 17.9025 16.6219C19.059 15.455 19.7087 13.8724 19.7087 12.2221C19.7087 10.5719 19.059 8.98926 17.9025 7.82236C16.746 6.65547 15.1775 5.99992 13.542 5.99992Z"
        fill="#3C4647"
      />
    </g>
    <defs>
      <clipPath id="clip0_200_151">
        <rect width="48" height="39.5295" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function Download() {
  return (
    <div className="md:relative w-screen md:h-screen flex flex-col items-center justify-center">
      <div className="md:hidden ml-[40px] m-4 flex justify-between relative w-full items-center">
        <div className="text-[linear-gradient(270deg, #22417A 0%, #3F78E0 100%)] text-[24px] font-bold gradient-text">
          Benefits
        </div>
        <div className="font-semibold text-[9px]  w-[88px] h-[30px]  bg-[#FF7704]  text-white flex items-center justify-center">
          New Reviews
        </div>
      </div>
      <div className="md:absolute flex  flex-col md:flex-row gap-x-[30px] max-md:gap-y-[30px] -top-36">
        <div
          className="w-[328px] h-[221px] rounded-[20px] px-[40px] py-[35px] flex flex-col gap-y-[10px] bg-white "
          style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
        >
          <div>{PEOPLEICON}</div>
          <div className="text-6 font-bold ">Unleash Flexibility</div>
          <div className="text-[14px]">
            Work from anywhere in India with a prestigious virtual address.
          </div>
        </div>
        <div
          className="w-[328px] h-[221px] rounded-[20px] px-[40px] py-[35px] flex flex-col gap-y-[10px] bg-white"
          style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
        >
          <div>{PEOPLEICON}</div>
          <div className="text-6 font-bold">Unleash Flexibility</div>
          <div className="text-[14px]">
            Work from anywhere in India with a prestigious virtual address.
          </div>
        </div>
        <div
          className="w-[328px] h-[221px] rounded-[20px] px-[40px] py-[35px] flex flex-col gap-y-[10px] bg-[#23A6F0] text-white"
          style={{ boxShadow: "0px 13px 19px 0px #00000012" }}
        >
          <div>{PEOPLEICON}</div>
          <div className="text-6 font-bold">Unleash Flexibility</div>
          <div className="text-[14px]">
            Work from anywhere in India with a prestigious virtual address.
          </div>
        </div>
      </div>

      <div className="w-full px-[16px] md:px-[198px] py-[50px] flex flex-col items-center md:flex-row justify-between gap-x-[118px]">
        <div className="w-[319px] md:w-[509px]">
          <div className="text-[30px] md:text-[48px] text-[#1C4670] font-extrabold">
            FREE DOWNLOAD:
          </div>
          <div className="text-[20px] md:text-[32px] text-center font-bold text-[#1C4670] mt-[12px] md:mt-[20px]">
            The Ultimate Checklist For Virtual Office 2024
          </div>
          <div className="font-normal text-[15px] md:text-[24px] text-[#1C4670] mt-[24px] md:mt-[40px]">
            Discover the step-by-step procedures and essential considerations
            you need to know before setting up a Virtual Office in India.
          </div>
          <div className="w-[405px] text-white px-[62px] py-[15px] text-[24px] font-semibold bg-[#FFA229] rounded-lg mt-[40px] max-md:hidden">
            Send Me The Checklist
          </div>
        </div>
        <div className="mt-[22px] md:mt-0">
          <Image
            src="https://i.ibb.co/LhQQmjW/Group-10000057681-1.png"
            alt=""
            height={470}
            width={346}
          ></Image>
        </div>
        <div className="w-full h-[45px] text-white flex items-center justify-center text-[16px] md:text-[24px] font-semibold bg-[#FFA229] rounded-lg mt-[40px] md:hidden">
            Send Me The Checklist
          </div>
      </div>
    </div>
  );
}

export default Download;
