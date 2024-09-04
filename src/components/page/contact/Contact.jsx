import React from 'react';
import "./contact.css";
import bgContact from '../../media/bgContact.png';
import Footer from '../../header/Footer';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact() {
  return (
    <>
      <div id="contact" className='container'>
        <div className="conOne">
          <h1>CONTACT WITH US</h1>
          <form id='conUs'>
            <input type="text" placeholder='Enter your First Name' id='name' name='name' required />
            <input className='fieldTwo' type="text" placeholder='Enter your Last Name' id='name' name='name' required />
            <br />
            <br />
            <input type="text" placeholder='Enter your Subject' id='name' name='name' required />
            <input className='fieldTwo' type="text" placeholder='Enter your Email' id='name' name='name' required />
            <br />
            <br />
            <textarea type="text" placeholder='Enter your Message' id='name' name='name' required />
            <br />
            <br />
            <button type='submit'>Submit</button>
          </form>
          <div className="conSec">
            <b style={{color:'var(--heading)',fontSize: '16px'}}>Email :</b><span> <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>vishamit8827@gmail.com</a></span>
            <br />
            <br />
            <b style={{color:'var(--heading)',fontSize: '16px'}}>Social Media : </b>
            <span className='iconSection'>
            <FacebookRoundedIcon className='conIcon'/><InstagramIcon className='conIcon'/><MarkEmailReadOutlinedIcon className='conIcon'/><WhatsAppIcon className='conIcon'/>
            </span>
            
          </div>
        </div>
        <div className="conTwo">
          <img src={bgContact} alt="" />
        </div>
      </div>

      <Footer />
    </>

  )
}
