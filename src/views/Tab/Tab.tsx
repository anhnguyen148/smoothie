import { 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel,
  IonBadge, 
  IonRouterOutlet } from '@ionic/react';
import { 
  personCircleOutline,
  cartOutline 
} from 'ionicons/icons';

// import HomePage from './pages/HomePage';
import Listing from '../Listing/Listing';
// import LibraryPage from './pages/LibraryPage';
// import SearchPage from './pages/SearchPage';

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import "./Tab.css";

function Tab() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/* <Route path="/menu" render={() => <Menu />} exact={true} /> */}
          <Route path="/listing" render={() => <Listing />} exact={true} />
          {/* <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
        </IonRouterOutlet>

        <IonTabBar slot="top">
          {/* <IonTabButton tab="menu" href="/menu">
            <IonIcon icon={personCircleOutline} />
          </IonTabButton>

          <IonTabButton tab="listing" href="/listing">
            <IonIcon icon={radio} />
          </IonTabButton> */}

          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={cartOutline} />            
            <IonBadge slot="start">11</IonBadge>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default Tab;