'use client'
import HeaderNavigation from '@/components/header-navigation';
import Image from 'next/image';
import {useState} from 'react';

export default function Header() {

  const [menu, setMenu] = useState<boolean>(false);

  const handleBurgerMenuClick = () => {
    setMenu(!menu);
  }

  return (
    <header className="flex flex-col text-l font-semibold xl:mx-48 xl:my-10 mx-4 my-6">
      <div className="flex flex-row justify-between">
        <a href="/"
           className="py-2 px-5 rounded-full justify-self-center font-bold text-3xl lg:hover:bg-button-hover">
          <Image src="logo.png" alt="test" width={256} height={32}/>
        </a>
        <div className="lg:flex items-center text-xl hidden">
          <HeaderNavigation href="/#price" text="Cennik"/>
          <HeaderNavigation href="/#why" text="ŚChE - Dlaczego?"/>
          <HeaderNavigation href="/#how" text="Jak zamówić?"/>
          <HeaderNavigation href="/about-me" text="O mnie" blank={true}/>
          <HeaderNavigation href="/#contact" text="Kontakt"/>
        </div>
        <div className="flex items-center space-x-5 text-xl lg:hidden">
          {!menu && <Image src="menu-burger-green.svg" width={32} height={32} alt="menu" onClick={handleBurgerMenuClick}/>}
          {menu && <Image src="cross-green.svg" width={32} height={32} alt="menu" onClick={handleBurgerMenuClick}/>}
        </div>
      </div>
      {menu &&
          <div className="flex flex-col text-xl lg:hidden">
              <HeaderNavigation href="/#price" text="Cennik"/>
              <HeaderNavigation href="/#why" text="ŚChE - Dlaczego?"/>
              <HeaderNavigation href="/#how" text="Jak zamówić?"/>
              <HeaderNavigation href="/about-me" text="O mnie" blank={true}/>
              <HeaderNavigation href="/#contact" text="Kontakt"/>
          </div>}
    </header>
  )
}