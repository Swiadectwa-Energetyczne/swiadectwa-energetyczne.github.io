import Link from 'next/link';
import ImageLink from '@/components/image-link';

export default function Footer() {
  return (
    <footer
      className="text-l font-medium bg-secondary-bg font text-font-secondary sm:h-32 flex flex-col sm:flex-row items-center justify-between xl:px-48 px-4">
      <Link className="my-2 sm:my-4" href="/privacy-policy">Polityka prywatności</Link>
      <div className="flex flex-row my-2">
        <ImageLink href="https://www.instagram.com/swiadectwa_eko/" image="instagram.svg" alt="Instagram"/>
        <ImageLink href="https://www.facebook.com/profile.php?id=61551862124461" image="facebook.svg" alt="Facebook"/>
      </div>
      <span className="xl:my-10 my-2">Copyrights © <a
        href="https://www.linkedin.com/in/dominik-rolewski-01bba9155/" target="_blank">Dominik Rolewski</a></span>
    </footer>
  )
}