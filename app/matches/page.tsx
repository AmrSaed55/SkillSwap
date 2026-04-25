'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import MatchesCard from '../components/cards/MatchesCard';
export default function Skills() {
  return (
    <main id="skills">
      {/* start Header & Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {/* end Header & Navbar */}

      {/* start Matches Header section */}
      <section id="matchesHeader" className="pt-20 px-6">
        <div className="container m-auto flex flex-wrap items-center justify-between">
          <div className=" flex flex-wrap md:flex-nowrap left-box gap-10">
            <div className="flex flex-col items-start justify-center gap-8 basis-full">
              <h1 className="text-5xl md:text-6xl font-extrabold primary-text">
                Perfect <span className="gradient-color italic">Matches.</span>
              </h1>
              <h6 className="font-medium text-lg wrap-break-word w-70 md:w-[90%] lg:w-[70%] text-[#625882]">
                We&apos;ve curated these potential partners based on your
                expertise in{' '}
                <span className="font-bold primary-color">UI Design</span> and
                your interest in{' '}
                <span className="font-bold secondary-color">
                  Public Speaking
                </span>
                .
              </h6>

              <div className="flex flex-col md:flex-row gap-4 w-full primary-text font-medium text-lg">
                <div className="flex grow relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-stone-900  transition-colors duration-300 ">
                    <FontAwesomeIcon icon={faSistrix} />
                  </span>
                  <input
                    className="w-full md:w-165 pl-12 pr-4 py-2 rounded-xl border-none outline-2  outline-[#E8DEFF] group-focus-within:outline-4  transition-all"
                    placeholder="Search matches..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 right-box basis-full lg:basis-1/3 mt-10 lg:mt-0">
            <h5 className="font-bold text-xl primary-text">Filters</h5>
            <span className="paragraph-color uppercase font-bold">
              category
            </span>
            <div className="flex flex-wrap items-center gap-5">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary bg-surface-container-lowest border-outline-variant/30"
                  type="checkbox"
                  defaultChecked
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Design &amp; Arts
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary bg-surface-container-lowest border-outline-variant/30"
                  type="checkbox"
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Technology
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary bg-surface-container-lowest border-outline-variant/30"
                  type="checkbox"
                  defaultChecked
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Language
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary bg-surface-container-lowest border-outline-variant/30"
                  type="checkbox"
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Business
                </span>
              </label>
            </div>
            <span className="paragraph-color uppercase font-bold">
              skill level
            </span>
            <div className="flex items-center gap-5">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary purple-bg border-outline-variant/30"
                  type="checkbox"
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Beginner
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary purple-bg border-outline-variant/30"
                  type="checkbox"
                  defaultChecked
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Intermediate
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="rounded text-primary focus:ring-primary purple-bg border-outline-variant/30"
                  type="checkbox"
                />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  Expert
                </span>
              </label>
            </div>
            <span className="paragraph-color uppercase font-bold">
              match accuracy
            </span>
            <div className="px-1">
              <input
                title="matchAccuracy"
                id="matchAccuracy"
                className="w-full h-1.5 purple-bg rounded-lg appearance-none cursor-pointer accent-indigo-500"
                max="100"
                min="50"
                type="range"
                defaultValue="85"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-outline">
                <span className="paragraph-color">50%</span>
                <span className="paragraph-color">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end Matches Header section */}

      {/* start Matches section */}
      <section id="matches" className="pt-6 pb-14 px-6">
        <div className="container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Matches Card */}
            <MatchesCard
              img="/learner1.png"
              name="Marcus Chen"
              rating={0}
              numOfSwaps={0}
              matchedPercentage={0}
              teaches={[]}
              wantsToLearn={[]}
              bio="I'm an ex-TEDx speaker looking to polish my design skills for an upcoming project. Let's exchange!"
            />
            {/* Matches Card */}
            <MatchesCard
              img="/learner2.png"
              name="Sarah Jenkins"
              rating={4.8}
              numOfSwaps={18}
              matchedPercentage={92}
              teaches={['Presentation Skills', 'voice coaching']}
              wantsToLearn={['user experience', 'branding']}
              bio="Communication is my passion. I can help you find your voice if you can help me find my brand's visual identity."
            />
            {/* Matches Card */}
            <MatchesCard
              img="/learner3.png"
              name="David Thorne"
              rating={5.0}
              numOfSwaps={42}
              matchedPercentage={85}
              teaches={['Pitch Deck Strategy', 'Executive Presence']}
              wantsToLearn={['Advanced UI Design', 'Design Systems']}
              bio="Seasoned trainer and pitch deck expert. Looking to understand the nuances of modern UI trends."
            />
            {/* Matches Card */}
            <MatchesCard
              img="/learner2.png"
              name="Sarah Jenkins"
              rating={4.8}
              numOfSwaps={18}
              matchedPercentage={92}
              teaches={['Presentation Skills', 'voice coaching']}
              wantsToLearn={['user experience', 'branding']}
              bio="Communication is my passion. I can help you find your voice if you can help me find my brand's visual identity."
            />
            {/* Matches Card */}
            <MatchesCard
              img="/learner3.png"
              name="David Thorne"
              rating={5.0}
              numOfSwaps={42}
              matchedPercentage={85}
              teaches={['Pitch Deck Strategy', 'Executive Presence']}
              wantsToLearn={['Advanced UI Design', 'Design Systems']}
              bio="Seasoned trainer and pitch deck expert. Looking to understand the nuances of modern UI trends."
            />
            {/* Matches Card */}
            <MatchesCard
              img={''}
              name={''}
              rating={0}
              numOfSwaps={0}
              matchedPercentage={0}
              teaches={[]}
              wantsToLearn={[]}
              bio={''}
            />
          </div>
        </div>
      </section>
      {/* end Matches section */}

      {/* start Footer */}
      <Footer />
      {/* end Footer */}
    </main>
  );
}
