// HomeDataContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
// import { delay } from "../util/functions";

const HomeDataContext = createContext();

export const HomeDataProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchHomeData = async () => {
    try {
      // await delay(5000);
      await getDocs(collection(db, "homeInformation")).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setHomeData(data[0]);
        setLoading(false);
        console.log(data[0]);
      });
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <HomeDataContext.Provider value={{ homeData, loading }}>
      {children}
    </HomeDataContext.Provider>
  );
};

export const useHomeDataContext = () => useContext(HomeDataContext);
