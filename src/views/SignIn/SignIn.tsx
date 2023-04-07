import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonIcon,
  IonInput,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const router = useIonRouter();
  // move to sign up page
  const GoToSignUp = () => {
    router.push("sign-up");
  };
  // move to reset pw
  const ResetPw = () => {
    router.push("reset-pw-1");
  };
  // move back to listing
  const BranchList = () => {
    router.push("branch-list");
  };

  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-padding-top ion-padding-end ion-text-right ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonIcon
              slot="icon-only"
              icon={chevronBackOutline}
              onClick={() => BranchList()}
            ></IonIcon>
          </IonButtons>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <button className="signOutBtn" onClick={() => GoToSignUp()}>Sign Up</button>
            </IonCol>
            <IonCol>
              <button className="signOutBtn">Sign In</button>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <h1>SIGN IN</h1>
              <p>To Enjoy The Freshest!</p>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-margin-top">
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
              <IonInput placeholder="Email_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
              <IonInput placeholder="Password_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end ion-margin-top">
            <IonCol size="11">
            <button className="signOutBtn">Sign In</button>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end">
            <IonCol size="11">
              <a onClick={() => ResetPw()}>Forget password?</a>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
