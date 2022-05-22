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
import About from "../components/About";
const NarrowSidebar = dynamic(() => import('../components/NarrowSidebar'));
const MobileMenu = dynamic(() => import('../components/MobileMenu'));

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container h-full">
      <Head>
        <title>About | Swag: T-shirt Gallery</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap&text=swag" rel="stylesheet" />
      </Head>

      <main className="h-full">
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
                <div className="relative z-10 flex-shrink-0 h-16 flex">
                  <button
                    type="button"
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
                  </button>
                </div>
              </header>

              {/* Main content */}
              <About/>
            </div>
          </div>
        </>
      </main>
      <footer>
      </footer>
    </div>
  )
}
