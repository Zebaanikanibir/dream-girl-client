import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <section className="contact">
            <div className="form1">
            <h1 className=" text-white form-head">Contact Us</h1>
            <form className="container form12">
                       
                        <div class="form-group">
                          
                          <input type="text" className="form-control inputBox" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                      </div>
                      <div class="form-group">
                          <input type="email" className="form-control inputBox" id="exampleInputPassword1" placeholder="Your Email" name="email" />
                      </div>
                        

                        
                        <div class="form-group">
                            <input type="password" className="form-control inputBox" id="exampleInputPassword1" placeholder="About Cost" name="password" />
                        </div>
                        <div class="form-group">
                            <input type="number" className="form-control inputBox" id="exampleInputPassword1" placeholder="Phone Number" name="number" />
                        </div>
                      
                        <div class="form-group">
                        
                        <textarea style={{height: '200px'}} className="form-control" placeholder="Your Message" aria-label="With textarea"/>
                            
                        </div>
                        <button id="send">Send</button>
                    </form>

            </div>

        </section>
  )
}

export default Contact
