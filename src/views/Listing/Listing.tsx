import {
  IonTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonFooter,
  IonButtons,
  IonBadge,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import "./Listing.css";
import {
  personCircleOutline,
  cartOutline
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header ion-no-border">
        
      </IonHeader>

      <IonContent fullscreen className="ion-text-center">
        <div></div>
      </IonContent>

      <IonFooter className="ion-no-border">
      <IonToolbar>
          <IonButtons slot="start">
            <IonIcon slot="icon-only" icon={personCircleOutline}></IonIcon>
          </IonButtons>

          <IonButtons slot="primary">
            <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
            <IonBadge slot="start">11</IonBadge>
          </IonButtons>

          <IonTitle>Menu Button</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
