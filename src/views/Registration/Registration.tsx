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
    IonTabButton,
    IonItem,
    IonLabel,
    IonInput
  } from "@ionic/react";
  import "./Registration.css";
  
  const Login: React.FC = () => {
    return (
      <IonPage>
        {/* HEADER */}
        <IonHeader className="ion-padding-top ion-padding-end ion-text-right ion-no-border">
        <IonToolbar>
          <IonTabButton className="signup-btn" tab="home" href="/home">
            <strong>Sign Up</strong>
          </IonTabButton>
          <IonButton className="signin-btn">
            <strong>Sign In</strong>
          </IonButton>
        </IonToolbar>
        </IonHeader>
  
        {/* BODY */}
        <IonContent fullscreen>
        
          
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default Login;
  