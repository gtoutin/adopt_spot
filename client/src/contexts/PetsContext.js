import { createContext, useEffect, useState } from "react";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState();

  // Fetch all users from database
  useEffect(() => {
    fetch(`/pets`)
      .then((res) => res.json())
      .then((data) => {
        setPets(data.results);
      });
  }, []);

  return (
    <PetsContext.Provider value={{pets}}>
        {children}
    </PetsContext.Provider>
  );
};