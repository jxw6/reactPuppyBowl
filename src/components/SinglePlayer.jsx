import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

const cohortName = '2308-ACC-PT-WEB-PT-B'
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`


export default function SinglePlayer() {
    const [player, setPlayer] = useState([])
    const navigate = useNavigate();
    let {id} = useParams();

    useEffect(()=>{
        async function getPlayer() {
            try {
                const response = await fetch(API + 'players/' + `${id}`)
                const json = await response.json()
                setPlayer(json.data.player)
            } catch (err) {
                console.error(err)
            }
        }
        getPlayer()

    },[])

    function removePlayer() {
        console.log('Remove Player Button')
        async function deletePlayer() {
            try{
                const response = await fetch(API + 'players/' + id,
        {method: 'DELETE'});
        const result = await response.json();
        console.log(result);
        } catch (err) {
            console.error(err)
        }
    }
        deletePlayer()
        navigate('/PlayerList')
    }
    
    return (
        <>
        <div><button id='remove-{id}' onClick={removePlayer}>Remove Player</button></div>
        <div>Name: {player.name}</div>
        <div>Breed: {player.breed}</div>
        <div>Status: {player.status}</div>
        <div>Date Added: {player.createdAt}</div>
        <div>Team: {player.teamId}</div>
        <div><img src={player.imageUrl} /></div>
        </>
    )
}