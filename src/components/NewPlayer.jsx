import { useNavigate } from "react-router-dom";

const cohortName = '2308-ACC-PT-WEB-PT-B'
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

export default function NewPlayer() {
    const navigate = useNavigate();

    async function addPlayer(playerObj) {
        try{
            const response = await fetch(API + 'players', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(playerObj),
            });
            const json = await response.json()
            console.log(json)
            if (json.success) {
                alert('Added new player!')
            } else {
                alert('Failed to add player!')
            }
            } catch (err) {
                console.error(err)
            }
    }

    function createPlayer(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        addPlayer(Object.fromEntries(formData.entries()))
        navigate('/PlayerList')
    }

    return (
        <div>
            <div className="addPlayerForm-container">
                <form className="addPlayerForm" method="POST" onSubmit={createPlayer}>
                    <label>
                        Name:
                        <input name="name" type="text" placeholder = "Doggo"></input>
                    </label>
                    <label>
                        Breed:
                        <input name="breed" type="text" placeholder = "Good Dog"></input>
                    </label>
                    <label>
                        Status:
                        <select name="status">
                            <option value='bench'>Bench</option>
                            <option value='field'>Field</option>
                        </select>
                    </label>
                    <label>
                        Image:
                        <input name="image-url" type="url" placeholder = "https://en.wikipedia.org/wiki/Dog#/media/File:Bangladeshi_Dog.jpg"></input>
                    </label>
                    <label>
                        Team ID:
                        <input name = "team-id" type = "number" min = "0" placeholder="1"></input>
                    </label>
                    <input className="addPlayerForm-Button" type="submit" value="Add the Player!"></input>
                </form>
            </div>
        </div>
    )
}