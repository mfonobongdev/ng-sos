import React from 'react'
import cx from 'clsx'

type headlineProps = {
  children: React.ReactNode
  small?: boolean
  medium?: boolean
  thin?: boolean
  semi?: boolean
  safe?: boolean
  footer?: boolean
}

export default function HeadLineComponent({ children, small, medium, thin, semi,safe, footer }: headlineProps) {
  return (
    <h1
      className={cx('font-Montserrat', {
        'xl:text-sm text-xs font-base tracking-wide leading-[35px]': small,
        'md:max-w-[40ch] text-[23px] font-light tracking-wide leading-[50px]': safe,
        'md:max-w-[30ch] text-[26px] font-light tracking-wide leading-[55px]': thin,
        'md:max-w-[30ch] md:text-[25px] text-[25px] font-semibold tracking-wide leading-[55px]': medium,
        'md:max-w-[30ch] text-[62px] font-semibold tracking-wide leading-[75px]': semi,
        'md:max-w-[10ch] lg:text-[104px] md:text-[60px] text-[40px] font-normal tracking-wide lg:leading-[104px] md:leading-[60px] leading-[55px]':
          !small && !medium && !footer && !thin && !semi && !safe,
        'text-white md:max-w-[10ch] lg:text-[104px] md:text-[60px] text-[40px] font-normal tracking-wide lg:leading-[104px] md:leading-[60px] leading-[40px]':
          footer
      })}>
      {children}
    </h1>
  )
}
