import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Content = () => {
  const [joke, setJoke] = useState();
  const [error, setError] = useState();

  const location = useLocation();
  const category = location.pathname.slice(1)
    ? location.pathname.slice(1)
    : "Any";

  console.log(location);

  const fetchData = () => {
    axios
      .get(`https://v2.jokeapi.dev/joke/${category}?type=single`)
      .then((res) => {
        if (res.data.error) setError(res.data.message);
        else {
          setJoke([res.data.joke]);
          setError(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div style={{ paddingTop: "50px" }}>
      <Card joke={joke} fetchData={fetchData} error={error} />
    </div>
  );
};
