//global styled
import { GlobalStyle } from "./globalStyles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Router>
        </>
    );
}

export default App;
