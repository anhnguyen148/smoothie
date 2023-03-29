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
import { useState } from "react";

const BranchList: React.FC = () => {
  let [isDisabled, setIsDisabled] = useState(true);

  const router = useIonRouter();
  // move to sign up page
  const GoToSignUp = () => {
    router.push("sign-up");
  };
  // move to sign in page
  const GoToSignIn = () => {
    router.push("sign-in");
  };

  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-text-center ion-no-border">
        <img className="store" src="/assets/branches.png" alt="choose store" />
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-text-end">
            <IonCol size="11">
              <IonButton className="signup-btn" onClick={() => GoToSignUp()}>
                Sign Up
              </IonButton>
              <IonButton className="signin-btn" onClick={() => GoToSignIn()}>
                Sign In
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <img
              className="store"
              src="/assets/florence.png"
              alt="florence store"
            />
          </IonRow>
          <IonRow>
            <img
              className="store"
              src="/assets/saigon.png"
              alt="saigon store"
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BranchList;