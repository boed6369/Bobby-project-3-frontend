import { findByPlaceholderText } from "@testing-library/dom";
import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {

  const [newFac, setNewFac] = useState({
    oFactionName: "",
    oFactionRelic: "",
    oFactionWarlord: "",
    oFactionAbilites: "",
    oFactionCommand: "",
    oFactionLore: "",
  })

  const handleChange = (event) => {
    setNewFac({ ...newFac, [event.target.oFactionName]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createFaction(newFac);
    setNewFac({
      oFactionName: "",
      oFactionRelic: "",
      oFactionWarlord: "",
      oFactionAbilites: "",
      oFactionCommand: "",
      oFactionLore: "",
    });
  };



  const loaded = () => {
    return props.faction.map((fac) => (
      <div key={fac._id} className="faction">
        <Link to={`/faction/${fac._id}`}><h1>{fac.oFactionName}</h1></Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form className="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFac.oFactionName}
          name="oFactionName"
          placeholder="Faction Name"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={newFac.oFactionRelic}
          name="oFactionRelic"
          placeholder="Relic"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={newFac.oFactionWarlord}
          name="oFactionWarlord"
          placeholder="General Ability"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={newFac.oFactionAbilites}
          name="oFactionAbilites"
          placeholder="Faction Abilities"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={newFac.oFactionCommand}
          name="oFactionCommand"
          placeholder="Command Ability"
          onChange={handleChange} /><br></br>
        <input
          type="text"
          value={newFac.oFactionLore}
          name="oFactionLore"
          placeholder="Lore"
          onChange={handleChange} /><br></br>

        <input type="submit" value="Create Sub Faction" />
      </form>
      {props.faction ? loaded() : loading()};
    </section>
  )
}

export default Index;