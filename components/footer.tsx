import ngSosLogo from '/public/assets/ng-sos-logo.jpeg'
import HeadLineComponent from '../components/primitives/headline'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function FooterComponent() {
  return (
    <section className={'p-16'}>
      <div className='grid md:grid-cols-4 lg:grid-cols-7 grid-cols-2 md:grid-rows-1 gap-8 md:gap-0 grid-rows-2 w-full place-content-start grid-flow-row'>
        <div className='flex flex-col lg:space-y-4 col-start-1 col-end-2'>
          <div className='cursor-pointer'>
            <div className='flex items-center'>
              <div className='relative w-28 h-20'>
                <Image src={ngSosLogo} alt={'ng sos logo'} className={'object-contain object-left-top'} layout={'fill'} />
              </div>
            </div>
          </div>

          <HeadLineComponent small>© 2022 NG-SOS</HeadLineComponent>
          <a href="/pdf/terms-converted.pdf" target="_blank">
          <div className={'flex space-x-1 items-center cursor-pointer hover:opacity-50'}>
            <HeadLineComponent small>Terms & Conditions</HeadLineComponent>
            <LinkIcon/>
          </div>
          </a>
        </div>
        <div className='block md:hidden'>{''}</div>
        <div className='flex flex-col md:space-y-4 md:col-start-3 md:col-end-4 lg:col-start-6 lg:col-end-7'>
          <div className='font-bold'>Links</div>

          <Link className='cursor-pointer' href={'/'}>
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
              <HeadLineComponent small>Medical Assistance</HeadLineComponent>
            </div>
          </Link>


          <Link className='cursor-pointer' href={'/road'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>Road-Side Assistance</HeadLineComponent>
            </div>
          </Link>


          <Link className='cursor-pointer' href={'/about'}>
            <div className='cursor-pointer'>
              <HeadLineComponent small>about Us</HeadLineComponent>
            </div>
          </Link>

        </div>
        <div className='flex flex-col space-y-4 md:col-start-4 md:col-end-5 lg:col-start-7 lg:col-end-8 overflow-clip'>
          <div className='font-bold'>Contact Us</div>
          <HeadLineComponent small>sales@m2m-nigeria.com</HeadLineComponent>
          <HeadLineComponent small>+234 (1) 236 6367</HeadLineComponent>
          <HeadLineComponent small>6th Floor, Landmark Tower, 5B Water Corporation Road Victoria Island, Lagos.</HeadLineComponent>
        </div>
      </div>
    </section>
  )
}

export const LinkIcon = () => {
  return (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className='w-4 h-4 fill-current' xmlns="http://www.w3.org/2000/svg">
    <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
  </svg>
  )
}
