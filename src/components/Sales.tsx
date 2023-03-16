import React, { FC } from 'react'

import {
  IPopularSalesProps,
  ITopRatesSaleProps,
  PopularSalesItem,
} from '../type'
import Item from './utils/Item'
import Title from './utils/Title'

const Sales: FC<ITopRatesSaleProps | IPopularSalesProps> = ({
  ifExists,
  title,
  items,
}) => {
  // console.log('IPopularSalesProps', props)
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
              : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
          }`}
        >
          {items.map((item, index) => (
            <Item key={index} {...item} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Sales
