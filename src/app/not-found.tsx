import Link from 'next/link';
import Image from 'next/image';

export const Custom404  = () => {
  return (
    <>
      <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
        <a href="/" className="py-2 px-5 rounded-full justify-self-center font-bold text-3xl lg:hover:bg-button-hover"><Image src="logo.png" alt="test" width={256} height={32}/></a>
        <h1 className='text-4xl font-semibold'>404 - Nic tu nie ma</h1>
        <div className='space-x-4'>
          <Link
            className='duration-300'
            href='/'
          >
            Strona główna
          </Link>
        </div>
      </div>
    </>
  );
}

export default Custom404;