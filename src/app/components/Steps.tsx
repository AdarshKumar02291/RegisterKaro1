import Image from "next/image";

function Steps() {
  return (
    <div className="mt-[124px] w-screen px-4 md:px-0 h-fit md:pb-[60px] flex flex-col   items-center bg-white ">
      <div className=" text-[20px] md:text-[32px] mt-[40px]  max-md:text-center ">
        Get Your Virtual Office Up and Running in 3 Easy Steps!
      </div>
      <div className="mt-[20px] md:mt-[38px] text-[16px] md:text-[20px] text-[#2E2E2E]">
        Proceed to obtain Virtual office address
      </div>
      <div className="mt-[43px] md:mt-[60px] flex flex-col md:flex-row md:gap-x-[70px] gap-y-[64px]  relative">
        <div className="w-[318px] flex flex-col items-center justify-center text-center">
          <div
            className="h-[100px] w-[100px] bordercorner flex items-center justify-center"
            style={{
              background:
                " linear-gradient(90deg, #07569E 2.33%, #0093DD 96.51%)",
            }}
          >
            <Image
              src="https://i.ibb.co/tPYQcKd/Mask-group-1.png"
              alt=""
              height={50}
              width={50}
            ></Image>
          </div>
          <div className="w-[128px] mt-[20px] text-[16px] font-bold text-[#252B42]">
            Connect with RegisterKaro
          </div>
          <div className="text-[14px] mt-[20px]">
            Reach out to our friendly customer support team through chat, email,
            or phone. They'll guide you through the process.
          </div>
        </div>
        <div className="w-[318px] flex flex-col items-center justify-center text-center">
          <div
            className="h-[100px] w-[100px] bordercorner flex items-center justify-center"
            style={{
              background:
                " linear-gradient(90deg, #07569E 2.33%, #0093DD 96.51%)",
            }}
          >
            <Image
              src="https://i.ibb.co/tPYQcKd/Mask-group-1.png"
              alt=""
              height={50}
              width={50}
            ></Image>
          </div>
          <div className="w-[128px] mt-[20px] text-[16px] font-bold text-[#252B42]">
            Connect with RegisterKaro
          </div>
          <div className="text-[14px] mt-[20px]">
            Reach out to our friendly customer support team through chat, email,
            or phone. They'll guide you through the process.
          </div>
        </div>
        <div className="w-[318px] flex flex-col items-center justify-center text-center">
          <div
            className="h-[100px] w-[100px] bordercorner flex items-center justify-center"
            style={{
              background:
                " linear-gradient(90deg, #07569E 2.33%, #0093DD 96.51%)",
            }}
          >
            <Image
              src="https://i.ibb.co/tPYQcKd/Mask-group-1.png"
              alt=""
              height={50}
              width={50}
            ></Image>
          </div>
          <div className="w-[128px] mt-[20px] text-[16px] font-bold text-[#252B42]">
            Connect with RegisterKaro
          </div>
          <div className="text-[14px] mt-[20px]">
            Reach out to our friendly customer support team through chat, email,
            or phone. They'll guide you through the process.
          </div>
        </div>
        <div className="absolute left-56"><Image src= "https://i.ibb.co/Y7cVVQJ/Ellipse-79.png" alt="" width={248} height={28}></Image></div>
        <div className=" absolute bottom-40 right-56">
        <Image src= "https://i.ibb.co/VHfQh2D/Ellipse-81.png" alt="" width={248} height={28}></Image></div>
      </div>
    </div>
  );
}

export default Steps;
