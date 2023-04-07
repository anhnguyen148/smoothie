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
  IonModal,
  IonInput, 
  IonFooter} from "@ionic/react";
import "./Listing.css";
import {
  personCircleOutline,
  bagOutline,
  addCircleOutline,
  removeCircleOutline,
  chevronForwardOutline,
  addCircle,
  cardOutline,
  closeOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Listing: React.FC = () => {
  const menuRef = React.useRef<HTMLIonMenuElement>(null);
  // khai bao state drinks - setDrinksList la function
  const [drinksList, setDrinksList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/drinks").then((res: any) => {
      setDrinksList(res.data.data);
      // console.log(drinksList);
      
    })}, []);

  //close sidemenu when change path
  const closeSideMenu = () => {
    menuRef.current?.close();    
  };

  // open detail modal
  const openDetailModal = (item: any) => {
    setChosenItem(item);
    setIsOpen(true);
  };

  return (
    <>
      {/* SIDEMENU CONTENT */}
      <IonMenu ref={menuRef} contentId="main-content" side="end">
        <IonContent className="ion-padding">
          <IonToolbar className="toolBar">
            <p id="nameHeader">
              Good Morning,
              <br />
              Anh __
            </p>
          </IonToolbar>
          <IonList lines="full" className="ion-no-padding">
            <IonItem
              className="listItem ion-no-padding"
              routerLink="/user-info"
              onClick={() => closeSideMenu()}>
              <IonLabel>Personal Info</IonLabel>
            </IonItem>
            <IonItem
              className="listItem ion-no-padding"
              routerLink="/branch-list"
              onClick={() => closeSideMenu()}
            >
              <IonLabel>Change store</IonLabel>
            </IonItem>
            <IonItem
              className="listItem ion-no-padding"
              routerLink="/payment"
              onClick={() => closeSideMenu()}
            >
              <IonLabel>Cards & Payment</IonLabel>
            </IonItem>
            <IonItem
              className="listItem ion-no-padding"
              routerLink="/user-info"
              onClick={() => closeSideMenu()}
            >
              <IonLabel>Transaction history</IonLabel>
            </IonItem>
            <IonItem
              className="listItem ion-no-padding"
              routerLink="/change-pw"
              onClick={() => closeSideMenu()}
            >
              <IonLabel>Change password</IonLabel>
            </IonItem>
          </IonList>
          <IonGrid className="ion-padding-top">
            <IonRow>
              <button className="signOutBtn">Sign out</button>
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
              <IonButton routerLink="/cart">
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
              <IonCol size="5" className="ion-text-center">
                <div className="categoryBtn" role="button">
                  All
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
              {/* loop all drinks to drink cards */}
              {drinksList.map((item, index) => {
                return (
                  <IonCol key={index} size="6" className="ion-text-center" 
                  onClick={() => openDetailModal(item)}>
                    <div>
                      <IonIcon className="addToCartBtn" slot="icon-only" icon={addCircle}></IonIcon>
                    </div>
                    <IonCard className="drinkCard">
                      <img
                        src={"http://localhost:5000/public/image/" + item["image_name"]}
                        alt="drink img"/>
                      <div className="drinkDetails">
                        <IonLabel>
                          {item["name"]}
                          <br />${item["price"]}
                          <br />
                        </IonLabel>
                      </div>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>

            <IonRow>
              <IonCol className="ion-text-end">
                <p>ver 1.0 - from Anh with &#129505;</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>

      {/* Use IonModal to open drink description in a new window when click to drink card */}
      <IonModal isOpen={isOpen}>
        <IonToolbar className="ion-padding-top">
          <IonButtons slot="start">
            <IonIcon
              slot="icon-only"
              icon={closeOutline}
              onClick={() => setIsOpen(false)}
            ></IonIcon>
          </IonButtons> 
        </IonToolbar>
        <IonGrid className="drinkImgCardModal">
          <IonRow>
            <IonCol className="ion-text-center">
              <img className="drinkImg"
                src={"http://localhost:5000/public/image/" + (chosenItem ? chosenItem["image_name"] : "")}
                alt="drink img"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFooter>
          <IonRow>
            <IonCol>
              <IonCard className="drinkCardModal">
                <IonRow>
                  <IonCol size="10" className="ion-text-center ion-padding-top">
                    <IonLabel className="drinkLabelModal">
                    {(chosenItem ? chosenItem["name"] : "")}
                    </IonLabel>
                    <div className="ion-padding-top">
                      <p>
                        {(chosenItem ? chosenItem["description"] : "")}
                      </p>
                    </div>
                    <div className="ion-padding-top">
                      <IonLabel className="drinkLabelModal">
                      ${(chosenItem ? chosenItem["price"] : "")}
                      </IonLabel>
                    </div>
                  </IonCol>
                  <IonCol size="2" className="ion-text-center ion-padding-top">
                    <p>
                      <IonIcon className="addRemoveBtnModal" slot="icon-only" icon={addCircleOutline}></IonIcon>
                      <br/>
                      <strong>1</strong><br/>
                      <IonIcon className="addRemoveBtnModal" slot="icon-only" icon={removeCircleOutline}></IonIcon>
                    </p>
                  </IonCol>
                  <IonCol className="ion-text-center ion-padding-bottom">
                    <button className="addCartBtnModal">Add to cart</button>
                  </IonCol>
                </IonRow>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonFooter>
      </IonModal>
    </>
  );
};

export default Listing;
