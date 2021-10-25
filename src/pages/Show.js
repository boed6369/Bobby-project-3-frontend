
import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  const faction = props.faction
  const fac = faction.find(p => p._id === id)

  const [editFaction, setEditFaction] = useState(fac)

  const handleChange = event => {
    setEditFaction({ ...editFaction, [event.target.name]: event.target.value })
  }
// having trouble here
  const handleSubmit = event => {
    event.preventDefault();
    props.updateFaction(editFaction, fac._id);
    props.history.push("/");
  }

  const removeFaction = event => {
    props.deleteFaction(faction._id);
    props.history.push("/")
  }

  return (
    <div className="faction">
      <h1>{fac.oFactionName}</h1>
      <h2>Relic</h2>
      <h3>{fac.oFactionRelic}</h3>
      <h2>General Ability</h2>
      <h3>{fac.oFactionWarlord}</h3>
      <h2>Comman Ability</h2>
      <h3>{fac.oFactionCommand}</h3>
      <h2>Lore</h2>
      <h3>{fac.oFactionLore}</h3>
      <button id="delete" onClick={removeFaction}>
        DELETE
      </button>
      <form className="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={editFaction.oFactionName}
          name="oFactionName"
          placeholder="Faction Name"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={editFaction.oFactionRelic}
          name="oFactionRelic"
          placeholder="Relic"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={editFaction.oFactionWarlord}
          name="oFactionWarlord"
          placeholder="General Ability"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={editFaction.oFactionAbilites}
          name="oFactionAbilites"
          placeholder="Faction Abilities"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={editFaction.oFactionCommand}
          name="oFactionCommand"
          placeholder="Command Ability"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={editFaction.oFactionLore}
          name="oFactionLore"
          placeholder="Lore"
          onChange={handleChange} /><br></br>

        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default Show