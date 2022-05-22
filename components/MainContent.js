import {
  ViewGridIcon as ViewGridIconSolid,
} from "@heroicons/react/solid";

import {useEffect, useState} from 'react';
import {classNames} from "../helpers/helpers";
import Details from "./Details";
import Gallery from "./Gallery";

export default function MainContent(props) {
  const [currentFile, setCurrentFile] = useState(props.currentFile);
  const [files, setFiles] = useState(props.files);
  const [currentTag, setCurrentTag] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const tags = props.files.reduce((previousValue, currentValue) => {
    const newTags = currentValue.tags.map((tag) => !previousValue.includes(tag) ? tag : null).filter((tag) => tag);
    return previousValue.concat(newTags);
  }, ['all', 'favorites']);

  useEffect(() => {
    let filteredFiles = props.files.map((file) => favorites.includes(file.id) ? {...file, tags: [...tags, 'favorites']} : {...file, tags: file.tags.filter((tag) => tag !== 'favorites')} );
    filteredFiles = filteredFiles.filter((file) => file.tags.includes(currentTag));
    if (props.searchTerm) {
      filteredFiles = filteredFiles.filter((file) => file.name.includes(props.searchTerm));
    }
    setFiles(filteredFiles);
  });

  return (
    <div className="flex-1 flex items-stretch overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <h1 className="flex-1 text-2xl font-bold text-gray-900">T-shirts</h1>
            <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
              <button
                type="button"
                className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <ViewGridIconSolid className="h-5 w-5" aria-hidden="true"/>
                <span className="sr-only">Use grid view</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-3 sm:mt-2">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue="Recently Viewed"
              >
                {tags.map((tag, key) =>
                  <option key={key}>
                    {tag}
                  </option>
                )}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center border-b border-gray-200">
                <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
                  {tags.map((tag, key) => (
                    <a
                      key={key}
                      href={'#'}
                      aria-current={tag === currentTag ? 'page' : undefined}
                      onClick={() => setCurrentTag(tag)}
                      className={classNames(
                        tag === currentTag
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                      )}
                    >
                      {tag}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <Gallery setCurrentFile={setCurrentFile} currentFile={currentFile} files={files}/>

        </div>
      </main>

      {/* Details sidebar */}
      <Details currentFile={currentFile} setFavorites={setFavorites} favorites={favorites}/>

    </div>
  )
}