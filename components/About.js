
import tshirts from "../content/tshirts";

const stats = [
  {label: 'Quantity', value: tshirts.length },
  {label: 'Oldest', value: '~2001?'},
  {label: 'Newest', value: '2022'},
  {label: 'Categories', value: '8'},
]

export default function About() {
  return (
    <div className="relative pb-8">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"/>
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/IMG_0428.JPEG"
                alt=""
              />
              <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"/>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"/>
              <div className="relative px-8">
                <div>
                  <img
                    className="h-12"
                    src="/tshirt.svg"
                    alt="Swag"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                    </svg>
                    <p className="relative">
                      Wow, do you really need to keep this shirt from 2 decades ago?
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Alec's Wife (Probably)</p>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="/" className="text-base font-medium text-indigo-600">
                  {' '}
                  See way too many old T-Shirts <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              So many shirts, so little time
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                I have too many t-shirts. Too many old, fading, torn, worn-out t-shirts. But I can't seem to bring
                myself to toss them out. I'm not a hoarder, just overly sentimental? I think each one has a bit of a
                story
                behind it, and each time you put it on it may hearken you back to a different time.
              </p>
              <p className="text-base leading-7">
                Ok, I'm being over dramatic. I did think it would be cool to document <a href="/">these</a> before I
                tossed them. And I did need <em>some</em> impetus to dust off my <a
                href="https://reactjs.org/">React</a> chops.
              </p>
              <p className="text-base leading-7">
                I was able to try out a few new technologies and hone some old ones building this:
              </p>

              <div className="mt-10">
                <dl className="space-y-10">
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">React 18</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">I've been using <a
                      href="https://vuejs.org/">Vue.js</a> at <a href="https://surgio.com/">my day job</a>. I wanted to
                      see what the latest and greatest version of <a href="https://reactjs.org/">React.js</a> has to
                      offer. It's been a nice change of pace
                      from Vue in that it feels much more like writing vanilla JS.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Next.js</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">I have some good experience using <a
                      href="https://nuxtjs.org/">Nuxt.js</a>, but wanted to meet the OG. I have to say: wow. The
                      developer experience is second to none!
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Tailwind CSS / Tailwind UI</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">Being able to cobble together prebuilt attractive
                      and responsive layouts and components is a god-send when prototyping something like this. <a
                        href="https://adamwathan.me/">Adam Wathan</a> and the rest of the team at <a
                        href="https://tailwindcss.com/">Tailwind CSS</a> truly make a great product.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
