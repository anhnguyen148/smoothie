import { 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon,
  IonButton,
  IonLabel,
  IonBadge, 
  IonRouterOutlet } from '@ionic/react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import "./SignUpTab.css";

function SignUpTab() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/sign-up-tab" to="/sign-up" />
          <Route path="/sign-up" render={() => <SignUp />} exact={true} />
          <Route path="/sign-in" render={() => <SignIn />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar className='signUpTab' slot="top">
          <IonTabButton tab="sign-up" href="/sign-up">
          <IonButton className="signup-btn">
            <strong>Sign Up</strong>
          </IonButton>
          </IonTabButton>

          <IonTabButton tab="sign-in" href="/sign-in">
          <IonButton className="signin-btn">
            <strong>Sign In</strong>
          </IonButton>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default SignUpTab;