import {
  IonMenu,
  IonTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonFooter,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import "./Listing.css";
import {
  personCircle
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            {/* <IonIcon name="apps-outline"></IonIcon> */}
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
          </IonButtons>

          <IonTitle>Menu Button</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-text-center">
        <div></div>
      </IonContent>

      <IonFooter className="ion-no-border"></IonFooter>
    </IonPage>
  );
};

export default Home;
