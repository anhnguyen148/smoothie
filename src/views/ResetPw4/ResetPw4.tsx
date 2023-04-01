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
    chevronBackOutline,
    checkmarkCircleOutline
  } from "ionicons/icons";
  import "./ResetPw4.css";
  
  const ResetPw4: React.FC = () => {
    const router = useIonRouter();
    // move to next step
    const NextStep = () => {
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
            <IonIcon slot="icon-only" icon={chevronBackOutline} onClick={() => Listing()}></IonIcon>
          </IonButtons>
            
          </IonToolbar>
        </IonHeader>
  
        {/* BODY */}
        <IonContent fullscreen>
        <IonGrid className="resetPw">
          <IonRow className="ion-justify-content-center">
            <IonCol size="10" className="ion-text-center">
              <h3>PASSWORD<br/>UPDATED</h3>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="10">
            <img className="checked" src="/assets/complete.png" alt="reset password complete" />
            <IonIcon slot="icon-only" icon={chevronBackOutline}></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="10" className="ion-text-center">
              <p>Your password has been updated!</p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-text-center ion-margin-top">
            <IonCol size="10">
              <IonButton className="resetBtn" onClick={() => NextStep()}><strong>Sign In</strong></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
          
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default ResetPw4;
  