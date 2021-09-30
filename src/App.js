import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://kit.fontawesome.com/c8e4d183c2.js" crossorigin="anonymous"></script>


function App() {
  return (
    <div className="App" >
      <div className="card bg-light mb-3 ">
     <ProfilePhoto className="pp"/>
     <FullName className="fn" />
     <Adress className="aa"/>
     <span className="bg-secondary p-1 px-4 rounded text-white">Beginner</span>
     <h4>Software Developper </h4>
     <p> I am  interested in software developement.
       So if you have any project or if you want to
        make a software for your business contact me. </p>
     <div class="buttons"> <button className="btn btn-outline-primary px-4"> See my CV</button> <button className="btn btn-primary px-4 ms-3">Contact me </button> </div>
     <div><ul className="social-list">
      
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-dribbble"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-google"></i></li>
                    </ul></div>
     
    
                    </div>
    </div>
  );
}

export default App;
