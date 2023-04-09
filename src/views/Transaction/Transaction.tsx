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
import "./Transaction.css";
import { chevronBackOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { createHashHistory } from "history";

const Transaction: React.FC = () => {
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
              <p id="cart">Transaction history</p>
            </IonRow>
          </IonGrid>
        </IonToolbar>

        <IonList className="infoText" lines="inset">
          <IonRow>
            <IonCol className="ion-padding-top">
              <IonItem>
                <IonCol size="9">
                  <IonLabel><strong>04/08/2023</strong></IonLabel>                  
                  <IonLabel> - Celery Juice</IonLabel>                  
                  <IonLabel> - Strawberry Smoothie</IonLabel>
                </IonCol>
                <IonCol size="3" className="ion-text-end">
                  <IonLabel><strong>$15.98</strong></IonLabel>
                  <IonLabel>$7.49</IonLabel>
                  <IonLabel>$8.49</IonLabel>
                </IonCol>              
              </IonItem>
            </IonCol>            
          </IonRow>

          <IonRow>
            <IonCol className="ion-padding-top">
              <IonItem>
                <IonCol size="9">
                  <IonLabel><strong>04/09/2023</strong></IonLabel>                  
                  <IonLabel> - Celery Juice</IonLabel>                  
                  <IonLabel> - Strawberry Smoothie</IonLabel>
                </IonCol>
                <IonCol size="3" className="ion-text-end">
                  <IonLabel><strong>$15.98</strong></IonLabel>
                  <IonLabel>$7.49</IonLabel>
                  <IonLabel>$8.49</IonLabel>
                </IonCol>              
              </IonItem>
            </IonCol>            
          </IonRow>
          
        </IonList>        
      </IonContent>
    </IonPage>
  );
};

export default Transaction;
