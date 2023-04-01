import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const router = useIonRouter();
  // move to sign in page
  const GoToSignIn = () => {
    router.push("sign-in");
  };
  // move back to listing
  const Listing = () => {
    router.push("listing");
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
              onClick={() => Listing()}
            ></IonIcon>
          </IonButtons>

          <IonButton className="signup-btn">
            <strong>Sign Up</strong>
          </IonButton>
          <IonButton className="signin-btn" onClick={() => GoToSignIn()}>
            <strong>Sign In</strong>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <h1>SIGN UP</h1>
              <p>To Enjoy The Freshest!</p>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-margin-top">
          <IonRow className="ion-justify-content-center">
            <IonCol size="10">
              <IonInput placeholder="Username_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
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
              <IonButton className="resetBtn">Sign Up</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end">
            <IonCol size="11">
              <p>
                Already a member? <a onClick={() => GoToSignIn()}>Sign In.</a>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
