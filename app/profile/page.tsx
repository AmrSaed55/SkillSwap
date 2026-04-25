'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CommentsCard from '../components/cards/CommentsCard';
export default function Skills() {
  return (
    <main id="skills">
      {/* start Header & Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {/* end Header & Navbar */}
      <div className="grid grid-cols-12">
        {/* start sidebar */}
        <Sidebar
          img={''}
          name={''}
          title={''}
          rating={0}
          reviews={0}
          numOfSwaps={0}
          numOfSkills={0}
          bio={''}
        />
        {/* end sidebar */}

        {/* start User Skills section */}
        <section id="userSkills" className=" col-start-1 col-span-12 lg:col-span-7 mt-6 lg:mt-15 px-6">
          <div className="container m-auto">
            <div className=" flex flex-col flex-wrap md:flex-nowrap left-box gap-8">
              <div className="flex flex-col items-start justify-center basis-full">
                <h1 className="text-4xl font-extrabold py-2 primary-text">
                  My Skill Arsenal
                </h1>
                <h6 className="font-medium wrap-break-word text-[#625882]">
                  The tools I use to build and the ones I&apos;m mastering.
                </h6>
              </div>
              <div>
                <span className="uppercase font-semibold primary-color flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} /> I am Teaching
                </span>
                <div className="flex items-center flex-wrap gap-4">
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    User Experience Design{' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 lim-bg rounded-full uppercase">
                      Expert
                    </span>
                  </span>
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    React Architecture{' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 lim-bg rounded-full uppercase">
                      Expert
                    </span>
                  </span>
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    Brand Strategy{' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 purple-bg rounded-full uppercase">
                      Intermediate
                    </span>
                  </span>
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    Tailwind Mastery{' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 lim-bg rounded-full uppercase">
                      Expert
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <span className="uppercase font-semibold green-text flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faBookOpenReader} /> I am Learning
                </span>
                <div className="flex items-center flex-wrap gap-4">
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    3D Modeling (Blender){' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 purple-bg rounded-full uppercase">
                      beginner
                    </span>
                  </span>
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    Arabic Calligraphy{' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 purple-bg rounded-full uppercase">
                      Beginner
                    </span>
                  </span>
                  <span className="font-semibold primary-text bg-[#f5eeff] p-3 rounded-full hover:bg-[#f0e6ff] cursor-default">
                    Python for AI{' '}
                    <span className="text-[12px] primary-text ml-2 px-2 py-1 purple-bg rounded-full uppercase">
                      Intermediate
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* start Recent Feedback section */}
          <section id="recentFeedback" className="col-span-7 py-10">
            <div className="container m-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold py-2 primary-text">
                  Recent Feedback
                </h3>
                <Link
                  href="/feedback"
                  className="primary-color font-medium hover:underline"
                >
                  See All Reviews
                </Link>
              </div>
              <div className="cards-container flex flex-col items-center justify-center gap-6 pt-6 pb-20">
                {/* Card */}
                <CommentsCard
                  img={''}
                  name={''}
                  rating={0}
                  title={''}
                  comment={''}
                />
                {/* Card */}
                <CommentsCard
                  img={'/learner2.png'}
                  name={'Marina Lopez'}
                  rating={4}
                  title={'Product Lead'}
                  comment={
                    'A true professional. Julian helped our team refine our design system. His depth of knowledge in both design and code is rare to find. A pleasure to swap skills with.'
                  }
                />
              </div>
            </div>
          </section>
          {/* end Recent Feedback section */}
        </section>
        {/* end User Skills section */}
      </div>

      {/* start Footer */}
      <Footer />
      {/* end Footer */}
    </main>
  );
}
