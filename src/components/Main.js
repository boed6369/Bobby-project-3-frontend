
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [faction, setFaction] = useState(null);

    const URL = "https://bobby-project-3-backend.herokuapp.com/faction"

    const getFaction = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setFaction(data);
    };

    const createFaction = async (fac) => {
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(fac),
        });
        // update list of people
        getFaction();
      };

    useEffect(() => getFaction(), [])

    return (
        <main className="main">
            <h1>Ossiarch BoneReapers</h1>
            <h3>The Ossiarch legions are an undead force like no other. Created to be autonomous, they are trusted to enact Nagash’s will on a hundred war fronts at once. Their empire gathers war materiel from the cadavers of each battle, harvesting bone with which to create new warriors, build fortifications and begin the cycle of death over again.</h3>
            <Switch>
                <Route className="factions" exact path="/">
                    <Index faction={faction} createFaction={createFaction}/>
                </Route>
                <Route
                    path="/faction/:id"
                    render={(rp) => (
                        <Show
                        faction={faction}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;