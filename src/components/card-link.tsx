import Image from 'next/image';

interface CardLinkProps {
  animated?: boolean;
  href: string;
  image?: string;
  alt?: string;
  title: string;
  htmlText?: any[];
}

export const CardLink = ({animated, href, image, alt, title, htmlText}: CardLinkProps) => {
  return (
    <a className={"flex items-start flex-col mx-4 flex-1 rounded-lg p-4" + (animated ? " md:hover:animate-pulse md:hover:bg-button-hover" : "")} href={href}>
      {
        image && alt &&
          <div className="flex justify-center w-full mb-4">
              <Image width={64} height={64} src={image} alt={alt}/>
          </div>
      }
      <div className="flex justify-center text-center w-full font-bold text-2xl my-2">{title}</div>
      {htmlText}
    </a>
  )
}

export default CardLink;