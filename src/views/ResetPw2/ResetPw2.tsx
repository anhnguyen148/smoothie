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
import {
  chevronBackOutline
} from "ionicons/icons";
import "./ResetPw2.css";

const ResetPw2: React.FC = () => {
  const router = useIonRouter();
    // move to next step
    const NextStep = () => {
        router.push("reset-pw-3");
    };
    // move back to listing
    const Listing = () => {
      router.push("sign-in");
    };
  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-padding-top ion-padding-end ion-text-right ion-no-border">
        <IonToolbar>
        <IonButtons slot="start">
          <IonIcon slot="icon-only" icon={chevronBackOutline} onClick={() => Listing()}></IonIcon>
        </IonButtons>
          
        </IonToolbar>
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
      <IonGrid className="resetPw">
        <IonRow className="ion-justify-content-center">
          <IonCol size="10" className="ion-text-center">
            <h3>VERIFICATION</h3>
            <p>A verification code was sent to your registered email.<br/>Please enter this code.</p>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid className="ion-margin-top">
        <IonRow className="ion-justify-content-center ion-margin-top">
          <IonCol size="10">
              <IonInput placeholder="Code_" class="custom"></IonInput>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-end ion-margin-top">
          <IonCol size="11">
            <IonButton className="resetBtn" onClick={() => NextStep()}><strong>Next</strong></IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
        
      </IonContent>

    </IonPage>
  );
};

export default ResetPw2;
