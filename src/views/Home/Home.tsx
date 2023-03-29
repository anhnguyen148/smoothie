import {
  IonContent,
  IonHeader,
  IonPage,
  IonFooter,
} from "@ionic/react";
import { useEffect } from "react";
import "./Home.css";
import { useIonRouter } from "@ionic/react";


const Home: React.FC = () => {
  const router = useIonRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("branch-list");
    }, 2000);
  });

  return (
    <IonPage>
      <IonHeader className="ion-text-center ion-no-border">
        <img id="logo" src="/assets/logo.png" />
      </IonHeader>

      <IonContent fullscreen className="ion-text-center">
      </IonContent>

      <IonFooter className="ion-no-border">
      <img id="field" src="/assets/field.png" />
      </IonFooter>
    </IonPage>
  );
};

export default Home;
