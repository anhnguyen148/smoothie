import {
  IonContent,
  IonHeader,
  IonPage,
  IonFooter,
  IonButtons,
  IonBadge,
  IonToolbar,
  IonIcon,
  IonRow,
  IonCol,
  IonGrid,
  IonSearchbar,
  IonInfiniteScroll,
  IonCard,
  IonCardTitle,
  IonButton,
  IonCardSubtitle,
} from "@ionic/react";
import "./Listing.css";
import { personCircleOutline, cartOutline } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <img id="logo-sm" src="/assets/logo-sm.png" alt="logo" />
            <p id="name">
              Smoothie
              <br />
              Shop __
            </p>
          </IonButtons>

          <IonButtons slot="primary">
            <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
            {/* <IonBadge slot="start">11</IonBadge> */}
          </IonButtons>

          <IonButtons slot="primary">
            <IonIcon slot="icon-only" icon={personCircleOutline}></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-text-center">
        {/* Search Bar */}
        <IonGrid>
          <IonRow>
            <IonCol id="searchCol">
              <IonSearchbar></IonSearchbar>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Categories */}
        <IonGrid className="contentGrid">
          <IonRow>
            <IonCol className="ion-text-start">
              <h4>Shop by Category</h4>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol size="5" className="ion-text-center">
              <div className="categoryBtn" role="button">Smoothie</div>
            </IonCol>
            <IonCol size="5" className="ion-text-center">
              <div className="categoryBtn" role="button">Juice</div>
            </IonCol>
            <IonCol size="5" className="ion-text-center">
              <div className="categoryBtn" role="button">Vegan</div>
            </IonCol>
          </IonRow>

          {/* Drinks Menu */}
          <IonRow>
            <IonCol className="ion-text-start ion-margin-top">
              <h4>Drinks</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6" className="ion-text-center">
              <IonCard className="drinkCard">
                <img id="logo2" src="/assets/logo-sm.png" alt="logo" />
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>

      <IonFooter className="ion-no-border"></IonFooter>
    </IonPage>
  );
};

export default Home;
