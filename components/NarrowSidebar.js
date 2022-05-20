function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NarrowSidebar(props) {

  return (
    <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
      <div className="w-full py-6 flex flex-col items-center">
        <div className="flex-1 w-full px-2 space-y-1">
          <a href="/" className="flex-shrink-0 flex items-center flex-col rounded-md hover:bg-indigo-800 w-full p-3">
            <img
              className="h-8 w-auto"
              src="/tshirt.svg"
              alt="Workflow"
            />
            <h1 className="text-white text-lg" style={{fontFamily: `'Lobster', cursive`}}>Swag</h1>
          </a>
          {props.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                  'h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="mt-2">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}