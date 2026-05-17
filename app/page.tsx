// import Navbar from './components/Navbar';
// import LandingPage from './landing/page';

// export default function Home() {
//   return (
//     <>
//       <LandingPage />
//     </>
//   );
// }

// 'use client';

// import { supabase } from '@/lib/supabase';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [profiles, setProfiles] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       const { data, error } = await supabase.from('profiles').select('*');
//       if (error) console.error(error);
//       if (data) setProfiles(data);
//     };
//     fetchProfiles();
//   }, []);
//   // console.log(profiles)
//   return (
//     <div dir="rtl" className="p-8">
//       <h1 className="text-2xl font-bold">مشروع SkillSwap</h1>
//       <p>عدد المستخدمين: {profiles.length}</p>
//       {/* <pre>{JSON.stringify(profiles, null, 2)}</pre> */}
//       <h1>username: {profiles[1]?.username}</h1>
//     </div>
//   );
// }

import { supabase } from '@/lib/supabase';
import Landing from './landing/page';

export default function Home() {
  // const { data, error } = await supabase.from('profiles').select('*');

  // if (error) console.error(error);
  // const profiles = data || [];
  // // console.log(data);
  // const listProfiles = profiles.map((profile) => {
  //   return (
  //     <div key={profile.id}>
  //       <h1>name: {profile.username}</h1>
  //       <h1>job Title: {profile.job_title}</h1>
  //       <h1>bio: {profile.bio}</h1>
  //     </div>
  //   );
  // });
  return (
    <div>
      {/* {listProfiles} */}
      {/* <h1 key={profiles[1]?.id}>name: {profiles[1]?.skills[1]}</h1> */}
      <Landing />
    </div>
  );
}
