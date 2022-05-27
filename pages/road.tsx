import type { NextPage } from 'next'
import SectionComponent from '../components/primitives/section'
import HeadLineComponent from '../components/primitives/headline'
import SpacerComponent from '../components/primitives/spacer'
import Link from 'next/link'
import Image from 'next/image'
import securityImage from '/public/assets/security.jpg'

import FooterComponent from '../components/footer'
import React from 'react'
const road: NextPage = () => {
  return (
    <div>
      <div className={'text-center relative text-white bg-red-500'}>
        <SectionComponent fullHeight>
          <div className={'mx-auto flex items-center justify-center'}>
            <HeadLineComponent semi>Road-Side <br/>Assistance</HeadLineComponent>
          </div>
          <SpacerComponent medium />
          <HeadLineComponent thin>Use of NG-SOS’s entire independent accredited panel of service providers</HeadLineComponent>
          <SpacerComponent medium />
          <div className={'mx-auto flex  justify-center items-center text-white space-x-10'}>
            <Link className='cursor-pointer' href={'/'}>
              <div className={'cursor-pointer border border-white rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                <svg className={'w-6 h-6 fill-white'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                  <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                </svg>
                <div className={'flex flex-col'}>
                  <span>Get on</span>
                  <span>
                    <strong>App Store</strong>
                  </span>
                </div>
              </div>
            </Link>

            <Link className='cursor-pointer' href={'/'}>
              <div className={'cursor-pointer border border-white rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                <svg className={'w-6 h-6 fill-white'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                </svg>
                <div className={'flex flex-col'}>
                  <span>Get on</span>
                  <span>
                    <strong>Google Play</strong>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </SectionComponent>
      </div>

      {/*Fuel*/}
      <SectionComponent fullHeightNoCentering>
        <div id={'home'} className={'flex lg:flex-row flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-5 h-full overflow-hidden'}>
          <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
            <HeadLineComponent semi>Running out of fuel</HeadLineComponent>
            <SpacerComponent medium />
            <HeadLineComponent medium>10l of fuel is supplied in the event of running out of fuel – max 2 incidents per annum.<br/> Fuel assistance at non-roadside locationswillbe assistedbut on a member to paybasis.
            </HeadLineComponent>
            <SpacerComponent medium />
            <div className={'mx-auto flex  justify-start items-center text-red-400 space-x-10'}>
              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>App Store</strong>
                  </span>
                  </div>
                </div>
              </Link>

              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>Google Play</strong>
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={'basis-1/2 grow'}>
            <div className='relative w-full h-[600px] lg:h-[800px] rounded-sm'>
              <div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>
              <Image src={securityImage} alt={'hero'} layout={'fill'} className={'object-cover object-top rounded-sm z-0'}/>
            </div>
          </div>
        </div>
      </SectionComponent>

      {/*Mechanical and electrical breakdown*/}
      <SectionComponent fullHeightNoCentering>
        <div id={'home'} className={'flex lg:flex-row-reverse flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-52 lg:space-x-reverse h-full overflow-hidden'}>
          <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
            <HeadLineComponent semi>Mechanical and electrical breakdown</HeadLineComponent>
            <SpacerComponent medium />
            <HeadLineComponent medium>A towing service is provided to tow the vehice to the nearest place of repair or safekeeping.<br/>
              An additional tow will be provided in the event of the most appropriate place of repair not being open at the time.</HeadLineComponent>
            <SpacerComponent medium />
            <div className={'mx-auto flex  justify-start items-center text-red-400 space-x-10'}>
              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>App Store</strong>
                  </span>
                  </div>
                </div>
              </Link>

              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>Google Play</strong>
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={'basis-1/2 grow'}>
            <div className='relative w-full h-[600px] lg:h-[800px] rounded-sm'>
              <div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>
              <Image src={securityImage} alt={'hero'} layout={'fill'} className={'object-cover object-top rounded-sm z-0'}/>
            </div>
          </div>
        </div>
      </SectionComponent>

      {/*Tyre change service*/}
      <SectionComponent fullHeightNoCentering>
        <div id={'home'} className={'flex lg:flex-row flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-5 h-full overflow-hidden'}>
          <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
            <HeadLineComponent semi>Tyre change service</HeadLineComponent>
            <SpacerComponent medium />
            <HeadLineComponent medium>A service provider is dispatched to change a flat tyre<br/>
              vehicle can be towed on a Member to Pay basis.<br/>
              Any costs for the repair of the tyre, parts, wheel balancing or similar charges are excluded.
            </HeadLineComponent>
            <SpacerComponent medium />
            <div className={'mx-auto flex  justify-start items-center text-red-400 space-x-10'}>
              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>App Store</strong>
                  </span>
                  </div>
                </div>
              </Link>

              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>Google Play</strong>
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={'basis-1/2 grow'}>
            <div className='relative w-full h-[600px] lg:h-[800px] rounded-sm'>
              <div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>
              <Image src={securityImage} alt={'hero'} layout={'fill'} className={'object-cover object-top rounded-sm z-0'}/>
            </div>
          </div>
        </div>
      </SectionComponent>

      {/*Keys locked in Vehicle*/}
      <SectionComponent fullHeightNoCentering>
        <div id={'home'} className={'flex lg:flex-row-reverse flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-52 lg:space-x-reverse h-full overflow-hidden'}>
          <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
            <HeadLineComponent semi>Keys locked in Vehicle</HeadLineComponent>
            <SpacerComponent medium />
            <HeadLineComponent medium>A service provider is dispatched to unlock the vehicle. The cost of the call-out and 1h labour is covered. <br/>
              The service excludes parts, components, key cutting costs or similar charges.</HeadLineComponent>
            <SpacerComponent medium />
            <div className={'mx-auto flex  justify-start items-center text-red-400 space-x-10'}>
              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>App Store</strong>
                  </span>
                  </div>
                </div>
              </Link>

              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>Google Play</strong>
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={'basis-1/2 grow'}>
            <div className='relative w-full h-[600px] lg:h-[800px] rounded-sm'>
              <div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>
              <Image src={securityImage} alt={'hero'} layout={'fill'} className={'object-cover object-top rounded-sm z-0'}/>
            </div>
          </div>
        </div>
      </SectionComponent>

      {/*Jump Start service*/}
      <SectionComponent fullHeightNoCentering>
        <div id={'home'} className={'flex lg:flex-row flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-5 h-full overflow-hidden'}>
          <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
            <HeadLineComponent semi>Jump Start service</HeadLineComponent>
            <SpacerComponent medium />
            <HeadLineComponent medium>The service is limited to reasonable services to mobilise the vehicle but excludes the cost of parts, & componants.<br/>
              If the problem cannot be resolved the vehicle will be towed to the nearest place of safekeeping (dealer).</HeadLineComponent>
            <SpacerComponent medium />
            <div className={'mx-auto flex  justify-start items-center text-red-400 space-x-10'}>
              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>App Store</strong>
                  </span>
                  </div>
                </div>
              </Link>

              <Link className='cursor-pointer' href={'/'}>
                <div className={'cursor-pointer border border-red-700 rounded-md py-4 px-10 flex space-x-5 items-center hover:opacity-50'}>
                  <svg className={'w-6 h-6 fill-red-500'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                  <div className={'flex flex-col'}>
                    <span>Get on</span>
                    <span>
                    <strong>Google Play</strong>
                  </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={'basis-1/2 grow'}>
            <div className='relative w-full h-[600px] lg:h-[800px] rounded-sm'>
              <div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>
              <Image src={securityImage} alt={'hero'} layout={'fill'} className={'object-cover object-top rounded-sm z-0'}/>
            </div>
          </div>
        </div>
      </SectionComponent>

      <FooterComponent/>
    </div>
  )
}

export default road