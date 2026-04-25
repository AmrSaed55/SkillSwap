type SecondaryButtonProps = {
  text: string;
  className?: string;
};

export default function SecondaryButton({
  text,
  className = 'w-52 h-15',
}: SecondaryButtonProps) {
  return (
    <button
      className={`text-lg bg-white border-2 border-[#E8DEFF] py-2 px-4 rounded-xl 
      hover:bg-[#E8DEFF] transition-colors duration-300 
      font-bold primary-color cursor-pointer
      ${className}`}
    >
      {text}
    </button>
  );
}

{
  /* <button className="bg-white border-2 border-[#E8DEFF] py-2 px-4 rounded-lg hover:bg-[#E8DEFF] transition-colors duration-300 font-semibold primary-color cursor-pointer w-50 h-15 ">
  Explore Skills
</button>; */
}
