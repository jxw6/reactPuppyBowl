import { useNavigate } from "react-router-dom";

export default function PlayerRow({ setSelectedPlayerId, player }) {

    const navigate = useNavigate();

    return (
      <tr
        onClick={() => {
          setSelectedPlayerId(player.id); navigate(`/players/${player.id}`)
        }}
      >
        <td>{player.name}</td>
      </tr>
    );
  }