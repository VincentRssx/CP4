import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const JeuxContext = createContext();

export function JeuxProvider({ children }) {
  const [allJeux, setAllJeux] = useState();

  const allJeuxContext = useMemo(() => ({
    allJeux,
    setAllJeux,
  }));
  return (
    <JeuxContext.Provider value={allJeuxContext}>
      {children}
    </JeuxContext.Provider>
  );
}

export const useallJeuxContext = () => {
  return useContext(JeuxContext);
};

JeuxProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
