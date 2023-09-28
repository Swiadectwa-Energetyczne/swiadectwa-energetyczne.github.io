import Image from 'next/image';

interface ImageWithTextProps {
  image: string;
  alt: string;
  text?: string
  htmlText?: any[];
  animation?: boolean;
}

export const ImageWithText = ({image, alt, text, htmlText, animation}: ImageWithTextProps) => {
  return (
    <div className={(animation ? "md:hover:animate-pulse ": "") + "flex flex-row items-center font-medium text-lg my-2"}>
      <Image className="my-2 mx-4" width={36} height={36} src={image} alt={alt}/>{text ? text : htmlText}</div>
  )
}

export default ImageWithText;