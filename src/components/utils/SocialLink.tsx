import React, { FC } from 'react'
import { SocialLinks } from '../../type'

const SocialLink: FC<SocialLinks> = (props) => {
  return (
    <>
      <img
        src={props.icon}
        alt="icon/social"
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110  "
      />
    </>
  )
}

export default SocialLink
