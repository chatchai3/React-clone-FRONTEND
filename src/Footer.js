import React from "react";
import './App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer=()=>{
    return(
        <div className="container-fluid ">
            <div className=" container Footer_">
                <div className="box_f">
                    <div className="box_fb"><FacebookIcon/></div>
                    <div className="box_fb"><InstagramIcon/></div>
                    <div className="box_fb"><TwitterIcon/></div>
                    <div className="box_fb"><YouTubeIcon/></div>
                </div>
                <div className="m-col">
                    <div className="row mb-2">
                        <div className="col-3 m-0">คำอธิบายเสียง</div>
                        <div className="col-3 m-0">ศูนย์ช่วยเหลือ</div>
                        <div className="col-3 m-0">บัตรของขวัญ</div>
                        <div className="col-3 m-0">ศูนย์สื่อมวลชน</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3 m-0">นักลงทุนสัมพันธ์</div>
                        <div className="col-3 m-0">ตำแหน่งงาน</div>
                        <div className="col-3 m-0">ข้อกำหนดการใช้งาน</div>
                        <div className="col-3 m-0">ความเป็นส่วนตัว</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-3 m-0">ประกาศแจ้งทางกฎหมาย</div>
                        <div className="col-3 m-0">การตั้งค่าคุ้กกี้</div>
                        <div className="col-3 m-0">ข้อมูลบริษัท</div>
                        <div className="col-3 m-0">ติดต่อเรา</div>
                    </div>
                    <button className="font_bt">รหัสบริการ</button>
                    
                </div>
                <div className="mt-2 last">
                    2023 React+MongoDB By Chatchai
                </div>

            </div>
        </div>
        
    )
}
export default Footer;