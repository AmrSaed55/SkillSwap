'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChartColumn,
  faCode,
  faGlobe,
  faHeadSideVirus,
  faPalette,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Navbar from '../components/Navbar';
// import RatingSystem from '../components/RatingSystem';
import PrimaryButton from '../components/buttons/primaryButton';
import Footer from '../components/Footer';
import SkillCard from '../components/cards/SkilllCard';
import SecondaryButton from '../components/buttons/secondaryButton';
export default function Skills() {
  return (
    <main id="skills">
      {/* start Header & Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {/* end Header & Navbar */}

      {/* start skillsHeader section */}
      <section id="skillsHeader" className="py-20 px-6">
        <div className="container m-auto">
          <div className=" flex flex-wrap md:flex-nowrap left-box  justify-between">
            <div className="flex flex-col items-start justify-center gap-8 basis-full lg:basis-1/2  ">
              <h1 className="text-5xl md:text-6xl font-extrabold primary-text">
                Master a new craft,
                <br />
                <span className="gradient-color italic">together.</span>
              </h1>
              <h6 className="font-medium text-lg md:w-[90%] lg:w-[70%] text-[#625882]">
                Discover over 1,200 skills being exchanged across our community.
                From generative art to quantum computing, find your next mentor
                or apprentice.
              </h6>

              <div className="flex flex-col md:flex-row gap-4 w-full primary-text font-medium text-lg">
                <div className="flex grow relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-stone-900  transition-colors duration-300 ">
                    <FontAwesomeIcon icon={faSistrix} />
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-none outline-2  outline-[#E8DEFF] group-focus-within:outline-4  transition-all"
                    placeholder="Search skills, categories, or keywords..."
                    type="text"
                  />
                </div>

                <PrimaryButton
                  text="Explore Directory"
                  className="bg-gradient-color w-full h-15 md:w-52  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end skillsHeader section */}
      {/* start Browse by Category section */}
      <section id="browseByCategory" className="p-6 bg-[#f5f3fa]">
        <div className="container m-auto">
          {/* Header */}
          <h1 className="capitalize text-3xl md:text-4xl font-extrabold primary-text">
            Browse by Category
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="paragraph-color font-medium md:text-lg py-4 md:w-[70%]">
              Curated collections for every ambition
            </p>

            <div className="flex items-center gap-2 text-indigo-600 font-semibold cursor-pointer group">
              <Link href="/">View All</Link>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 items-stretch">
            {/* Card 1 */}
            <div className="group col-span-1 lg:col-span-2 cursor-pointer">
              <div
                className="relative rounded-3xl overflow-hidden h-65 md:h-75 lg:h-80
              bg-linear-to-br from-[#9F97B9] via-[#A59EBE] to-[#CFC9E6]
              shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src="/skillCategory1.png"
                  alt="Technology"
                  fill
                  className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="bg-green-700 text-xs px-3 py-1 rounded-full w-fit mb-3">
                    450+ Skills
                  </span>

                  <h2 className="text-3xl primary-text font-bold">
                    Technology
                  </h2>

                  <p className="text-sm opacity-90 mt-2 primary-text w-4/5">
                    Development, AI, Cybersecurity, and Cloud Computing.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group col-span-1 cursor-pointer">
              <div
                className="relative rounded-3xl overflow-hidden h-65 md:h-75 lg:h-80
              bg-linear-to-br from-[#e6ded8] to-[#f2ebe5]
              shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src="/skillCategory2.png"
                  alt="Creative Arts"
                  fill
                  className="object-center opacity-20 group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#1e1b4b]">
                  <h2 className="text-2xl font-bold primary-text">
                    Creative Arts
                  </h2>

                  <p className="text-sm mt-2 primary-text">
                    Painting, UI/UX, Photography.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group col-span-1 cursor-pointer">
              <div
                className="relative rounded-3xl overflow-hidden h-65 md:h-75 lg:h-80
              bg-linear-to-br from-[#a9c7c9] to-[#cfe5e7]
              shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src="/skillCategory3.png"
                  alt="Languages"
                  fill
                  className="object-center opacity-20 group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#1e1b4b]">
                  <h2 className="text-2xl font-bold primary-text">Languages</h2>

                  <p className="text-sm mt-2 primary-text">
                    24+ global dialects to master.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end Trending Skills section */}
      {/* start All Skills section */}
      <section id="allSkills" className="py-14 px-6">
        <div className="container m-auto">
          <div className="flex items-center flex-wrap justify-between gap-5 md:gap-0">
            <div className="flex items-center md:justify-center flex-wrap gap-2">
              <span className="px-5 py-2 text-sm bg-[#645dfc] text-white font-medium cursor-pointer hover:bg-[#645dfc] rounded-full  active:bg-[#645dfc]">
                All Skills
              </span>
              <span className="px-5 py-2 text-sm bg-[#e8deff] font-medium cursor-pointer hover:bg-[#d9d4ff] rounded-full active:bg-[#645dfc] active:text-white">
                Trending
              </span>
              <span className="px-5 py-2 text-sm bg-[#e8deff] font-medium cursor-pointer hover:bg-[#d9d4ff] rounded-full active:bg-[#645dfc] active:text-white">
                New Arrivals
              </span>
              <span className="px-5 py-2 text-sm bg-[#e8deff] font-medium cursor-pointer hover:bg-[#d9d4ff] rounded-full active:bg-[#645dfc] active:text-white">
                Local
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="paragraph-color">Sort by: </span>
              <select
                className="bg-transparent border-none outline-0 font-bold primary-text cursor-pointer"
                title="mostPopular"
                name="mostPopular"
                id="mostPopular"
              >
                <option value="mostPopular">Most Popular</option>
                <option value="RecentlyAdded">Recently Added</option>
                <option value="HighestRated">Highest Rated</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Skill Card */}
            <SkillCard
              title={'React Development'}
              description={
                'Modern frontend development including Hooks, Context, and Next.js frameworks.'
              }
              logo={faCode}
              mentors={12}
              category={'Development'}
              level={'advanced'}
              numOfTeaching={84}
              numOfLearning={210}
            />
            {/* Skill Card */}
            <SkillCard
              title={'Conversational Arabic'}
              description={
                'Master Levantine and Modern Standard Arabic through natural daily dialogue.'
              }
              logo={faGlobe}
              logoColors="bg-[#8151001A] text-[#815100] "
              mentors={45}
              category={'Language'}
              level={'All Levels'}
              numOfTeaching={32}
              numOfLearning={156}
            />
            {/* Skill Card */}
            <SkillCard
              title={'Digital Illustration'}
              description={
                'From sketching to final rendering using Procreate and Adobe Fresco.'
              }
              logo={faPalette}
              logoColors="bg-[#0069471A] text-[#006947] "
              mentors={28}
              category={'Arts'}
              level={'Creative'}
              numOfTeaching={56}
              numOfLearning={188}
            />
            {/* Skill Card */}
            <SkillCard
              title={'Personal Finance'}
              description={
                'Understanding markets, budgeting for the future, and fundamental investing strategies.'
              }
              logo={faChartColumn}
              logoColors="bg-[#3d2fd61A] text-[#3d2fd6] "
              mentors={8}
              category={'Business'}
              level={'Practical'}
              numOfTeaching={15}
              numOfLearning={312}
            />
            {/* Skill Card */}
            <SkillCard
              title={'Pastry Arts'}
              description={
                'The chemistry of baking, sourdough starters, and advanced chocolate tempering.'
              }
              logo={faUtensils}
              logoColors="bg-[#b413401A] text-[#b41340] "
              mentors={33}
              category={'Lifestyle'}
              level={'Hands-on'}
              numOfTeaching={41}
              numOfLearning={122}
            />
            {/* Skill Card */}
            <SkillCard
              title={'Cognitive Psychology'}
              description={
                'Exploring how we think, remember, and learn. Practical applications for productivity.'
              }
              logo={faHeadSideVirus}
              logoColors="bg-[#a296c41a] text-[#4a3fe2] "
              mentors={19}
              category={'Academic'}
              level={'Research'}
              numOfTeaching={27}
              numOfLearning={94}
            />
          </div>
          <div className="text-center mt-12">
            <SecondaryButton text="Explore Skills"/>
          </div>
        </div>
      </section>
      {/* end All Skills section */}

      {/* start Footer */}
      <Footer />
      {/* end Footer */}
    </main>
  );
}
