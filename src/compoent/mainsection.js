import React , {useEffect ,useState ,useCallback} from "react";

function Body()
        {
            const [profile , setProfile] =  useState([]);
            const [numberOfProfile , setnumberOfProfile] =  useState(``);

    const fetchData = useCallback( async (count) => {
        try{

           // const randomProfileGenerate=Math.floor(Math.random()*10000+1)
        
        const response= await fetch(`https://api.github.com/users?per_page=${count}`);
        const data=  await response.json();
        setProfile(data);
  

    } 
    catch(error)
  {
    alert("Error fetching data:", error);
  }
          
}
);

   

  
           
        
        
    useEffect(()=>
    {
        fetchData(10);
        
    },[])

    return (

        <>
       
        <div id="seach-bar">
                 <div >
                 <input type="text" placeholder="Search here" id="search-input" value={numberOfProfile} onChange={(e)=>{setnumberOfProfile(e.target.value)}}></input>
                <button id="i" onClick={()=>fetchData(Number(numberOfProfile))}><i className="fa-solid fa-magnifying-glass"></i></button> 
                 </div>
                
            </div>
            <br></br>
            <hr></hr>
        
            <div id="profiles">
        
                {
                    profile.map((value)=>{
        
                        return(
                    <div key={value.id} id="profile">
                     <div id="profile-img">
                                <img src={value.avatar_url}></img>
                      </div>
                      <div id="profile-name">
                            <h2>{value.login}</h2>
                        </div>
                        <div id="profile-link">
                           <a href={value.html_url}   target="_blank"><button id="btn">Profile</button></a>
                        </div>
                     </div>
                        )
                    })
                }
                
                
            </div>
            </>
        
    )
}

    export default Body;