import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import "./SignUp.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-padding-top ion-padding-end ion-text-right ion-no-border">
        <IonToolbar>
          <IonButton className="signup-btn">
            <strong>Sign Up</strong>
          </IonButton>
          <IonButton className="signin-btn" disabled={true}>
            <strong>Sign In</strong>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      {/* BODY */}
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <h1>SIGN UP</h1>
              <p>To Enjoy The Freshest!</p>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-margin-top">
          <IonRow className="ion-justify-content-center">
            <IonCol size="10">
                <IonInput placeholder="Username_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
                <IonInput placeholder="Email_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
                <IonInput placeholder="Password_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end ion-margin-top">
            <IonCol size="11">
              <IonButton>Sign Up</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end">
            <IonCol size="11">
              <p>Already a member? <a href="#">Sign In.</a></p>
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>

    </IonPage>
  );
};

export default Login;
