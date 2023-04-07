import {
  IonContent,
  IonPage,
  IonButtons,
  IonToolbar,
  IonIcon,
  IonRow,
  IonInput,
  IonCol,
  IonGrid,
  IonList,
  IonItem,
  IonLabel,
  IonModal,
} from "@ionic/react";
import "./Payment.css";
import { chevronBackOutline, closeOutline, cardOutline } from "ionicons/icons";
import React, { useState } from "react";
import { createHashHistory } from "history";

const Payment: React.FC = () => {
  let history = createHashHistory();
  const [isOpen, setIsOpen] = useState(false);

  // move back to listing
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
              <p id="cart">Cards & Payment</p>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <IonGrid>
          <IonRow className="ion-padding">
            <IonCol className="ion-text-center">
              <button id="addCardBtn" onClick={() => setIsOpen(true)}>
                + Add payment
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonModal isOpen={isOpen}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonIcon
                slot="icon-only"
                icon={closeOutline}
                onClick={() => setIsOpen(false)}
              ></IonIcon>
            </IonButtons>
            <IonGrid className="infoGrid">
              <IonRow className=" ion-text-start">
                <p id="cart">Add payment</p>
              </IonRow>
            </IonGrid>
          </IonToolbar>
          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h4>Credit/debit card</h4>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-no-padding" size="2">
                  <IonButtons>
                    <IonIcon id="cardIcon"
                      slot="icon-only"
                      icon={cardOutline}
                      onClick={() => setIsOpen(false)}
                    ></IonIcon>
                  </IonButtons>
                </IonCol>
                <IonCol className="ion-no-padding" size="10">
                  <IonList className="infoText">
                    <IonItem>
                      <IonLabel position="stacked">Card number</IonLabel>
                      <IonInput placeholder=" "></IonInput>
                    </IonItem>
                    <IonRow>
                      <IonCol>
                        <IonItem>
                          <IonLabel position="stacked">mm/yy</IonLabel>
                          <IonInput placeholder=" "></IonInput>
                        </IonItem>
                      </IonCol>
                      <IonCol>
                        <IonItem>
                          <IonLabel position="stacked">CVC</IonLabel>
                          <IonInput placeholder=" "></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonList>
                </IonCol>
              </IonRow>
              <IonRow className="ion-padding">
                <IonCol className="ion-text-end">
                  <button id="saveCardBtn">Save card</button>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
