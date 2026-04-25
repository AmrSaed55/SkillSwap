import Image from 'next/image';
import PrimaryButton from './buttons/primaryButton';
import SecondaryButton from './buttons/secondaryButton';

type SidebarProps = {
  img: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  numOfSwaps: number;
  numOfSkills: number;
  bio: string;
};
export default function Sidebar({
  img,
  name,
  title,
  rating,
  reviews,
  numOfSwaps,
  numOfSkills,
  bio,
}: SidebarProps) {
  return (
    <aside className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-3 h-fit mt-10 p-6 flex flex-col items-start justify-start gap-8">
      <div className="container m-auto flex flex-col items-start justify-start gap-8 bg-white shadow-lg rounded-2xl p-8">
        <div className="user-info flex items-center justify-center gap-7 ">
          <Image
            src={img || '/user2.png'}
            alt="user"
            width={120}
            height={100}
            className="rounded-2xl"
          ></Image>
          <div className="flex flex-col justify-center">
            <h4 className="capitalize text-2xl font-extrabold primary-text">
              {name || 'Julian Vance'}
            </h4>
            <p className="capitalize paragraph-color font-medium text-sm pt-1">
              {title || 'Digital Product Strategist'}
            </p>
            <span className="text-sm w-fit primary-text  purple-bg px-2 py-1 rounded-full mt-5">
              <span className="text-[16px] text-[#FFC107]">&#9733;</span>
              <span className="text-[14px] font-bold px-1">
                {rating || 4.9}
              </span>
              ({reviews || 128} Reviews)
            </span>
          </div>
        </div>
        <p className="paragraph-color font-medium wrap-break-word">
          {bio ||
            ' Passionate about bridging the gap between design and development. I’ve spent 10 years building scalable systems and love teaching complex concepts through simple metaphors.'}
        </p>
        <div className="flex flex-col w-full">
          <PrimaryButton
            text="Send Message"
            className="w-full h-15 bg-[#645dfc] hover:scale-none hover:bg-[#463cd6]"
          />
          <SecondaryButton text="View Portfolio" className="mt-4 w-full h-15" />
        </div>
      </div>
      <div className="container m-auto flex flex-col items-start justify-start gap-4 section-purple-bg shadow-lg rounded-2xl p-8">
        <h4 className="capitalize text-lg font-bold primary-text">
          Quick Stats
        </h4>
        <div className="flex w-full items-center justify-between">
          <div className="swaps flex flex-col w-[48%] h-20 p-5 rounded-2xl items-start justify-center  text-sm font-medium paragraph-color bg-white">
            <span className="text-2xl primary-color font-bold">
              {numOfSwaps || 42}
            </span>
            <span className=" paragraph-color font-medium uppercase">
              Swaps
            </span>
          </div>
          <div className="swaps flex flex-col w-[48%] h-20 p-5 rounded-2xl items-start justify-center  text-sm font-medium paragraph-color bg-white">
            <span className="text-2xl green-text font-bold">
              {numOfSkills || 15}
            </span>
            <span className="paragraph-color font-medium uppercase">
              Skills
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
