export interface IHeroApiProps {
  heroapi: {
    title: string
    subtitle: string
    img: string
    btntext: string
    videos: Videos[]
    sociallinks: SocialLinks[]
  }
}
export interface Videos {
  imgsrc: string
  clip: any
}
export interface SocialLinks {
  icon: string
}
export interface IPopularSalesProps {
  ifExists?: boolean
  title: string
  items: PopularSalesItem[]
}
export interface PopularSalesItem {
  ifExists?: boolean
  id: string
  title: string
  text: string
  rating: string
  btn: string
  img: any
  price: string
  color: string
  shadow: string
}
export interface ITopRatesSaleProps {
  ifExists: boolean
  title: string
  items: TopRatesSaleItem[]
}
export interface TopRatesSaleItem {
  ifExists: boolean
  id: string
  title: string
  text: string
  rating: string
  btn: string
  img: any
  price: string
  color: string
  shadow: string
}
export interface IHighlight {
  ifExists?: boolean
  heading: string
  title: string
  text: string
  btn: string
  url: string
  img: any
}
export interface IStory {
  title: string
  news: IStoryNews[]
}
export interface IStoryTitle {
  title: string
}
export interface IStoryNews {
  title: string
  text: string
  img: string
  url: string
  like: string
  time: string
  by: string
  btn: string
}
export interface IFooterProps {
  titles: {
    title: string
  }[]
  links: {
    link: string
  }[][]
}
export interface AddToCartType {
  id: string
  title: string
  text: string
  img: string
  price: string
  color: string
  shadow: string
}
export interface CartItemProps {
  id: string
  title: string
  text: string
  img: string
  price: number
  color: string
  shadow: string
  cartQuantity: number
}
export interface ClearToCartType {
  cartClear: []
}
