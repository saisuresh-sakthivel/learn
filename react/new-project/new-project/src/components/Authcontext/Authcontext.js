import React from 'react'
const Authcontext = React.createContext({
    authenticated:false,
    login:(()=>{})
});
export default Authcontext;