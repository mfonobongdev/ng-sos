import type { NextPage } from 'next'
import SectionComponent from '../components/primitives/section'
import HeadLineComponent from '../components/primitives/headline'
import SpacerComponent from '../components/primitives/spacer'
import Link from 'next/link'
import Image from 'next/image'
import visionImage from '/public/assets/vision.png'
import valuesImage from '/public/assets/values.png'
import missionImage from '/public/assets/mission.png'
import React from 'react'
import FooterComponent from '../components/footer'

const about: NextPage = () => {
  return (
    <div className={'bg-[#FDFDFD]'}>
      <SectionComponent fullHeightNoCentering>
        <SpacerComponent large/>
        <HeadLineComponent semi>About Us</HeadLineComponent>
        <SpacerComponent medium/>
        <div className={'max-w-[100ch] text-lg leading-loose mb-20'}>
        At NG-SOS we believe in the right of every single person to be safe and retain freedom of movement without fear, wherever they are.
        <SpacerComponent small/>
        The concentration of serious crime in Nigeria remains high in densely populated cities, focused more intensely in urban, and suburban areas. Although
        Public Services, in the form of the Nigerian Police Service, and Public Healthcare Emergency Response exists, resources are limited. “High Spike” times of the day
        and week (for example, Friday nights) results in overburdened public services that are often overwhelmed, slowing response-time.
        <SpacerComponent small/>
        NG-SOS provides a “safety-net” for users by supplementing these services with private service-providers.
        Although private home-security has become a standard feature for many Nigerian families, NG-SOS seeks to expand that level of security to external, public environments.
        <SpacerComponent small/>
        We are passionate about providing a user-friendly, affordable service that will ensure the safety of individuals, whether they are on the road, on holiday, or simply taking a walk.
        </div>


        {/*Vision*/}
        <SectionComponent fullHeightNoCentering>
          <div id={'home'} className={'flex lg:flex-row flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-5 h-full overflow-hidden'}>
            <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
              <HeadLineComponent semi>Vision</HeadLineComponent>
              <SpacerComponent medium />
              <HeadLineComponent safe>Empowering the personal Safety of Nigerians through the very best National Emergency and Security Response Application
                in Nigeria backed by intelligent additional data services.
              </HeadLineComponent>
              <SpacerComponent medium />
            </div>

            <div className={'basis-1/2 grow'}>
              <div className='relative w-full h-[300px] lg:h-[500px] rounded-sm'>
                {/*<div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>*/}
                <Image src={visionImage} alt={'hero'} layout={'fill'} className={'object-scale-down object-center rounded-sm z-0'}/>
              </div>
            </div>
          </div>
        </SectionComponent>

        {/*values*/}
        <SectionComponent fullHeightNoCentering>
          <div id={'home'} className={'flex lg:flex-row-reverse flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-52 lg:space-x-reverse h-full overflow-hidden'}>
            <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
              <HeadLineComponent semi>Values</HeadLineComponent>
              <SpacerComponent medium />
              <HeadLineComponent safe>We are committed to providing the fastest and
                most professional service wherever you are making
                a visible difference in society by continuing to evolve and improve our services offering using the best that technology has to offer accommodating a variety
                of devise platforms. Empowering skills within our partnerships to better assist with lifesaving services
                .Maintaining an affordable, usable and accessible product for all.
                Guarding our clients, wherever they are, with the fastest</HeadLineComponent>
              <SpacerComponent medium />
            </div>

            <div className={'basis-1/2 grow'}>
              <div className='relative w-full h-[300px] lg:h-[500px] rounded-sm'>
                {/*<div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>*/}
                <Image src={valuesImage} alt={'hero'} layout={'fill'} className={'object-scale-down object-center rounded-sm z-0'}/>
              </div>
            </div>
          </div>
        </SectionComponent>

        {/*mission*/}
        <SectionComponent fullHeightNoCentering>
          <div id={'home'} className={'flex lg:flex-row flex-col lg:items-center mt-20 lg:mt-0 lg:space-x-5 h-full overflow-hidden'}>
            <div className={'basis-1/2 shrink mb-16 lg:mb-0'}>
              <HeadLineComponent semi>Mission</HeadLineComponent>
              <SpacerComponent medium />
              <HeadLineComponent safe>security and emergency response-time. Innovating systems and evolving the nature of private
                security. Becoming the largest and most reliable mobile safety- service application, by unifying and empowering the best security and emergency personnel,
                nationwide, backed by personalised intelligent data services.
              </HeadLineComponent>
              <SpacerComponent medium />
            </div>

            <div className={'basis-1/2 grow'}>
              <div className='relative w-full h-[300px] lg:h-[500px] rounded-sm'>
                {/*<div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-sm'}/>*/}
                <Image src={missionImage} alt={'hero'} layout={'fill'} className={'object-scale-down object-center rounded-sm z-0'}/>
              </div>
            </div>
          </div>
        </SectionComponent>

      </SectionComponent>

      <FooterComponent/>
    </div>
  )
}

export default about