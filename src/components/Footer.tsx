import React, { FC } from 'react'
import { IFooterProps } from '../type'

const Footer: FC<IFooterProps> = (props) => {
  console.log('footerprops', props)
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {props.titles.map((item, index) => (
              <div key={index} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold ">
                  {item.title}
                </h1>
              </div>
            ))}
            {props.links.map((item, index) => (
              <ul key={index} className="grid items-center gap-1">
                {item.map((list, index) => (
                  <li key={index} className="text-sm sm:text-xs">
                    {list.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights{' '}
              <span className="font-semibold"> Arman mousavi </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
