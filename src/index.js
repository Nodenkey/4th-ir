import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import firebase from 'firebase/app'
import fbConfig from "./config/fbConfig";
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase';
import Loading from "./components/loading/loading.component";


// use withExtraArgument on thunk to tag the getFirebase and getFirestore to the thunk in the redux actions
const store = createStore(rootReducer,
    // use compose to combine all the store enhancers(middleware)
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        // add the config file to the reduxFirestore and the reduxFirebase to connect them
        reduxFirestore(fbConfig)
    )
)

const rrfConfig = {
    userProfile: 'users',
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

const AuthIsLoaded = ({children}) => {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <Loading/>;
    return children
}


ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps} >
                <AuthIsLoaded>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </AuthIsLoaded>
            </ReactReduxFirebaseProvider>
        </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
