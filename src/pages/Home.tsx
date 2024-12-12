import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonProgressBar,
  IonButton,
} from '@ionic/react';
import { walkOutline, flameOutline, mapOutline, timeOutline } from 'ionicons/icons';
import 'animate.css';
import './Home.css';
import { useEffect, useState } from 'react';


const Home: React.FC = () => {
  const [greeting, setGreeting] = useState('');

  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "The only bad workout is the one that didn't happen.",
    "What seems impossible today will one day be your warm-up.",
    "Don't limit your challenges. Challenge your limits.",
    "Believe in yourself and all that you are."
  ];
  
  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <IonPage>
      {/* Header */}
      
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Fitness Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding" color="dark">
        {/* Greeting Section */}
        <div className="greeting-container animate__animated animate__fadeInDown">
          <h1 className="greeting-text">{greeting}</h1>
          <p className="greeting-subtext">Track your fitness progress and achieve your goals!</p>
        </div>
        <div className="quote-container animate__animated animate__fadeInUp">
        <p className="motivational-quote">"{getRandomQuote()}"</p>
      </div>

      <IonGrid className="quick-actions animate__animated animate__fadeInUp">
  <IonRow>
    <IonCol>
      <IonButton expand="block" color="success">
        Start Workout
      </IonButton>
    </IonCol>
    <IonCol>
      <IonButton expand="block" color="warning">
        View Stats
      </IonButton>
    </IonCol>
  </IonRow>
</IonGrid>


        {/* Fitness Stats */}
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard color="dark" className="stat-card animate__animated animate__fadeInLeft">
                <IonCardHeader>
                  <IonIcon icon={walkOutline} className="stat-icon" />
                  <IonCardTitle>Steps</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>10,245</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard color="dark" className="stat-card animate__animated animate__fadeInRight">
                <IonCardHeader>
                  <IonIcon icon={flameOutline} className="stat-icon" />
                  <IonCardTitle>Calories Burned</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>500 kcal</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard color="dark" className="stat-card animate__animated animate__fadeInLeft">
                <IonCardHeader>
                  <IonIcon icon={mapOutline} className="stat-icon" />
                  <IonCardTitle>Distance</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>8 km</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard color="dark" className="stat-card animate__animated animate__fadeInRight">
                <IonCardHeader>
                  <IonIcon icon={timeOutline} className="stat-icon" />
                  <IonCardTitle>Active Minutes</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>75 min</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="goal-progress animate__animated animate__fadeInUp">
  <h2>Today's Progress</h2>
  
  <IonCard color="dark">
    <IonCardContent>
      <p>Steps: 10,245 / 12,000</p>
      <IonProgressBar value={10245 / 12000}></IonProgressBar>
    </IonCardContent>
  </IonCard>

  <IonCard color="dark">
    <IonCardContent>
      <p>Calories Burned: 500 / 600 kcal</p>
      <IonProgressBar value={500 / 600}></IonProgressBar>
    </IonCardContent>
  </IonCard>

  <IonCard color="dark">
    <IonCardContent>
      <p>Active Minutes: 75 / 90 min</p>
      <IonProgressBar value={75 / 90}></IonProgressBar>
    </IonCardContent>
  </IonCard>
</div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
