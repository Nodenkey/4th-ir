import axios from "axios";

// create register action
export const registerUser = (details) => {
    // because we are going to do an async call we use thunk to halt the dispatch process and
    // add to firebase before continuing to go update the state.
    // destructure getFirebase and getFirebase from the extraArgument on the thunk

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to firestore
        const firestore = getFirestore();
        firestore.collection('details').add({
            ...details,
            createdAt: new Date()
        }).then(() => {
            const res = axios.post("https://young-mesa-67771.herokuapp.com/counter-register", {details});
            const data = res.then((response) => response.data);
            data.then(res => {
                res === 'OK' && dispatch({
                    type: 'REGISTER_USER',
                    details
                })
            })
                .catch(err => {
                        return dispatch({
                            type: 'REGISTER_USER_ERR',
                            err
                        })
                    }
                );
        }).catch(err => {
            return dispatch({
                type: 'REGISTER_USER_ERR',
                err
            })
        })
    }
}

export const removeRegistered = () => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_REGISTER'
        })
    }
}
