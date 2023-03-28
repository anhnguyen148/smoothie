import { IonContent } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent class="ion-text-center">
      <img id="logo" src="/assets/logo.png" />
    </IonContent>
  );
};

export default ExploreContainer;
