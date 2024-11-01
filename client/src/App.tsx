import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import './App.css'
import { AuthProvider } from './context/Auth.context';
import { HomePage } from './pages/Home/Home.page';
import { LoginPage } from './pages/Login/Login.page';
import { MenuProvider } from './context/Menu.context';
import { DocumentProvider } from './context/Document.context';
import { DocumentsPage } from './pages/Documents/Documents.page';
import { DocumentEditorPage } from './pages/Documents/DocumentEditor.page';
/* import { useEffect } from 'react';
 *//* import {gapi} from 'gapi-script'
import { GoogleOAuthProvider } from '@react-oauth/google'; */
import { PatternPage } from './pages/Pattern/Pattern.page';
import { AdminPage } from './pages/Admin/Admin.page';
import { OrganizationsPage } from './pages/Admin/Organizations.page';
import { UsersPage } from './pages/Admin/Users.page';
import { MisOTs } from './pages/OTs/MisOTs.page';
import { CalendarPage } from './pages/Calendar/Calendar.page';
import { UserPage } from './pages/Admin/User.page';
import { OrganizationPage } from './pages/Admin/Organization.page';
import { UsersProvider } from './context/Users.context';


setupIonicReact();

const Project = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/documents">
            <DocumentsPage />
          </Route>
          <Route exact path="/new-document">
            <DocumentEditorPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/admin/clients">
            <OrganizationsPage />
          </Route>
          <Route exact path="/new-client">
            <OrganizationPage />
          </Route>
          <Route exact path="/admin/users">
            <UsersPage />
          </Route>
          <Route exact path="/new-user">
            <UserPage />
          </Route>
          <Route exact path="/my-ots">
            <MisOTs />
          </Route>
          <Route exact path="/calendar">
            <CalendarPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/create-pattern">
            <PatternPage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

const App: React.FC = () => (
  <AuthProvider>
    <UsersProvider>
      <MenuProvider>
        <DocumentProvider>
          {/* <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}.apps.googleusercontent.com`}> */}
          <Project />
          {/* </GoogleOAuthProvider> */}
        </DocumentProvider>
      </MenuProvider>
    </UsersProvider>
  </AuthProvider>
);

export default App;
