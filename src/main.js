import React , {useEffect ,useState,useCallback} from "react";
import ReactDom from "react-dom/client";
import Header from "./compoent/headpart";
import Body from "./compoent/mainsection";



function Gitubeprofile()
{  

   return (
    <>

       <Header/>
       <Body/>
      
    </>
   
) 
}
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Gitubeprofile/>);