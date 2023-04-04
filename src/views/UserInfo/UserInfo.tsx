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
  import "./UserInfo.css";
  import { personCircleOutline, bagOutline, chevronForwardOutline } from "ionicons/icons";
  import { useIonRouter } from "@ionic/react";
  
  const UserInfo: React.FC = () => {
    const router = useIonRouter();
    // move to cart
    const GoToCart = () => {
      router.push("/cart");
    };
  
    return (
        <IonPage id="main-content">
          {/* HEADER  */}
          <IonHeader className="ion-text-center ion-no-border">
            
          </IonHeader>
  
          {/* MAIN CONTENT */}
          <IonContent fullscreen className="ion-text-center">

          <IonList lines="full">
              <IonItem className="listItem">
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

          </IonContent>
        </IonPage>
    );
  };
  
  export default UserInfo;
  