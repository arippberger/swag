import {CogIcon, HomeIcon, ViewGridIcon as ViewGridIconOutline} from "@heroicons/react/outline";

const navigation = [
  {name: 'About', href: '/about', icon: CogIcon, current: false},
]

const tabs = [
  {name: 'Recently Viewed', href: '#', current: true},
  {name: 'Recently Added', href: '#', current: false},
  {name: 'Favorited', href: '#', current: false},
]

export {navigation, tabs};