import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
} from "@ionic/react";
import "./BranchList.css";

const BranchList: React.FC = () => {



  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-margin-bottom ion-text-center ion-no-border">
        <img className="store" src="/assets/branches.png" alt="choose store" />
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <img className="store" src="/assets/florence.png" alt="florence store" />
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-margin-top">
          <IonRow>
            <img className="store" src="/assets/saigon.png" alt="saigon store" />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BranchList;
