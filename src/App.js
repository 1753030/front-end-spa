import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import RePassword from './pages/RenewPassword';
import Detail from './pages/detail';
import Home from './pages/home';
import SearchPage from './pages/Search';
import ProfilePage from './pages/Profile';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserCourse from './pages/UserCourse';
import CategoriesDetail from './pages/CategoriesDetail';

const App = (props) => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/category/:id'
                    component={CategoriesDetail}
                />
                <Route exact path='/usercourse'
                    component={UserCourse}
                />
                <Route exact path='/signup'
                    component={SignUp}
                />
                <Route exact path='/profile'
                    component={ProfilePage}
                />
                <Route exact path='/shoppingcart'
                    component={ShoppingCartPage}
                />
                <Route exact path='/search'
                    component={SearchPage}
                />
                <Route exact path='/forgotpassword'
                    component={ForgotPassword}
                />
                <Route exact path='/renewpassword'
                    component={RePassword}
                />
                <Route path='/detail/:id'
                    component={Detail}
                />
                <Route exact path='/login'
                    component={Login}
                />
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
