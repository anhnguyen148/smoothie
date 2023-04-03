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
import { chevronBackOutline, addCircleOutline, removeCircleOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";

const BranchList: React.FC = () => {
  const router = useIonRouter();
  // move to sign up page
  // const GoToSignUp = () => {
  //   router.push("/sign-up");
  // };

  // move back to listing
  const Listing = () => {
    router.push("listing");
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
              onClick={() => Listing()}
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
        <IonGrid className="cartGrid">
            <IonCard className="itemCard ion-no-border">
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
                          <IonRow>
                            <IonCol>
                              <p>$7.49</p>
                            </IonCol>
                            <IonCol>
                              <IonRow className="ion-text-center">
                                <IonCol className="ion-no-padding">
                                  <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={addCircleOutline} onClick={() => Listing()}></IonIcon></p>
                                </IonCol>
                                <IonCol className="ion-no-padding">
                                  <p><strong>1</strong></p>
                                </IonCol>
                                <IonCol className="ion-no-padding">
                                  <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={removeCircleOutline} onClick={() => Listing()}></IonIcon></p>
                                </IonCol>
                              </IonRow>
                            </IonCol>
                          </IonRow>
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
                          <IonRow>
                            <IonCol>
                              <p>$8.49</p>
                            </IonCol>
                            <IonCol>
                              <IonRow className="ion-text-center">
                                <IonCol className="ion-no-padding">
                                  <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={addCircleOutline} onClick={() => Listing()}></IonIcon></p>
                                </IonCol>
                                <IonCol className="ion-no-padding">
                                  <p><strong>1</strong></p>
                                </IonCol>
                                <IonCol className="ion-no-padding">
                                  <p><IonIcon className="addRemoveBtn" slot="icon-only" icon={removeCircleOutline} onClick={() => Listing()}></IonIcon></p>
                                </IonCol>
                              </IonRow>
                            </IonCol>
                          </IonRow> 
                        </IonCardContent>                           
                    </IonCol>
                </IonRow>

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
            </IonCard>
        </IonGrid>
      </IonContent>

      <IonFooter className="cartFooter">
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol>
              <p id="totalBtn">Total: $15.89</p>
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

export default BranchList;
