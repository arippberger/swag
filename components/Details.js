import {HeartIcon} from "@heroicons/react/outline";
import {PencilIcon} from "@heroicons/react/solid";

export default function Details(props) {
  const toggleFavorite = (id) => {
    props.setFavorites(props.favorites.includes(id) ? props.favorites.filter(i => i !== id) : [ ...props.favorites, id ]);
  }

  return (
    <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
      <div className="pb-16 space-y-6">
        <div>
          <div className="group block w-full aspect-w-7 aspect-h-10 rounded-lg overflow-hidden">
            <img src={props.currentFile.source} alt="" className="object-cover visible group-hover:invisible"/>
            <img src={props.currentFile.reverse} alt="" className="object-cover invisible group-hover:visible"/>
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                <span className="sr-only">Details for </span>
                {props.currentFile.name}
              </h2>
              <p className="text-sm font-medium text-gray-500">{props.currentFile.size}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(props.currentFile.id)}
              className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <HeartIcon className="h-6 w-6" aria-hidden="true" fill={props.favorites.includes(props.currentFile.id) ? 'rgb(79, 70, 229)' : 'none'}/>
              <span className="sr-only">Favorite</span>
            </button>
          </div>
        </div>
        {Object.keys(props.currentFile.information).length > 0 &&
          <div>
            <h3 className="font-medium text-gray-900">Information</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              {Object.keys(props.currentFile.information).map((key) => (
                <div key={key} className="py-3 flex justify-between text-sm font-medium">
                  <dt className="text-gray-500">{key}</dt>
                  <dd className="text-gray-900">{props.currentFile.information[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
        {props.currentFile.description &&
        <div>
          <h3 className="font-medium text-gray-900">Description</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-500">{props.currentFile.description}</p>
          </div>
        </div>
        }
      </div>
    </aside>
  )
}