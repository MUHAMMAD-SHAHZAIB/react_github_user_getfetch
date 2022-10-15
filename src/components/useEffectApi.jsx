import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ApiCard from "./ApiCard";

const useEffectApi = () => {
  const [gethubArray, setGetHubArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserapi = async () => {
    try {
      setLoading(false)
      const url = "https://api.github.com/users";
      const res = await fetch(url);
      const data = await res.json();
      setGetHubArray(data);
      console.log(data);
    } catch (error) {
      console.log("tri set error :" + error);
    }
  };

  //useEffect define for the automatically run first time the api.
  useEffect(() => {
    getUserapi();
  }, []);

  // if condition emplients for loading and api card data show
  if(loading===true){
    setLoading(false)
    return <Loading />
  }
  return (
    <>
      <ApiCard gethubArray={gethubArray} />
    </>
  );
};
 
export default useEffectApi;
