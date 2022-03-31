import React from 'react';

let usContext = React.createContext();
const UserProvider = usContext.Provider;

export { UserProvider };
export default usContext;