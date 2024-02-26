import { useDispatch, useSelector } from 'react-redux'
import { changeText, fetchAnime } from '../features/AnimeSlice'

export const AnimeInput = () => {
    const dispatch = useDispatch()
    const text = useSelector(state => state.anime.text)

    const handleEnterKey = (e) => {
        if (e.key === 'Enter' && text.trim() !== '') dispatch(fetchAnime(text))
    }

    const handleSearchButton = () => {
        if (text.trim() !== '') dispatch(fetchAnime(text))
    }
    return (
        <div className="mt-5 rounded-md w-72 h-10 text-lg p-2 bg-white flex justify-between items-center group">
            <input type="text"
                placeholder="Enter your anime here"
                className="focus:outline-none"
                value={text}
                onChange={(e) => dispatch(changeText(e.currentTarget.value))}
                onKeyDown={(e) => handleEnterKey(e)} />
            <button className="bg-green-500 text-white font-semibold px-2 rounded-md" onClick={handleSearchButton}>Go</button>
        </div>
    )
}