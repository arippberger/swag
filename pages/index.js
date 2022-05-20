import Head from 'next/head'
import {useState} from 'react'
import dynamic from "next/dynamic";
import {
  MenuAlt2Icon,
} from '@heroicons/react/outline'
import {
  SearchIcon,
} from '@heroicons/react/solid'
import MainContent from "../components/MainContent";
import tshirts from "../content/tshirts";
import {navigation, tabs} from "../content/nav";

const currentFile = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    'Uploaded by': 'Marie Culver',
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
    Resolution: '72 x 72',
  },
}

const NarrowSidebar = dynamic(() => import('../components/NarrowSidebar'));
const MobileMenu = dynamic(() => import('../components/MobileMenu'));

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container">
      <Head>
        <title>Swag: T-shirt Gallery</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap&text=swag" rel="stylesheet" />
      </Head>

      <main>
        <>
          <div className="h-full flex">
            {/* Narrow sidebar */}
            <NarrowSidebar navigation={navigation}/>
            {/* Mobile menu */}
            <MobileMenu navigation={navigation}
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={(trueOrFalse) => setMobileMenuOpen(trueOrFalse)}/>
            {/* Content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <header className="w-full">
                <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                  <button
                    type="button"
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
                  </button>
                  <div className="flex-1 flex justify-between px-4 sm:px-6">
                    <div className="flex-1 flex">
                      <form className="w-full flex md:ml-0" action="#" method="GET">
                        <label htmlFor="desktop-search-field" className="sr-only">
                          Search all T-shirts
                        </label>
                        <label htmlFor="mobile-search-field" className="sr-only">
                          Search all T-shirts
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true"/>
                          </div>
                          <input
                            name="mobile-search-field"
                            id="mobile-search-field"
                            className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                            placeholder="Search"
                            type="search"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                          />
                          <input
                            name="desktop-search-field"
                            id="desktop-search-field"
                            className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                            placeholder="Search all T-shirts"
                            type="search"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </header>

              {/* Main content */}
              <MainContent tabs={tabs} files={tshirts} currentFile={currentFile} searchTerm={searchValue} />
            </div>
          </div>
        </>
      </main>
      <footer>
      </footer>
    </div>
  )
}
