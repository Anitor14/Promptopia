import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image
        src="assets/icons/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
      {/* <p>I dey Load</p> */}
    </div>
  );
};

export default Loading;
