import {
    IonContent,
    IonPage,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonIcon,
    IonInput,
  } from "@ionic/react";
  import { useIonRouter } from "@ionic/react";
  import { chevronBackOutline } from "ionicons/icons";
  import { createHashHistory } from "history";
  import "./ChangePw.css";
  
  const ChangePw: React.FC = () => {
    let history = createHashHistory();
    // move back to listing
    const goBack = () => {
      history.go(-1);
    };
    const router = useIonRouter();
    return (
      <IonPage>  
        {/* BODY */}
        <IonContent fullscreen>
        <IonToolbar className="ion-padding-top">
          <IonButtons slot="start">
            <IonIcon
              slot="icon-only"
              icon={chevronBackOutline}
              onClick={() => goBack()}
            ></IonIcon>
          </IonButtons>
          <IonGrid className="infoGrid">
            <IonRow className=" ion-text-start">
              <p id="cart">Change password</p>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <IonGrid className="ion-margin-top">
        <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
                <IonInput placeholder="Current Password_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
                <IonInput placeholder="New Password_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
                <IonInput placeholder="Confirm Password_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end ion-margin-top">
            <IonCol size="11">
              <button className="signOutBtn">Save</button>
            </IonCol>
          </IonRow>
        </IonGrid>
          
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default ChangePw;
  