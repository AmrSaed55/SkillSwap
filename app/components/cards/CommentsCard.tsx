import Image from 'next/image';
import RatingSystem from '../RatingSystem';
type CommentsCardProps = {
  img: string;
  name: string;
  rating: number;
  title: string;
  comment: string;
};
export default function CommentsCard({
  img,
  name,
  rating,
  title,
  comment,
}: CommentsCardProps) {
  return (
    <div className="feedback-card flex flex-col items-start mt-4 p-8 w-full rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start w-full gap-6">
        <Image
          src={img || '/user3.png'}
          alt="user"
          width={60}
          height={60}
          className="rounded-2xl"
        />
        <div className="flex items-start justify-between w-full">
          <div className="user-info flex flex-col ">
            <h5 className="primary-text font-semibold capitalize">
              {name || 'Alex Rodriguez'}
            </h5>
            <span className="paragraph-color text-[12px] font-medium uppercase">
              {title || 'UX Student'}
            </span>
          </div>
          <RatingSystem value={rating || 5} readOnly size={15} />
        </div>
      </div>
      <q className="paragraph-color font-medium pl-21 pt-5 md:pt-0 italic ">
        {comment ||
          "Julian has an incredible way of making React architecture feel like playing with LEGO blocks. Our session on state management saved me weeks of headache. Can't recommend him enough!"}
      </q>
    </div>
  );
}
