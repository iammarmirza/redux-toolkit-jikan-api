import { AnimeInput } from "./components/AnimeInput"
import { SearchResults } from "./components/SearchResults"
import { Provider } from 'react-redux'
import { store } from "./app/store"

function App() {

  return (
    <Provider store={store}>
      <div className="flex flex-col bg-blue-600 w-screen items-center pt-5 min-h-screen">
        <h1 className="text-white font-bold text-4xl">Try out the anime search API</h1>
        <AnimeInput />
        <SearchResults />
      </div>
    </Provider>
  )
}

export default App
