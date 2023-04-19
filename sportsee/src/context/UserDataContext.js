import React, { createContext, useContext, useState } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../__mocks__/mockData';


const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userMainData, setUserMainData] = useState(USER_MAIN_DATA);
  const [userActivity, setUserActivity] = useState(USER_ACTIVITY);
  const [userAverageSessions, setUserAverageSessions] = useState(USER_AVERAGE_SESSIONS);
  const [userPerformance, setUserPerformance] = useState(USER_PERFORMANCE);
  

  return (
    <DataContext.Provider value={{ userMainData, setUserMainData, userActivity, setUserActivity, userAverageSessions, setUserAverageSessions, userPerformance, setUserPerformance }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };