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

    useEffect(() => getFaction(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index faction={faction} />
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