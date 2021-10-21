import { Link } from "react-router-dom"

function Index(props) {

  // loaded function
  const loaded = () => {
    return props.faction.map((fac) => (
      <div key={fac._id} className="faction">
        <h1>BoneReapers</h1>
        <Link to={`/faction/${fac._id}`}><h1>{fac.oFactionName}</h1></Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.faction ? loaded() : loading();
}

export default Index;