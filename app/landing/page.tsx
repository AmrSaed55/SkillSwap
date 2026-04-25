'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBrain } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import RatingSystem from '../components/RatingSystem';
import PrimaryButton from '../components/buttons/primaryButton';
import SecondaryButton from '../components/buttons/secondaryButton';
import Footer from '../components/Footer';
export default function Landing() {
  return (
    <main id="landing">
      {/* start Header & Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {/* end Header & Navbar */}
      {/* start landingHeader section */}
      <section id="landingHeader" className="py-20 md:py-30 px-6">
        <div className="container m-auto">
          <div className=" flex flex-wrap md:flex-nowrap left-box  justify-between">
            <div className="flex flex-col items-start justify-center gap-8 basis-full lg:basis-1/2  ">
              <span className="landing-lable uppercase">
                The Future of Learning
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold primary-text">
                Learn a Skill,
                <br />
                <span className="gradient-color">Teach a Skill.</span>
              </h1>
              <h6 className="font-medium text-lg md:w-[90%] lg:w-[70%] text-[#625882]">
                Join a curated ecosystem of experts and enthusiasts. Exchange
                your knowledge for new abilities in a high-fidelity community
                built on mutual growth.
              </h6>

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <PrimaryButton
                  text="Start Swapping"
                  className="bg-gradient-color w-full h-15 md:w-45 lg:w-52 lg:h-15 "
                />
                <SecondaryButton
                  text="Explore Skills"
                  className="w-full h-15 md:w-45 lg:w-52 lg:h-15"
                />
              </div>
            </div>
            <div className="flex items-center justify-center relative mt-10 md:mt-0 ">
              <Image
                src="/startSectionImage.png"
                alt="Landing Hero"
                width={500}
                height={500}
                className="h-auto object-contain rotate-4 rounded-4xl"
              />
              <div className="small-box bg-[#E8DEFF]  rounded-2xl p-4 absolute bottom-[-40] left-[-20] lg:left-[-40] md:left-[-20] md:bottom-[100] lg:bottom-[-40] lg:left-[-40] w-60 h-40 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="think-icon text-2xl lim-bg primary-text py-1 px-2 rounded-full">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <h3 className="primary-text font-bold capitalize">
                    new match found!
                  </h3>
                </div>
                <p className="paragraph-color text-sm ms-2">
                  Sarah wants to teach you{' '}
                  <span className="primary-color font-semibold ">
                    Graphic Design
                  </span>{' '}
                  in exchange for{' '}
                  <span className="secondary-color font-semibold">Coding.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end landingHeader section */}

      {/* start How It Works section */}
      <section id="howItWorks" className="py-30 px-6 section-purple-bg">
        <div className="container m-auto">
          <h1 className="capitalize text-3xl md:text-4xl font-extrabold primary-text">
            how it works
          </h1>
          <p className="paragraph-color font-medium w-80 md:w-fit md:text-lg py-4">
            A seamless exchange process designed for high-impact learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
            <div className="lg-box col-span-1 py-8 bg-white rounded-3xl px-6 lg:px-12 flex flex-col items-start justify-center gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold light-purple-color mb-2">
                01
              </h1>
              <h3 className="text-xl lg:text-2xl font-semibold primary-text ">
                Register
              </h3>
              <p className="paragraph-color text-sm leading-6">
                Create your premium profile and define your learning goals.
              </p>
            </div>
            <div className="sm-box col-span-1 md:mt-10 py-8 bg-white rounded-3xl px-6 lg:px-12 flex flex-col items-start justify-center gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold light-purple-color mb-2">
                02
              </h1>
              <h3 className="text-xl lg:text-2xl font-semibold primary-text ">
                Add Skills
              </h3>
              <p className="paragraph-color text-sm leading-6">
                List what you can teach and what you yearn to master.
              </p>
            </div>
            <div className="lg-box col-span-1 py-8 bg-white rounded-3xl px-6 lg:px-12 flex flex-col items-start justify-center gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold light-purple-color mb-2">
                03
              </h1>
              <h3 className="text-xl lg:text-2xl font-bold primary-text ">
                Match
              </h3>
              <p className="paragraph-color text-sm leading-6">
                Our ecosystem finds the perfect skill-parity partners for you.
              </p>
            </div>
            <div className="sm-box col-span-1 md:mt-10 py-8 bg-white rounded-3xl px-6 lg:px-12 flex flex-col items-start justify-center gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold light-purple-color mb-2">
                04
              </h1>
              <h3 className="text-xl lg:text-2xl font-semibold primary-text ">
                Swap
              </h3>
              <p className="paragraph-color text-sm leading-6">
                Connect via live sessions and start your mutual growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end How It Works section */}
      {/* start Trending Skills section */}
      <section id="trendingSkills" className="py-30 px-6 ">
        <div className="container m-auto">
          <h1 className="capitalize text-3xl md:text-4xl font-extrabold primary-text">
            trending skills
          </h1>
          <div className="flex md:items-center justify-between flex-col md:flex-row ">
            <p className="paragraph-color font-medium md:text-lg py-4 md:w-[70%]">
              Discover the most sought-after expertise in the SkillSwap
              community right now.
            </p>
            <div className="flex items-center md:justify-center primary-color text-lg font-semibold gap-2 cursor-pointer group md:mt-10 lg:mt-0">
              <Link href="/skills">View all skills</Link>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="right-icon transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between mt-6">
            <div className="skill col-span-1 group">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/skill1.png"
                  alt="Graphic Design"
                  width={480}
                  height={400}
                  className="w-full h-100 lg:h-130 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                {/* Gradient Filter */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1e1b4b]/50 via-[#1e1b4b]/30 to-transparent"></div>
                {/* Text */}
                <h2 className="absolute bottom-6 left-6 text-white text-2xl font-bold md:w-40 lg:w-fit">
                  Graphic Design
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <span className="px-3 py-1 lim-bg rounded-full text-sm">
                  Branding
                </span>
                <span className="px-3 py-1 lim-bg rounded-full text-sm">
                  UI/UX
                </span>
              </div>
            </div>
            <div className="skill col-span-1 group md:mt-16">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/skill2.png"
                  alt="Coding"
                  width={480}
                  height={400}
                  className="w-full h-100 lg:h-130 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                {/* Gradient Filter */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1e1b4b]/50 via-[#1e1b4b]/30 to-transparent"></div>
                {/* Text */}
                <h2 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                  Coding
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <span className="px-3 py-1 lim-bg rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 lim-bg rounded-full text-sm">
                  Python
                </span>
              </div>
            </div>
            <div className="skill col-span-1 group">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/skill3.png"
                  alt="Languages"
                  width={480}
                  height={400}
                  className="w-full h-100 lg:h-130 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                {/* Gradient Filter */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1e1b4b]/50 via-[#1e1b4b]/30 to-transparent"></div>
                {/* Text */}
                <h2 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                  Languages
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <span className="px-3 py-1 lim-bg rounded-full text-sm">
                  Languages
                </span>
                <span className="px-3 py-1 lim-bg rounded-full text-sm">
                  French
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end Trending Skills section */}
      {/* start Success Stories section */}
      <section id="successStories" className="py-30 px-6 section-purple-bg">
        <div className="container m-auto text-center">
          <h1 className="capitalize text-3xl md:text-4xl font-extrabold primary-text">
            Success Stories
          </h1>
          <p className="md:text-lg font-medium paragraph-color lg:w-2/5 md:px-8 lg:px-0 m-auto py-4 ">
            Real people, real growth. See how SkillSwap is transforming career
            paths through community exchange.
          </p>
          <div className="comments-container flex flex-col md:flex-row justify-center gap-12 lg:h-60 md:h-110  mt-12">
            <div className="card bg-white md:w-150 h-fit lg:h-52 flex flex-col md:flex-row gap-8 md:gap-0 items-center p-7 rounded-3xl self-start">
              <Image
                src={'/user1.png'}
                alt="user image"
                width={130}
                height={100}
                className="rounded-2xl"
              />
              <div className="user-info flex flex-col md:ml-7 text-start gap-3">
                {/* rating system */}
                <RatingSystem readOnly={true} value={5} size={12} />
                <p className="italic paragraph-color font-medium lg:pr-10">
                  &quot;I traded my copywriting skills for UI Design lessons. In
                  3 months, I landed my first freelance design gig. This
                  community is gold.&quot;
                </p>
                <span className="font-bold primary-color">
                  — Elena R., Copywriter
                </span>
              </div>
            </div>
            <div className="card bg-white md:w-150 h-fit lg:h-52 flex flex-col md:flex-row gap-8 md:gap-0 items-center p-7 rounded-3xl self-end">
              <Image
                src={'/user2.png'}
                alt="user image"
                width={130}
                height={100}
                className="rounded-2xl"
              />
              <div className="user-info flex flex-col md:ml-7 text-start gap-3">
                {/* rating system */}
                <RatingSystem readOnly={true} value={5} size={12} />
                <p className="italic paragraph-color font-medium lg:pr-10">
                  &quot;Matched with a developer from Berlin who taught me React
                  while I helped him with his English. A truly global
                  exchange.&quot;
                </p>
                <span className="font-bold primary-color">
                  — Marco V., Marketing Lead
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end Success Stories section */}
      {/* start Get Early Access section */}
      <section id="getEarlyAccess" className="py-30 px-6">
        <div className="container m-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold primary-text capitalize">
            Ready to join the exchange?
          </h1>
          <div className="inputBox mx-auto my-8 flex flex-col md:flex-row items-center justify-between bg-white w-full h-fit md:w-150 md:h-18 rounded-2xl shadow">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 h-full px-6 py-4 border-0 outline-0 primary-text font-medium placeholder:text-gray-500"
            />
            <PrimaryButton
              text="Get Early Access"
              className="w-78 md:w-50 md:mr-2 h-14 mb-2 md:mb-0 hover:scale-none bg-[#4a3fe2] hover:bg-[#463cd6] transition-colors duration-300"
            />
          </div>
          <p className="paragraph-color text-sm">
            Join 10,000+ members already swapping skills.
          </p>
        </div>
      </section>
      {/* end Get Early Access section */}
      {/* start Footer */}
      <Footer />
      {/* end Footer */}
    </main>
  );
}
