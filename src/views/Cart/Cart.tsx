import {
    IonContent,
    IonHeader,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
  } from "@ionic/react";
  import "./Cart.css";
  import { useIonRouter } from "@ionic/react";
  
  const BranchList: React.FC = () => {
    // const router = useIonRouter();
    // move to sign up page
    // const GoToSignUp = () => {
    //   router.push("/sign-up");
    // };
    
  
    return (
      <IonPage>
        {/* HEADER */}
        <IonHeader className="ion-text-center ion-no-border">
          <img className="logo-md" src="/assets/logo.png" alt="logo" />
        </IonHeader>
  
        {/* BODY */}
        <IonContent fullscreen>
          <IonGrid>
            <IonRow className="ion-text-end">
              {/* <IonCol size="11">
                <IonButton className="signup-btn" onClick={() => GoToSignUp()}>
                  Sign Up
                </IonButton>
                <IonButton className="signin-btn" onClick={() => GoToSignIn()}>
                  Sign In
                </IonButton>
              </IonCol> */}
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              
            </IonRow>
            <IonRow>
              
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default BranchList;
  