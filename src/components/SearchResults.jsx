import { useSelector } from 'react-redux'

export const SearchResults = () => {
    const animes = useSelector(state => state.anime.animeData)
    const isLoading = useSelector(state => state.anime.isLoading)
    const isError = useSelector(state => state.anime.isError)
    const isSearched = useSelector(state => state.anime.isSearched)

    return (
        <div className="flex flex-wrap justify-center gap-7 mt-8 w-screen">
            {isLoading && <p className='text-white text-4xl font-bold'>Please wait a minute...</p>}
            {isError && <h1 className='text-white text-4xl font-bold'>Something went wrong, please try again later</h1>}
            {!isLoading && animes.length > 0 ? animes.map((anime) => (
                <div key={Math.random()} className="flex flex-col rounded-md w-32 h-64">
                    <img src={`${anime.images.jpg.image_url}`} />
                    <p className='text-white font-semibold text-center'>{anime.title.length > 25 ? `${anime.title.substring(0, 25)}...` : anime.title}</p>
                </div>
            )) : isSearched && <p className='text-white font-semibold text-center'>Anime not found</p>}
        </div>
    )
}