import React from 'react'
// 1 to create context
const UserContext=React.createContext();
//2  to create instance of provider
const UserProvider=UserContext.Provider;
//3 to create instance of consumer
const UserConsumer=UserContext.Consumer;

export{UserProvider,UserConsumer}
export default UserContext