import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonFooter,
} from "@ionic/react";
import { useEffect } from "react";
import "./Home.css";
import { useIonRouter } from "@ionic/react";


const Home: React.FC = () => {
  const router = useIonRouter();
  const GoToBranchesList = () => {
    router.push("branch-list");
  };

  return (
    <IonPage>
      <IonHeader className="ion-text-center ion-no-border">
        <img id="logo" src="/assets/logo.png" alt="logo"/>
      </IonHeader>

      <IonContent fullscreen className="ion-text-center">
      <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center ion-margin-top">
              <img id="girl" src="/assets/home-girl1.png" alt="branch girl"/> 
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" className="startBtnCol ion-text-center">
              <IonButton className="startBtn ion-margin-top" onClick={() => GoToBranchesList()}>
                <strong>Get Started!</strong>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>        
         
      </IonContent>

      <IonFooter className="ion-no-border">        
        {/* <img id="field" src="/assets/field-sm.png" alt="footer img"/>       */}
      </IonFooter>
    </IonPage>
  );
};

export default Home;
