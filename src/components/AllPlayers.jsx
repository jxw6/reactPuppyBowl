import { useEffect, useState } from 'react'
import PlayerRow from './PlayerRow'

const cohortName = '2308-ACC-PT-WEB-PT-B'
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

const AllPlayers = ({}) => {
    const [players, setPlayers] = useState([])
    const [selectedPlayerId, setSelectedPlayerId] = useState([])

    useEffect(()=>{
        async function getPlayers() {
            try {
                const response = await fetch(API + 'players')
                const json = await response.json()
                setPlayers(json.data.players)
            } catch (err) {
                console.error(err)
            }
        }
        getPlayers()
        
    },[])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>Player List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Name</th>
                    </tr>
                    {console.log(Array.from(players))}
                    {
                        Array.from(players).map((player)=>{
                            return <PlayerRow setSelectedPlayerId={setSelectedPlayerId} key={player.id} player={player} />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllPlayers