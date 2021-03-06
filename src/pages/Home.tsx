import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
} from '@ionic/react';
import React from 'react';

import { useLaunchesPastQuery } from '../generated/graphql';




const Home: React.FC = () => {
 // const { data, loading } = useQuery<LaunchesPastQuery>(LAUCHES_PAST_QUERY);
 const { data, loading } = useLaunchesPastQuery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.launchesPast.map((launch:any )=> (
            <IonItem key={launch.id as string}>
              {launch.mission_name} | {launch.rocket.rocket_name}
            </IonItem>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
