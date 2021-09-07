import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    console.log(user)

    useEffect(() => {
        console.log(profile)
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.diplayName]);

    return <SelectProfileContainer user={user} setProfile={setProfile} />
}