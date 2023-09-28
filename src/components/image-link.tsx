import Image from 'next/image';
import Link from 'next/link';

interface ImageLinkProps {
  href: string;
  image: string;
  alt: string;
  text?: string;
}

export const ImageLink = ({href, image, alt, text}: ImageLinkProps) => {
  return (
    <Link href={href} target="_blank"><Image className="mx-2" width={32} height={32} src={image} alt={alt}/>{text}</Link>
  );
}

export default ImageLink;