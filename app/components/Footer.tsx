import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="purple-bg pt-20 pb-10 px-6">
      <div className="container m-auto">
        <div className="grid grid-rows-1 grid-cols-4 gap-5">
          <div className="col-span-4 md:col-span-2 flex flex-col gap-5">
            <h1 className="text-3xl capitalize gradient-color font-extrabold cursor-pointer">
              SkillSwap
            </h1>
            <p className="paragraph-color w-75 md:w-7/8 lg:w-3/8">
              The premium platform for mutual skill exchange. Build your
              network, master new crafts, and grow together.
            </p>
          </div>
          <div className="col-span-4 md:col-span-1 flex flex-col gap-5">
            <h5 className="text-lg">Explore</h5>
            <ul className="paragraph-color space-y-3">
              <li className="cursor-pointer hover:text-[#645dfc]">
                <Link href={'/'}>How it works</Link>
              </li>
              <li className="cursor-pointer hover:text-[#645dfc]">
                <Link href={'/'}>Popular Skills</Link>
              </li>
              <li className="cursor-pointer hover:text-[#645dfc]">
                <Link href={'/'}>Matches</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-1 flex flex-col gap-5">
            <h5 className="text-lg">Support</h5>
            <ul className="paragraph-color space-y-3">
              <li className="cursor-pointer hover:text-[#645dfc]">
                <Link href={'/'}>Help Center</Link>
              </li>
              <li className="cursor-pointer hover:text-[#645dfc]">
                <Link href={'/'}>Terms of Service</Link>
              </li>
              <li className="cursor-pointer hover:text-[#645dfc]">
                <Link href={'/'}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <p className="col-span-4 md:col-span-4 flex items-center justify-center  paragraph-color text-sm mt-10 ">
            &copy; 2023 SkillSwap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
