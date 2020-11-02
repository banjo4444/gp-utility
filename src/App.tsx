import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import AttackCalculator from "./component/calculator/negative/AttackCalculator";
import Footer from "./component/footer/Footer";
import Header from './component/header/Header';
import Menu from "./component/menu/Menu";
import RoleMenu from "./component/calculator/role/RoleMenu";
import StealCalculator from "./component/calculator/negative/StealCalculator";
import TrainCalculator from "./component/calculator/negative/TrainCalculator";

import 'bootstrap/scss/bootstrap.scss';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
                <Route exact path="/" component={Menu} />
                <Route exact path="/calculator/negative/attack" component={AttackCalculator} />
                <Route exact path="/calculator/negative/steal" component={StealCalculator} />
                <Route exact path="/calculator/negative/train" component={TrainCalculator} />
                <Route exact path="/calculator/roles" component={RoleMenu} />
                {/*<Route exact path="/calculator/roles/driver" component={DriverRoleCalculator} />*/}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
