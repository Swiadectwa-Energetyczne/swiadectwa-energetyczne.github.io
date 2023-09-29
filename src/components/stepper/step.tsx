import Image from 'next/image';

interface StepProps {
  animation?: boolean;
  alt?: string | undefined;
  image?: string | undefined;
  text: string | undefined;
}

export const Step = ({animation, alt, image, text}: StepProps) => {
  return (
    <div
      className={(animation ? "md:hover:animate-pulse " : "") + "flex-1 flex-row break-normal self-center flex-wrap min-w-full lg:min-w-min"}>
      <div className="flex flex-row my-2">
        {image && alt && <Image className="mx-4" width={36} height={36} alt={alt} src={image}/>}
        <span
          className="text-lg font-medium">{text}</span>
      </div>
    </div>
  );
}

export default Step;