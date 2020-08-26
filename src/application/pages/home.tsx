import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from "@reach/router"

import {getDatabase, SettingsDocument} from '../db';
import {RxDatabase} from 'rxdb';

const Home: React.FC<RouteComponentProps> = (props) => {
    const [blah, setBlah] = useState<any>({a: null, b: null});
    useEffect(()=>{
      let test = async () => {
        try {
          const db: RxDatabase = await getDatabase('test');
          console.log("DB");
          console.log(db);
          const testLoc = {
            address: '111 Front Street',
            city: 'New York, USA',
            code: 'PPP PPP',
          }

          const testContact = {
            name: 'George Tack2',
            location: testLoc,
            phone: '111-111-1111',
            email: 'fake@fakemail.com'
          }

          const settings: SettingsDocument = await db.settings.insert({
            id: '3',
            contractorIcon: '',
            contact: testContact,
            notifications: true
          });

          console.log(settings.notifications);
          console.log(settings.contact);
          setBlah({a: settings.notifications,b: settings.contact});
        } catch (error) {
          console.log(`ERROR: ${error}`);
        }
      }

      test();

    },[blah]);
    return (
      <p>{JSON.stringify(blah.a)} {JSON.stringify(blah.b)}</p>
    )
}

export default Home;