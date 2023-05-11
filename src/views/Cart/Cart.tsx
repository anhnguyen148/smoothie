import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonIcon,
  IonToolbar,
  IonCard,
  IonImg,
  IonItem,
  IonCardContent,
  IonCardHeader,
  IonFooter,
} from "@ionic/react";
import "./Cart.css";
import { chevronBackOutline, addCircleOutline, removeCircleOutline, navigate } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";import { createHashHistory } from "history";


const Cart: React.FC = () => {
  const router = useIonRouter();

  // move back to listing
  let history = createHashHistory();
  const goBack = () => {
    history.go(-1);
  };

  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-text-center ion-no-border">
        <IonToolbar className="ion-padding-top">
          <IonButtons slot="start">
            <IonIcon
              slot="icon-only"
              icon={chevronBackOutline}
              onClick={() => goBack()}
            ></IonIcon>
          </IonButtons>
          <IonGrid className="cartGrid">
            <IonRow className="ion-text-start">
                <p id="cart">Your cart</p>
            </IonRow>
            <IonRow className="ion-text-start ion-margin-start">
                <p id="itemAmount">2 items</p>
            </IonRow>
        </IonGrid>
        </IonToolbar>
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
        <IonGrid className="cartGrid ion-padding-top">
              <IonRow>
                  <IonCol size="3">
                    <IonCard className="itemImgCard">
                      <img src="http://localhost:8000/public/image/plum.png" alt="smoothie item" />
                      </IonCard>                       
                  </IonCol>
                  <IonCol size="9">
                      <IonCardHeader className="itemName">
                          <h5>Plum Smoothie</h5>
                      </IonCardHeader>
                      <IonCardContent className="price">
                        <IonRow>
                          <IonCol>
                            <p>$7.49</p>
                          </IonCol>
                          <IonCol>
                            <IonRow className="ion-text-center">
                              <IonCol className="ion-no-padding">
                                <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={addCircleOutline}></IonIcon></p>
                              </IonCol>
                              <IonCol className="ion-no-padding">
                                <p><strong>1</strong></p>
                              </IonCol>
                              <IonCol className="ion-no-padding">
                                <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={removeCircleOutline}></IonIcon></p>
                              </IonCol>
                            </IonRow>
                          </IonCol>
                        </IonRow>
                      </IonCardContent>                           
                  </IonCol>
              </IonRow>
                
              {/* <IonRow>
                  <IonCol size="3">
                    <IonCard className="itemImgCard">
                      <img src="/assets/celery.png" alt="smoothie item" />
                      </IonCard>                       
                  </IonCol>
                  <IonCol size="9">
                      <IonCardHeader className="itemName">
                          <h5>Celery Juice</h5>
                      </IonCardHeader>
                      <IonCardContent className="price">
                        <IonRow>
                          <IonCol>
                            <p>$6.49</p>
                          </IonCol>
                          <IonCol>
                            <IonRow className="ion-text-center">
                              <IonCol className="ion-no-padding">
                                <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={addCircleOutline}></IonIcon></p>
                              </IonCol>
                              <IonCol className="ion-no-padding">
                                <p><strong>1</strong></p>
                              </IonCol>
                              <IonCol className="ion-no-padding">
                                <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={removeCircleOutline}></IonIcon></p>
                              </IonCol>
                            </IonRow>
                          </IonCol>
                        </IonRow>
                      </IonCardContent>                           
                  </IonCol>
              </IonRow> */}
                {/* <IonRow className="ion-margin-bottom">
                    <IonCol size="3">
                      <IonCard className="itemImgCard">
                        <img src="/assets/strawberry.png" alt="smoothie item" />
                        </IonCard>                       
                    </IonCol>
                    <IonCol size="9">
                        <IonCardHeader className="itemName">
                            <h5>Strawberry Pink Dream</h5>
                        </IonCardHeader>
                        <IonCardContent className="price">
                            <p>$7.49</p>
                        </IonCardContent>                           
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom">
                    <IonCol size="3">
                      <IonCard className="itemImgCard">
                        <img src="/assets/papaya.png" alt="smoothie item" />  
                      </IonCard>                          
                    </IonCol>
                    <IonCol size="9">
                        <IonCardHeader className="itemName">
                            <h5>Tropical Breeze</h5>
                        </IonCardHeader>
                        <IonCardContent className="price">
                            <p>$8.49</p>
                        </IonCardContent>                           
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom">
                    <IonCol size="3">
                      <IonCard className="itemImgCard">
                        <img src="/assets/strawberry.png" alt="smoothie item" />
                        </IonCard>                       
                    </IonCol>
                    <IonCol size="9">
                        <IonCardHeader className="itemName">
                            <h5>Strawberry Pink Dream</h5>
                        </IonCardHeader>
                        <IonCardContent className="price">
                            <p>$7.49</p>
                        </IonCardContent>                           
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom">
                    <IonCol size="3">
                      <IonCard className="itemImgCard">
                        <img src="/assets/papaya.png" alt="smoothie item" />  
                      </IonCard>                          
                    </IonCol>
                    <IonCol size="9">
                        <IonCardHeader className="itemName">
                            <h5>Tropical Breeze</h5>
                        </IonCardHeader>
                        <IonCardContent className="price">
                            <p>$8.49</p>
                        </IonCardContent>                           
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom">
                    <IonCol size="3">
                      <IonCard className="itemImgCard">
                        <img src="/assets/strawberry.png" alt="smoothie item" />
                        </IonCard>                       
                    </IonCol>
                    <IonCol size="9">
                        <IonCardHeader className="itemName">
                            <h5>Strawberry Pink Dream</h5>
                        </IonCardHeader>
                        <IonCardContent className="price">
                            <p>$7.49</p>
                        </IonCardContent>                           
                    </IonCol>
                </IonRow>
                <IonRow className="ion-margin-bottom">
                    <IonCol size="3">
                      <IonCard className="itemImgCard">
                        <img src="/assets/papaya.png" alt="smoothie item" />  
                      </IonCard>                          
                    </IonCol>
                    <IonCol size="9">
                        <IonCardHeader className="itemName">
                            <h5>Tropical Breeze</h5>
                        </IonCardHeader>
                        <IonCardContent className="price">
                            <p>$8.49</p>
                        </IonCardContent>                           
                    </IonCol>
                </IonRow> */}
        </IonGrid>
      </IonContent>

      <IonFooter className="cartFooter">
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol>
              <p id="totalBtn">Total: $13.89</p>
            </IonCol>
            <IonCol>
              <button id="checkOutBtn">Check Out</button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Cart;
