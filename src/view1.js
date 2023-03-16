import {Link, useNavigate} from "react-router-dom";
import Typical from 'react-typical';


const View1 = () => {
  const navigate = useNavigate();
  const navToview1 = () => {navigate('/View1')};
  const navToview2 = () => {navigate('/View2')};
  const navToview3 = () => {navigate('/View3')};
  const navToview4 = () => {navigate('/View4')};


  return (<>



<h2 className="y nom animate__animated animate__bounceInLeft animate__delay-50s  b">Shuan</h2>
<h5 className="y nom animate__animated animate__bounceInLeft  b">[Su-anne]</h5>
    <h2 className="y nom animate__animated animate__bounceInLeft  b">Huynh</h2>
    <h2 className="y  age animate__animated animate__bounceInLeft  c">23 ans</h2>
    <h2 className="y animate__animated animate__bounceInLeft  e">Actuellement en recherche d'alternance </h2>
    <h2 className="y animate__animated animate__bounceInLeft   e">Cybersécurité </h2>
    <div className="txtrev y" style={{ position: 'fixed', top: 400, right: 70 }} >
    <div className="bv animate__animated animate__zoomInRight y " style={{ position:'fixed' , top:30 ,left:620}} ><h1>Bienvenu</h1></div>
    <Typical
        
        steps={[
       
        'Bonjour à vous !',
         100 ,+
        'Bonjour à vous ! Voici mon porte folio !',
         100  ,
        'Bonjour à vous ! Voici mon porte folio ! Je m\'appelle Shuan,',
         100  ,
        'Bonjour à vous ! Voici mon porte folio ! Je m\'appelle Shuan, j\'étudie l\' informatique et plus précisément la cybersécurité.',
         50  ,
        'Bonjour à vous ! Voici mon porte folio ! Je m\'appelle Shuan, j\'étudie l\' informatique et plus précisément la cybersécurité. Pour en savoir plus à mon propos, vous pouvez cliquer sur (Sortir la tablette)']}
        loop={1}
        wrapper="p"
      />


    </div>
    
    
  <div className="photo animate__animated animate__bounceInLeft b" style={{ position:'fixed' , top: 45, left: 200  }} > </div>

    <br></br>
        <button className="  xx" style={{ position: 'fixed', bottom: 50, left: 300 }}onClick={navToview2} href="">Sortir la tablette</button>
        <Link style={{ position: 'fixed', bottom: 100, right: 200 }} to="/View2/"></Link>
 
   <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="pcv.pdf" download> <button href="" className="buttony animate__animated animate__bounceInLeft bfond  g">CV</button></a>
   <br></br>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony animate__animated animate__bounceInLeft afond g">Contact</button></Link>
      
   </div>
  
 
      </>
    
      );

}
    
export default View1;
