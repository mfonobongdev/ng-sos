import ngSosLogo from '/public/assets/ng-sos-logo.jpeg'
import Link from 'next/link'
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

          <Link  href={'/'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>Home</HeadLineComponent>
            </div>
        </Link>


          <Link className='cursor-pointer' href={'/security'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>Security</HeadLineComponent>
            </div>
          </Link>


          <Link className='cursor-pointer' href={'/medical'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>Medical</HeadLineComponent>
            </div>
        </Link>


          <Link className='cursor-pointer' href={'/road'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>Road-Side Assistance</HeadLineComponent>
            </div>
        </Link>

        <Link className='cursor-pointer' href={'/control'}>
          <div className='cursor-pointer'>
            <HeadLineComponent small>Control Room</HeadLineComponent>
          </div>
        </Link>

          <Link className='cursor-pointer' href={'/about'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>About Us</HeadLineComponent>
            </div>
        </Link>

      </div>
    </div>
  )
}
