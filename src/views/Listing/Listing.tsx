import {
  IonContent,
  IonPage,
  IonButtons,
  IonToolbar,
  IonIcon,
  IonRow,
  IonCol,
  IonGrid,
  IonSearchbar,
  IonCard,
  IonButton,
  IonMenu,
  IonMenuToggle,
  IonList,
  IonItem,
  IonLabel,
  IonModal,
  IonFooter,
} from "@ionic/react";
import "./Listing.css";
import {
  personCircleOutline,
  bagOutline,
  addCircleOutline,
  removeCircleOutline,
  addCircle,
  closeOutline,
} from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Listing: React.FC = () => {
  const menuRef = React.useRef<HTMLIonMenuElement>(null);
  const router = useIonRouter();

  // use state drinks - setDrinksList is a function
  const [drinksList, setDrinksList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  // search bar state
  const [searchInput, setSearchInput] = useState("");

  // add number of item to card
  const [itemQuantity, setItemQuantity] = useState(0);
  // cart items array
  const [cartItemsArray, setCartItemsArray] = useState([] as any);
  // drink list filter: smoothie, juice, all
  const [drinkType, setDrinkType] = useState("");

  // axios JSON
  useEffect(() => {
    console.log("init!");
    axios.get("http://localhost:8000/drinks").then((res: any) => {
      setDrinksList(res.data.data);
    });
  }, []);

  // search Handler
  const searchHandler = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // get cart data from local storage
  const getCartDataFromStorage = () => {
    const cartDataFromStorage: string | null = localStorage.getItem("cartData");

    console.log(cartDataFromStorage);
    if (cartDataFromStorage) {
      setCartItemsArray(JSON.parse(cartDataFromStorage));
    } else {
      // setCartItemsArray([]);
    }
  };

  // set cart data from state to storage
  const setCartDataToStorage = () => {
    if (cartItemsArray) {
      localStorage.setItem("cartData", JSON.stringify(cartItemsArray));
    }
  };

  //close sidemenu when change path
  const closeSideMenu = () => {
    menuRef.current?.close();
  };

  // open detail modal
  const openDetailModal = (item: any) => {
    setItemQuantity(1);
    setChosenItem(item);
    setIsOpen(true);
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const increaseItemQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };
  const decreaseItemQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const addToCartHandler = () => {
    const addItem: any = {
      itemData: chosenItem,
      quantity: itemQuantity,
    };
    getCartDataFromStorage();
    setCartItemsArray([...cartItemsArray, addItem]);
    setCartDataToStorage();
  };

  return (
    <>
      {/* SIDEMENU CONTENT */}
      <IonMenu ref={menuRef} contentId="main-content" side="end">
        <IonContent className="ion-padding ">
          <IonToolbar className="toolBar ion-padding-top">
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
              onClick={() => closeSideMenu()}
            >
              <IonLabel>Personal Info</IonLabel>
            </IonItem>
            <IonItem
              className="listItem ion-no-padding"
              routerLink="/change-store"
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
              routerLink="/transaction"
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
        {/* MAIN CONTENT */}
        <IonContent fullscreen>
          {/* TOP TOOLBAR */}
          <IonToolbar className="ion-padding-top">
            <IonRow>
              {/* LOGO & NAME BRANCH */}
              <IonCol size="2">
                <img id="logo-sm" src="/assets/logo-sm.png" alt="logo" />
              </IonCol>
              <IonCol size="4" className="ion-text-start">
                <p id="name">
                  Smoothie
                  <br />
                  Shop __
                </p>
              </IonCol>
              <IonCol size="2"></IonCol>
              {/* CART */}
              <IonCol size="2" className="ion-text-end">
                <IonButtons>
                  <IonButton routerLink="/cart">
                    <IonIcon
                      className="menuBtn"
                      slot="icon-only"
                      icon={bagOutline}
                    ></IonIcon>
                    {/* <IonBadge slot="start">11</IonBadge> */}
                  </IonButton>
                  <button id="numberItems" onClick={() => goToCart()}>
                    2
                  </button>
                </IonButtons>
              </IonCol>
              {/* MENU ICON */}
              <IonCol size="2">
                <IonButtons>
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
              </IonCol>
            </IonRow>
          </IonToolbar>

          {/* SEARCH BAR */}
          <IonGrid>
            <IonRow>
              <IonCol id="searchCol">
                <IonSearchbar
                  type="text"
                  animated={true}
                  value={searchInput}
                  onIonChange={searchHandler}
                ></IonSearchbar>
              </IonCol>
            </IonRow>
          </IonGrid>
          {/* DRINK CATEGORIES BUTTONS */}
          <IonGrid className="contentGrid">
            <IonRow>
              <IonCol className="ion-text-start">
                <h4>Shop by Category</h4>
              </IonCol>
            </IonRow>
            <IonRow className="ion-margin-top">
              <IonCol size="5" className="ion-text-center">
                <div
                  className="categoryBtn"
                  role="button"
                  onClick={() => setDrinkType("smoothie")}
                >
                  Smoothie
                </div>
              </IonCol>
              <IonCol size="5" className="ion-text-center">
                <div
                  className="categoryBtn"
                  role="button"
                  onClick={() => setDrinkType("juice")}
                >
                  Juice
                </div>
              </IonCol>
              <IonCol size="5" className="ion-text-center">
                <div
                  className="categoryBtn"
                  role="button"
                  onClick={() => setDrinkType("")}
                >
                  All
                </div>
              </IonCol>
            </IonRow>

            {/* DRINKS MENU */}
            <IonRow>
              <IonCol className="ion-text-start ion-margin-top">
                <h4>Drinks</h4>
              </IonCol>
            </IonRow>

            {/* DRINK CARDS */}
            <IonRow>
              {/* loop all drinks to drink cards */}
              {drinksList.map((item, index) => {
                return (
                  (item["name"] + "").toLowerCase().includes(searchInput) &&
                  (item["type"] + "").includes(drinkType) && 
                  (
                    <IonCol key={index} size="6" className="ion-text-center">
                      <div>
                        <IonIcon
                          className="addToCartBtn"
                          slot="icon-only"
                          icon={addCircle}
                        ></IonIcon>
                      </div>
                      <IonRow onClick={() => openDetailModal(item)}>
                        <IonCard className="drinkCard">
                          <img
                            src={
                              "http://localhost:8000/public/image/" +
                              item["image_name"]
                            }
                            alt="drink img"
                          />
                          <div className="drinkDetails">
                            <IonLabel>
                              {item["name"]}
                              <br />${item["price"]}
                              <br />
                            </IonLabel>
                          </div>
                        </IonCard>
                      </IonRow>
                    </IonCol>
                  )
                );
              })}
            </IonRow>

            {/* AUTHOR SIGNATURE */}
            <IonRow>
              <IonCol className="signature ion-text-end">
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
              <img
                className="drinkImg"
                src={
                  "http://localhost:8000/public/image/" +
                  (chosenItem ? chosenItem["image_name"] : "")
                }
                alt="drink img"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFooter>
          <IonRow>
            <IonCol>
              <IonCard className="drinkCardModal ion-text-center">
                <IonRow>
                  <IonCol size="10" className="ion-text-center ion-padding-top">
                    <IonLabel className="drinkLabelModal">
                      {chosenItem ? chosenItem["name"] : ""}
                    </IonLabel>
                    <div className="ion-padding-top">
                      <p>{chosenItem ? chosenItem["description"] : ""}</p>
                    </div>
                    <div className="ion-padding-top">
                      <IonLabel className="drinkLabelModal">
                        ${chosenItem ? chosenItem["price"] : ""}
                      </IonLabel>
                    </div>
                  </IonCol>
                  <IonCol size="2" className="ion-text-center ion-padding-top">
                    <p>
                      <IonIcon
                        onClick={increaseItemQuantity}
                        className="addRemoveBtnModal"
                        slot="icon-only"
                        icon={addCircleOutline}
                      ></IonIcon>
                      <br />
                      <strong>{itemQuantity}</strong>
                      <br />
                      <IonIcon
                        onClick={decreaseItemQuantity}
                        className="addRemoveBtnModal"
                        slot="icon-only"
                        icon={removeCircleOutline}
                      ></IonIcon>
                    </p>
                  </IonCol>
                  <IonCol className="ion-text-center ion-padding-bottom">
                    <button
                      className="addCartBtnModal"
                      onClick={addToCartHandler}
                    >
                      Add to cart
                    </button>
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
