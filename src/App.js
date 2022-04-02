import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="maincontainer">
     <div className="container-fluid">
         <div className="row no-gutter">
            
             <div className="col-md-6 bg-image text-light">
                 <div className='left d-flex align-items-center'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className="col-lg-10 col-xl-7 align-self-center">
                                <ul>
                                    <li className='d-block my-4 fw-bold display-9'>
                                       <i className="bi bi-search mr-4" style={{fontSize: '19px', marginRight:'15px'}}></i>Follow your interests.
                                    </li>
                                    <li className='d-block my-4 fw-bold display-9'>
                                        <i className="bi bi-people" style={{fontSize: '19px', marginRight:'15px'}}></i>Hear what people are talking about.
                                    </li>
                                    <li className='d-inline my-4 fw-bold display-9'>
                                        <i className="bi bi-chat" style={{fontSize: '19px', marginRight:'15px'}}></i>Join the conversation.
                                    </li>
                                </ul>                                 
                            </div>
                        </div>
                    </div>
                 </div>
             </div>

             
             <div className="col-md-6 bg-light">
                 <div className="right d-flex align-items-center py-5">

                    
                     <div className="container">
                         <div className="row">
                             <div className="col-lg-10 col-xl-7 mx-auto">
                                 <div>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4c9feb" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
                                 </div>
                                 <h4 className="display-7 fw-bolder my-2">See what's happening in the world right now</h4>
                                 <h6 className="display-9 fw-bold mb-2 mt-3">Join Twitter today.</h6>
                                 <form className='mt-4'>
                                     <div className="mb-3">
                                         <input id="inputEmail" type="email" placeholder="Phone or email" className="form-control border-1 px-2 py-2" />
                                     </div>
                                     <div className="mb-3">
                                         <input id="inputPassword" type="password" placeholder="Password" className="form-control  border-1 px-2 py-2 text-primary" />
                                     </div>
                                     <div className="d-grid gap-2 mt-2">
                                         <div className='row justify-content-between align-items-center'>
                                            <div className='col-md-5'><button type="submit" style={{fontSize:'14.5px', minWidth:'130px'}} className="btn btn-primary w-100 border-0 mb-2 mt-2 px-4 py-2 rounded-pill shadow-sm">Get Started</button></div>
                                            <div className='col-md-7 align-items-center justify-content-center text-center'><p style={{fontSize:'14px'}} className='my-auto'>Have an account? <a>Log in</a> </p></div>
                                         </div>
                                     </div>
                                 </form>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>

         </div>
     </div>
   </div>
   
);
}

export default App;
