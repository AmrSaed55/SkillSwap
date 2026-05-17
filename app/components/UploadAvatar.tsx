'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function UploadAvatar() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);

      const file = e.target.files?.[0];

      if (!file) return;

      // المستخدم الحالي
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert('Not logged in');
        return;
      }

      // اسم الصورة
      const fileExt = file.name.split('.').pop();

      const fileName = `${user.id}.${fileExt}`;

      // رفع الصورة
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, {
          upsert: true,
        });

      if (uploadError) {
        console.log(uploadError);
        alert(uploadError.message);
        return;
      }

      // رابط الصورة
      const {
        data: { publicUrl },
      } = supabase.storage.from('avatars').getPublicUrl(fileName);

      // تحديث database
      const { error: dbError } = await supabase
        .from('profiles')
        .update({
          avatar_url: publicUrl,
        })
        .eq('id', user.id);

      if (dbError) {
        console.log(dbError);
        alert(dbError.message);
        return;
      }

      alert('Image uploaded successfully');

      location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="changeImage">
      {/* <input
        title="Change Image"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {loading && <p>Uploading...</p>} */}

      <div className="flex flex-col items-center gap-3">
        <label
          className="
      inline-flex
      items-center
      justify-center
      px-2
      py-2
      rounded-xl
      bg-[#645DFC]
      text-white
      text-sm
      font-medium
      cursor-pointer
      hover:opacity-90
      transition
      absolute
      bottom-[-8px]
      left-24
    "
        >
          <FontAwesomeIcon icon={faCamera} />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            title="Upload avatar"
            aria-label="Upload avatar"
            onChange={handleUpload}
          />
        </label>
      </div>
    </div>
  );
}
