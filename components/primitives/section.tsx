import React from 'react'
import cx from 'clsx'

type sectionProps = {
  children: React.ReactNode
  responsiveFullHeight?: boolean
  fullHeight?: boolean
  fullHeightNoCentering?: boolean
}

export default function SectionComponent({
  children,
  responsiveFullHeight = false,
  fullHeight = false,
  fullHeightNoCentering = false
}: sectionProps) {
  return (
    <section
      className={cx('font-Montserrat bg-primaryLight dark:bg-primaryDark xl:px-[10%] xl:py-42 py-14 md:py-28 md:px-[8%] px-[5%]', {
        'md:h-screen flex items-center': responsiveFullHeight,
        'min-h-screen grid place-items-center text-center': fullHeight,
        'min-h-screen': fullHeightNoCentering,
        'grid place-items-center text-center':!responsiveFullHeight && !fullHeight && !fullHeightNoCentering
      })}>
      {fullHeight && <div>{children}</div>}
      {responsiveFullHeight && <div>{children}</div>}
      {fullHeightNoCentering && <div>{children}</div>}
      {!responsiveFullHeight && !fullHeight && !fullHeightNoCentering && <>{children}</>}
    </section>
  )
}
