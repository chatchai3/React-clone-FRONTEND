import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar=(props)=>{
    const [status,setstatus] = useState(false)
    const [st,setst] = useState(true)
    window.addEventListener('scroll',()=>{
         let status  = window.scrollY
         if(status>0){
             setst(false)
         }else{
            setst(true)
         }
         
    });
    const search=()=>{
        setstatus(!status)
        props.search_();
    }
    const auto = useRef(null);
    useEffect(()=>{
        auto.current.focus()
    })
    
    return(
        <div>
        <div className={st?'nav_style fixed-top':'nav_style-scroll fixed-top'} >
            <img src='logo.png' className='logo'></img>
            <p>หน้าหลัก</p>
            <p>รายการทีวี</p>
            <p>ภาพยนตร์</p>
            <p>มาใหม่และกำลังฮิต</p>
            <p>รายการของฉัน</p>
            <p>เลือกดูตามภาษา</p>
            <div className='ms-auto mt-3'>
                <div className="drop-wrapper">
                    <div className='search-show'   id='search-box' onClick={search}>
                        <svg className='svg-search' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <div id='drop_menu' className='drop-menu_none' >
                        <div>
                            <div className='search-input'>
                                <svg className='svg-search' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </div>
                            <div>
                                <input placeholder="ค้นหา ค้นหา ค้นหา" ref={auto} />  
                            </div>
                        </div>     
                    </div>  
                    <NotificationsNoneIcon />
                    < ArrowDropDownIcon/>
                    
                </div>     
            </div>
        
        </div>
        <div class="box">
          <div class="bt">
             <h2>ร่างทรง เป็นภาพยนตร์ไทยแนวระทึกขวัญ–สยองขวัญ  </h2>
             
             <button className='bt_play'><PlayArrowIcon className='icon'/>เล่น</button>
             <button className='bt_more'><InfoIcon/>ข้อมูลเพิ่มเติม</button>
          </div>
         
      </div>
        </div>
        
        
        
    )
}
export default Navbar;