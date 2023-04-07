import {
  IonContent,
  IonHeader,
  IonPage,
  IonButtons,
  IonToolbar,
  IonIcon,
  IonRow,
  IonInput,
  IonCol,
  IonGrid,
  IonSearchbar,
  IonCard,
  IonCardTitle,
  IonButton,
  IonCardSubtitle,
  IonMenu,
  IonMenuToggle,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./UserInfo.css";
import { chevronBackOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { createHashHistory } from "history";

const UserInfo: React.FC = () => {
  // move back to listing
  let history = createHashHistory();
  const goBack = () => {
    history.go(-1);
  };

  return (
    <IonPage id="main-content">
      <IonContent>
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
              <p id="cart">Personal Info</p>
            </IonRow>
          </IonGrid>
        </IonToolbar>

        <IonList className="infoText">
          <IonItem>
            <IonLabel position="stacked">First Name</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Address Line 1</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Address Line 2</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">City</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Zip Code</IonLabel>
                <IonInput placeholder=" "></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">State</IonLabel>
                <IonInput placeholder=" "></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonItem>
            <IonLabel position="stacked">Country</IonLabel>
            <IonInput placeholder=" "></IonInput>
          </IonItem>
        </IonList>
          <IonRow className="ion-padding">
            <button className="signOutBtn">Save</button>
          </IonRow>
        
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
