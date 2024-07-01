'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const logoSrc = hoveredLogo ? '/logo-white.svg' : '/logo-black.svg';


  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          {/* <Image src="/logo-black.svg" alt="logo" width={170} height={50} /> */}
          <Image 
            src={logoSrc} 
            alt="logo" 
            width={170} 
            height={50}
            onMouseEnter={() => setHoveredLogo(true)} 
            onMouseLeave={() => setHoveredLogo(false)} 
           />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
