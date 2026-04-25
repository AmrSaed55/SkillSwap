import Image from 'next/image';
import {
  faCirclePlus,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type SkillCardProps = {
  title: string;
  description: string;
  logo: IconDefinition;
  mentors: number;
  category: string;
  level: string;
  numOfTeaching?: number;
  numOfLearning?: number;
  logoColors?: string;
};
export default function SkillCard({
  title,
  description,
  logo,
  mentors,
  category,
  level,
  numOfTeaching,
  numOfLearning,
  logoColors = 'bg-[#e8deff] primary-color',
}: SkillCardProps) {
  return (
    <div className="skill-card col-span-1 p-6 cursor-pointer rounded-2xl overflow-hidden shadow-md  hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center justify-between">
        <FontAwesomeIcon
          icon={logo}
          className={`p-4 ${logoColors} text-xl rounded-2xl`}
        />
        <div className="flex items-center justify-end">
          <Image
            src="/mentor1.png"
            alt="skill1"
            width={40}
            height={40}
            className="rounded-full border-2 border-white relative right-0"
          />
          <Image
            src="/mentor2.png"
            alt="skill1"
            width={40}
            height={40}
            className="rounded-full border-2 border-white relative right-5"
          />
          <span className="rounded-full bg-[#9795ff] flex items-center justify-center text-[12px] w-10 h-10 border-2 border-white absolute">
            +{mentors}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 border-b border-gray-200">
        <h2 className="capitalize text-xl font-bold primary-text">{title}</h2>
        <p className="text-sm paragraph-color">
          {description ||
            'Learn React from scratch, covering components, state management, and hooks.'}
        </p>
        <div className="flex items-center gap-2 pt-4 pb-6">
          <span className="uppercase text-[12px] font-medium paragraph-color lim-bg px-2 py-0.5 rounded-full">
            {category || 'development'}
          </span>
          <span className="uppercase text-[12px] font-medium paragraph-color purple-bg px-2 py-0.5 rounded-full">
            {level || 'advanced'}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between  pt-6">
        <div className="flex flex-col">
          <span className="paragraph-color text-[12px] font-medium">
            Community
          </span>
          <span className="primary-color font-medium">
            {numOfTeaching || 84} Teaching / {numOfLearning || 210} Learning
          </span>
        </div>
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="primary-text text-4xl"
        />
      </div>
    </div>
  );
}
