import Image from "next/image";

const HeadingIcon = ({ text = "empty text" , classes={} }) => {
  return (
    <div className="flex items-center pb-2">
      <Image src="/assets/icons/heading1.png" alt="heading icon" height={23} width={23}/>
      <p className={`text-center text-sm ml-2 ${classes?.textBlack}`}>{text}</p>
      <Image src="/assets/icons/heading2.png" alt="heading icon" height={23} width={23}/>
    </div>
  );
};

export default HeadingIcon;