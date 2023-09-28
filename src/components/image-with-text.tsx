import Image from 'next/image';

interface ImageWithTextProps {
  image: string;
  alt: string;
  text?: string
  htmlText?: any[];
}

export const ImageWithText = ({image, alt, text, htmlText}: ImageWithTextProps) => {
  return (
    <span className="flex flex-row items-center font-medium text-lg"><Image className="my-2 mx-4" width={36} height={36} src={image} alt={alt}/>{text ? text : htmlText}</span>
  )
}

export default ImageWithText;