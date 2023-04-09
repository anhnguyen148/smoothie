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
import "./ChangeStore.css";
import { chevronBackOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { createHashHistory } from "history";

const ChangeStore: React.FC = () => {
  const router = useIonRouter();
  let history = createHashHistory();
  // move back to listing
  const goBack = () => {
    history.go(-1);
  };
  // move to listing page
  const GoToListing =() => {
    router.push("/listing");
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
              <p id="cart">Change store</p>
            </IonRow>
          </IonGrid>
        </IonToolbar>

        <IonGrid className="ion-padding-top">
          <IonRow className="ion-padding-top">
            <img
              className="store"
              src="/assets/florence.png"
              alt="florence store"   
              onClick={() => GoToListing()}           
            />
          </IonRow>
          <IonRow>
            <img
              className="store"
              src="/assets/saigon.png"
              alt="saigon store"
              onClick={() => GoToListing()}
            />
          </IonRow>
        </IonGrid>   
      </IonContent>
    </IonPage>
  );
};

export default ChangeStore;
