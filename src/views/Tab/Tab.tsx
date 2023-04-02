import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonMenuToggle,
  IonButton,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";


function Tab() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          This is the menu content.
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">

              <IonMenuToggle>
                <IonButton>
                  <IonIcon
                    slot="icon-only"
                    icon={personCircleOutline}
                  ></IonIcon>
                </IonButton>
              </IonMenuToggle>

            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  );
}
export default Tab;
