import React from 'react'
import './Contact.css'
// import './brand-page/src/components/Navbar'
const Contact = () => {

  // const [email, setEmail]=useState('');
  // const [isValidEmail,setIsValidEmail]useState(true)



  return (
      <div>
        {/* <Navbar/> */}

        <div className="title">
            <h1>CONTACT US</h1>
            <p>Welcome to Nike's Contact Us page. We value your feedback, questions, and inquiries. Whether you have a concern about your recent Nike purchase, need assistance with our products, or simply want to get in touch, we're here to help.</p>
        </div>

        <div className="soc-btn">
              <button>Via Chat</button>
              <button>Via Call</button>
            </div>


        <div className="contact-content">

            <div className="input">
              <label for="name" className='label'>Name</label>
              <input type="text"></input>
            

            
              <label for="email" className='label'>E-mail</label>
              <input type="email"></input>
            

            
              <label for="email" className='label'>Text</label>
              <input type="text"></input>
            </div>

            <div className="call-center">
              <img src="/images/contact.png" alt="" />
            </div>


        </div>


      </div>




  )
}

export default Contact;