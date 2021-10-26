import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [faction, setFaction] = useState(null);

    const URL = "https://bobby-project-3-backend.herokuapp.com/faction/"

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

        getFaction();
    };

    const updateFaction = async (fac, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(fac),
        })
        getFaction()
    }

    const deleteFaction = async id => {
        await fetch(URL + id, {
            method: "DELETE",
        })
        getFaction()
    }

    useEffect(() => getFaction(), [])

    return (
        <main className="main">
            <div className="reapers">
            <h1>Ossiarch BoneReapers</h1>
            <h3>Relentless. Disciplined. Deathless. These are the Ossiarch Bonereapers – the culmination of centuries of planning by Nagash and the harbingers of his dark reign. Where the Legions of Nagash are the foot soldiers of Death and the Nighthaunt are the shock troops, the Ossiarch Bonereapers are the vanguard of a new order. These are not risen warriors or malignant spirits – they are bespoke war-constructs forged from harvested bone and gifted the soul animus of great warriors and heroes. Alone, they have hundreds of lifetimes of experience and brutal physical prowess. Unified, they are nigh unstoppable, directed into battle by Katakros, Mortarch of the Necropolis – perhaps the greatest military strategist (living, or dead) the Mortal Realms have ever known.</h3>
            </div>
            <Switch>
                <Route className="factions" exact path="/">
                    <Index faction={faction} createFaction={createFaction} />
                </Route>
                <Route
                    path="/faction/:id"
                    render={(rp) => (
                        <Show
                            faction={faction}
                            updateFaction={updateFaction}
                            deleteFaction={deleteFaction}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;