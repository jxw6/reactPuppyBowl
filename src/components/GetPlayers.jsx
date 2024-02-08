const cohortName = '2308-ACC-PT-WEB-PT-B';
const API = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export default async function GetPlayers() {
    try {
        const response = await fetch(API + 'players')
        const json = await response.json()
        return json.data.players
    } catch (err) {
        console.error(err)
    }
}