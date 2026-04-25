import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../buttons/primaryButton';
type MatchesCardProps = {
img: string;
name: string;
rating: number;
numOfSwaps: number;
matchedPercentage: number;
teaches: string[];
wantsToLearn: string[];
bio: string;
};
export default function MatchesCard({
img,
name,
rating,
numOfSwaps,
matchedPercentage,
teaches,
wantsToLearn,
bio
}: MatchesCardProps) {
  return (
    <div className="matches-card col-span-1 p-6 rounded-2xl overflow-hidden shadow-md  hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f680]/10 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={img || '/Learner1.png'}
                      alt="skill1"
                      width={60}
                      height={60}
                      className="rounded-3xl relative"
                    ></Image>
                    <span className="material-symbols-outlined text-xs bottom-4 left-10 relative">
                      <FontAwesomeIcon
                        icon={faCertificate}
                        className="absolute top-50% left-80% text-xl text-green-700"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="absolute top-1 left-1.5 text-white"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="capitalize text-lg font-bold text-primary">
                      {name || 'Alex Johnson'}
                    </h3>
                    <span className="text-[12px] paragraph-color font-medium">
                      <span className="text-[18px] text-[#FFC107]">
                        &#9733;
                      </span>
                      <span className="text-[#FFC107] text-[14px] font-bold px-1">
                        {rating || 4.9}
                      </span>
                      ({numOfSwaps || 24} swaps)
                    </span>
                  </div>
                </div>
                <span className="bg-[#645dfc]/10 primary-color px-4 py-2 rounded-2xl font-medium">
                  {matchedPercentage || 98}% Match
                </span>
              </div>
              <div className="py-3 flex flex-col gap-2">
                <label className="uppercase paragraph-color text-[10px] font-medium mt-4">
                  Teaches
                </label>
                <div className="flex items-center gap-2">
                  <span className="uppercase text-[12px] font-semibold paragraph-color lim-bg px-2 py-0.5 rounded-full">
                    {teaches[0] || 'Public Speaking'}
                  </span>
                  <span className="uppercase text-[12px] font-semibold paragraph-color lim-bg px-2 py-0.5 rounded-full">
                    {teaches[1] || 'Storytelling'}
                  </span>
                </div>
                <label className="uppercase paragraph-color text-[10px] font-medium mt-4">
                  wants to learn
                </label>
                <div className="flex items-center gap-2">
                  <span className="uppercase text-[12px] font-semibold primary-color purple-bg px-2 py-0.5 rounded-full">
                    { wantsToLearn[0] || 'ui design'}
                  </span>
                  <span className="uppercase text-[12px] font-semibold primary-color purple-bg px-2 py-0.5 rounded-full">
                    { wantsToLearn[1] || 'figama prototyping'}
                  </span>
                </div>
                <q className="mt-4 text-sm paragraph-color font-medium italic">
                  {bio || "I'm an ex-TEDx speaker looking to polish my design skills for an upcoming project. Let's exchange!\""}
                </q>
              </div>
              <div className="flex items-center justify-end mt-4">
                <PrimaryButton
                  text="Send Swap Request &#10148;"
                  className="bg-blue-700 w-full h-15 hover:scale-none hover:bg-[#645dfc]"
                />
              </div>
            </div>
  );
}

