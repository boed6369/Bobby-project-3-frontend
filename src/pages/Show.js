function Show(props) {
    const id = props.match.params.id
    const faction = props.faction
    const fac = faction.find(p => p._id === id)
  
    return (
      <div className="faction">
        <h1>{fac.oFactionName}</h1>
        <h2>Relic</h2>
        <h3>{fac.oFactionRelic}</h3>
        <h2>General Ability</h2>
        <h3>{fac.oFactionWarlord}</h3>
        <h2>Command Ability</h2>
        <h3>{fac.oFactionCommand}</h3>
        <h2>Lore</h2>
        <h3>{fac.oFactionLore}</h3>
      </div>
    )
  }
  
  export default Show