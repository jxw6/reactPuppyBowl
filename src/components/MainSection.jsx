import { Routes, Route } from 'react-router-dom'
import NewPlayer from './NewPlayer'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'
import Home from './Home'

export default function MainSection() {
    return (
        <div className="main-section">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/playerlist' element={<AllPlayers/>} />
                    <Route path='/players/:id' element={<SinglePlayer/>} />
                    <Route path='/newplayer' element={<NewPlayer/>} />
                </Routes>
        </div>
    )
}