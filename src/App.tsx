import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './views/Home/Home';
import BranchList from './views/BranchList/BranchList';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import ResetPw1 from './views/ResetPw1/ResetPw1';
import ResetPw2 from './views/ResetPw2/ResetPw2';
import ResetPw3 from './views/ResetPw3/ResetPw3';
import ResetPw4 from './views/ResetPw4/ResetPw4';
import Listing from './views/Listing/Listing';
import UserInfo from './views/UserInfo/UserInfo';
import Payment from './views/Payment/Payment';
import Transaction from './views/Transaction/Transaction';
import ChangeStore from './views/ChangeStore/ChangeStore';
import ChangePw from './views/ChangePw/ChangePw';
import Cart from './views/Cart/Cart';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>

                <Route exact path="/home">
                <Home />
                </Route>

                <Route exact path="/">
                <Redirect to="/home" />
                </Route>

                <Route exact path="/branch-list">
                <BranchList />
                </Route>

                <Route exact path="/sign-up">
                <SignUp />
                </Route>

                <Route exact path="/sign-in">
                <SignIn />
                </Route>

                <Route exact path="/reset-pw-1">
                <ResetPw1 />
                </Route>

                <Route exact path="/reset-pw-2">
                <ResetPw2 />
                </Route>

                <Route exact path="/reset-pw-3">
                <ResetPw3 />
                </Route>

                <Route exact path="/reset-pw-4">
                <ResetPw4 />
                </Route>
                
                <Route exact path="/listing">
                <Listing />
                </Route>
                <Route exact path="/user-info">
                <UserInfo />
                </Route>
                <Route exact path="/payment">
                <Payment />
                </Route>
                <Route exact path="/change-pw">
                <ChangePw />
                </Route>
                <Route exact path="/transaction">
                <Transaction />
                </Route>
                <Route exact path="/change-store">
                <ChangeStore />
                </Route>

                <Route exact path="/cart">
                <Cart />
                </Route>

            </IonRouterOutlet>
        </IonReactRouter>
        
    </IonApp>
);

export default App;
