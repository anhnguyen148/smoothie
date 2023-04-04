import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButtons,
  IonToolbar,
  IonIcon,
  IonRow,
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
import "./Listing.css";
import { personCircleOutline, bagOutline, chevronForwardOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { useEffect } from "react";
import axios from 'axios';

const Listing: React.FC = () => {
  const router = useIonRouter();
  const menuRef = React.useRef<HTMLIonMenuElement>(null);
  // move to cart
  const GoToCart = () => {
    router.push("/cart");
  };

  const UserInfo = () => {
    //close sidemenu when change path
    menuRef.current?.close()
    router.push("/user-info");
  }

  return (
    <>
      {/* SIDEMENU CONTENT */}
      <IonMenu ref={menuRef} contentId="main-content" side="end">
        {/* <IonHeader className="menuHeader ion-no-border ion-margin">
          
        </IonHeader> */}
        <IonContent className="ion-padding">
        <IonToolbar className="toolBar">
            <p id="nameHeader">
              Good Morning,
              <br />
              Anh __
            </p>
          </IonToolbar>
          <IonList lines="full">
            <IonItem className="listItem ion-no-padding" onClick={() => UserInfo()}>
              <IonLabel>Personal Info</IonLabel>
              <IonButtons className="ion-no-padding ion-no-margin" slot="end">
                <IonIcon id="menuBackBtn1"
                  slot="icon-only"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </IonButtons>
            </IonItem>
            <IonItem className="listItem ion-no-padding">
              <IonLabel>Change store</IonLabel>
              <IonButtons className="ion-no-padding ion-no-margin" slot="end">
                <IonIcon id="menuBackBtn2"
                  slot="icon-only"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </IonButtons>
            </IonItem>
            <IonItem className="listItem ion-no-padding">
              <IonLabel>Cards & Payment</IonLabel>
              <IonButtons className="ion-no-padding ion-no-margin" slot="end">
                <IonIcon id="menuBackBtn3"
                  slot="icon-only"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </IonButtons>
            </IonItem>
            <IonItem className="listItem ion-no-padding">
              <IonLabel>Transaction history</IonLabel>
              <IonButtons className="ion-no-padding ion-no-margin" slot="end">
                <IonIcon id="menuBackBtn4"
                  slot="icon-only"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </IonButtons>
            </IonItem>
            <IonItem className="listItem ion-no-padding">
              <IonLabel>Delete account</IonLabel>
              <IonButtons className="ion-no-padding ion-no-margin" slot="end">
                <IonIcon id="menuBackBtn5"
                  slot="icon-only"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </IonButtons>
            </IonItem>
          </IonList>
          <IonGrid className="ion-padding-top">
            <IonRow>
              <button id="signOutBtn">Sign out</button>
            </IonRow>
          </IonGrid>
          
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        {/* HEADER  */}
        <IonHeader className="ion-text-center ion-no-border">
          <IonToolbar className="ion-padding-top">
            <IonButtons slot="start">
              <img id="logo-sm" src="/assets/logo-sm.png" alt="logo" />
              <p id="name">
                Smoothie
                <br />
                Shop __
              </p>
            </IonButtons>

            <IonButtons slot="primary">
              <IonButton onClick={() => GoToCart()}>
                <IonIcon
                  className="menuBtn"
                  slot="icon-only"
                  icon={bagOutline}
                ></IonIcon>
                {/* <IonBadge slot="start">11</IonBadge> */}
              </IonButton>
            </IonButtons>

            <IonButtons slot="end">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon
                    className="menuBtn"
                    slot="icon-only"
                    icon={personCircleOutline}
                  ></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {/* MAIN CONTENT */}
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
                <div className="categoryBtn" role="button">
                  Smoothie
                </div>
              </IonCol>
              <IonCol size="5" className="ion-text-center">
                <div className="categoryBtn" role="button">
                  Juice
                </div>
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
                  <img id="logo2" src="/assets/cherry.png" alt="logo" />
                  {/* <IonCardTitle>Cherry Smoothie</IonCardTitle> */}
                  <IonLabel>Plum Smoothie</IonLabel>
                  {/* <h5 className="ion-no-padding">Cherry Smoothie</h5> */}
                  <IonCardSubtitle>$8.49</IonCardSubtitle>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Listing;
