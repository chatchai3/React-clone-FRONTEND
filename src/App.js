
import './App.css';
import React,{useEffect,useState} from "react";

import Navbar from './Navbar';
import Head from './Head';
import Footer from './Footer';






function App(props) {
  const [status,setstatus] = useState(true)
  const search=()=>{
    console.log('ok')
    const input = document.getElementById('drop_menu')
    const search_ = document.getElementById('search-box')
    const input_f = document.getElementById('input-focus')
    if(status){
      search_.classList.remove('search-show')
      input.classList.add('drop-menu_show')
      search_.classList.add('search-none-button')
      console.log(status)
      setstatus(false)
      
    }else{
      input.classList.remove('drop-menu_show')
      search_.classList.remove('search-none-button')
      search_.classList.add('search-show')
      console.log(status)
      setstatus(true)
    }
    
  }
  const search_box=()=>{
    const search_ = document.getElementById('search-box')
    
    const input = document.getElementById('drop_menu')
    search_.classList.remove('search-none')
    search_.classList.remove('search-none-button')
    input.classList.remove('drop-menu_show')
    search_.classList.add('search-show')
    
    console.log("กด")
  }
  
 
  useEffect( ()=>{

    fetch('http://localhost:4000/products')
    .then(res=>res.json())
    .then(result=>(localStorage.setItem("data", JSON.stringify(result))))

    fetch('http://localhost:4000/anime')
    .then(res=>res.json())
    .then(result=>(localStorage.setItem("data-2", JSON.stringify(result))))
    
    
    
  },[])
 
  
  return (
    <div className='main' >
        <div  onMouseDown={search_box} >
            <div className='NAV-MAIN'>
                <Navbar search_={search}></Navbar>
            </div>
            
            <div className='container '>
            
                <div className=' m-5'>
                  
                <Head/>
                </div>
                
                       
            
            </div>
            
      </div>
      <Footer/>
    </div>
          
          
       
        
   
  );

}

export default App;
