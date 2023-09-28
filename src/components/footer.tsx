import Link from 'next/link';
import ImageLink from '@/components/image-link';

export default function Footer() {
  return (
    <footer
      className="text-l font-medium bg-secondary-bg font text-font-secondary h-12 sm:h-32 flex flex-row items-center justify-between xl:px-64 px-4">
      <Link href="/privacy-policy">Polityka prywatności</Link>
      <div className="flex flex-row ">
        <ImageLink href="https://instagram.com" image="instagram.svg" alt="Instagram"/>
        <ImageLink href="https://facebook.com" image="facebook.svg" alt="Facebook"/>
      </div>
      <span className="xl:my-10 my-6">Copyrights © <a
        href="https://www.linkedin.com/in/dominik-rolewski-01bba9155/" target="_blank">Dominik Rolewski</a></span>
    </footer>
  )
}