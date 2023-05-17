import PrivateRoute from "app/routes/PrivateRoute";
import ErrorPage from "infrastructure/templates/ErrorPage";
import Home from "pages/Home";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" component={Home} withLayout exact />
                <PrivateRoute component={ErrorPage} withLayout />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
