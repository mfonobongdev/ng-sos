import ngSosLogo from '/public/assets/ng-sos-logo.jpeg'
// import Link from 'next/link'
import { Link } from 'react-scroll'
import Image from 'next/image'
import HeadLineComponent from '../components/primitives/headline'

export default function NavigationComponent() {
  return (
    <div className={'py-0.5 px-[8%] flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-md backdrop-blur'}>
      <div className='relative w-28 h-16'>
        <Image src={ngSosLogo} alt={'ng sos logo'} className={'object-contain object-center'} layout={'fill'} />
      </div>

      {/*nav items*/}
      <div className={'lg:flex flex-row space-x-10 hidden'}>
        <div className='cursor-pointer'>
          <Link className='cursor-pointer' to={'home'} spy={true} smooth={true} offset={-200}>
          <HeadLineComponent small>Home</HeadLineComponent>
        </Link>
        </div>
        <div className='cursor-pointer'>
          <Link className='cursor-pointer' to={'details'} spy={true} smooth={true} offset={-1}>
            <HeadLineComponent small>Details</HeadLineComponent>
          </Link>
        </div>
        <div className='cursor-pointer'>
          <Link className='cursor-pointer' to={'highlights'} spy={true} smooth={true} offset={-1}>
          <HeadLineComponent small>Highlights</HeadLineComponent>
        </Link>
        </div>
        <div className='cursor-pointer'>
          <Link className='cursor-pointer' to={'services'} spy={true} smooth={true} offset={-1}>
          <HeadLineComponent small>Services</HeadLineComponent>
        </Link>
        </div>
        <div className='cursor-pointer'>
          <Link className='cursor-pointer' to={'contact'} spy={true} smooth={true} offset={-1}>
          <HeadLineComponent small>Contact Us</HeadLineComponent>
        </Link>
        </div>
        <div className='cursor-pointer'>
          <Link className='cursor-pointer' to={'download'} spy={true} smooth={true} offset={-1}>
          <HeadLineComponent small>Download</HeadLineComponent>
        </Link>
        </div>
      </div>
    </div>
  )
}
