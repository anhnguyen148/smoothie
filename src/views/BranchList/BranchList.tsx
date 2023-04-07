import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "./BranchList.css";
import { useIonRouter } from "@ionic/react";

const BranchList: React.FC = () => {
  const router = useIonRouter();
  // move to sign up page
  const GoToSignUp = () => {
    router.push("/sign-up");
  };
  // move to sign in page
  const GoToSignIn = () => {
    router.push("/sign-in");
  };
  const GoToListing =() => {
    router.push("/listing");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
          <img className="store" src="/assets/branches.png" alt="choose store" />
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol></IonCol>
            <IonCol>
              <button className="signOutBtn" onClick={() => GoToSignUp()}>Sign Up</button>
            </IonCol>
            <IonCol>
              <button className="signOutBtn" onClick={() => GoToSignIn()}>Sign In</button>
            </IonCol>           
          </IonRow>
          {/* <IonRow className="ion-text-end">
            <IonCol size="11">
              <IonButton className="signup-btn" onClick={() => GoToSignUp()}>
                Sign Up
              </IonButton>
              <IonButton className="signin-btn" onClick={() => GoToSignIn()}>
                Sign In
              </IonButton>
            </IonCol>
          </IonRow> */}
        </IonGrid>
        <IonGrid>
          <IonRow>
            <img
              className="store"
              src="/assets/florence.png"
              alt="florence store"   
              onClick={() => GoToListing()}           
            />
          </IonRow>
          <IonRow>
            <img
              className="store"
              src="/assets/saigon.png"
              alt="saigon store"
              onClick={() => GoToListing()}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BranchList;
