import { createContext, useEffect, useState } from "react";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import db from "@/firebase/firebase";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

const UserStates = (props) => {
  const usersCollectionRef = collection(db, "users");
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const checkEmailSignIn = async (email) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    return userData.exists() === true;
  };
  const checkEmailSignUp = async (email) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    return userData.exists() === false;
  };

  const loginUser = async (email, password) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    if (userData.exists() && userData.data().password == password) {
      router.replace("/dashboard");
      setUserData(userData.data());
    } else {
      console.log("Un-authenticated User");
    }
  };

  const signUpUser = async (email, password, currency, referral) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    if (userData.exists()) {
      console.log("Already exists");
      return;
    }
    await setDoc(userRef, {
      name: email.split("@")[0],
      email: email,
      password: password,
      currency: currency,
      referral: referral,
    });
    router.replace("/login");
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loginUser,
        checkEmailSignIn,
        checkEmailSignUp,
        signUpUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStates;
