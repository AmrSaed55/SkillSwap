type PrimaryButtonProps = {
  text: string;
  className?: string;
};
export default function PrimaryButton({
  text,
  className = 'bg-gradient-color w-52 h-15',
}: PrimaryButtonProps) {
  return (
    <button
      className={`text-lg font-bold text-white py-2 px-4 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

{
  /* <button className="bg-gradient-to-r font-semibold from-[#4F46E5] to-[#9795ff] text-white py-2 px-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 w-50 h-15">
  Start Swapping
</button>; */
}
