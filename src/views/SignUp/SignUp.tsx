import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import "./SignUp.css";
import { useState } from "react";
import axios from "axios";

const SignUp: React.FC = () => {
  const router = useIonRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // move to sign in page
  const GoToSignIn = () => {
    router.push("sign-in");
  };
  // move back to listing
  const Listing = () => {
    router.push("branch-list");
  };

  // sign up handler
  const signUpHandler = () => {
    console.log(email, username, password);

    axios.post("http://localhost:8000/customer/signup",
      {
        "email": email,
        "username": username,
        "password": password,
      }
    ).then((res: any) => {
      
      console.log(res);
    })
  }

  return (
    <IonPage>
      {/* HEADER */}
      <IonHeader className="ion-padding-top ion-padding-end ion-text-right ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonIcon
              slot="icon-only"
              icon={chevronBackOutline}
              onClick={() => Listing()}
            ></IonIcon>
          </IonButtons>
          <IonRow>
          <IonCol></IonCol>
            <IonCol>
              <button className="signOutBtn">Sign Up</button>
            </IonCol>
            <IonCol>
              <button className="signOutBtn" onClick={() => GoToSignIn()}>Sign In</button>
            </IonCol>
          </IonRow>
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
              <IonInput value={username} onIonChange={(e: any) => setUsername(e.target.value)} placeholder="Username_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
              <IonInput value={email} onIonChange={(e: any) => setEmail(e.target.value)} placeholder="Email_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="10">
              <IonInput type="password" value={password} onIonChange={(e: any) => setPassword(e.target.value)} placeholder="Password_" class="custom"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end ion-margin-top">
            <IonCol size="11">
              <button onClick={signUpHandler} className="signOutBtn">Sign Up</button>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-end">
            <IonCol size="11">
              <p>
                Already a member? <a onClick={() => GoToSignIn()}>Sign In.</a>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
