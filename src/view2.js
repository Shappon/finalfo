import {Link, useNavigate} from "react-router-dom";
import Typical from 'react-typical';

const View2 = () => {
  const navigate = useNavigate();

  const navToview3 = () => {navigate('/View3')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
    return (<>

    
    <h2 className="y nom  b">Shuan</h2>
    <h5 className="y nom  b">[Su-anne]</h5>
    <h2 className="y nom  b">Huynh</h2>
    <h2 className="y  age  c">23 ans</h2>
    <h3 className="y d">Actuellement en recherche d'alternance </h3>
    <h4 className="y  e"> Cybersécurité </h4>

    <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="pcv.pdf" download> <button href="" className="buttony  bfond  g">CV</button></a>
   <br></br>
   <div className="photo animate__animated animate__bounceInLeft " style={{ position:'fixed' , bottom:350, left: 30 }} > </div>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony  afond g">Contact</button></Link>
   <div className="y" style={{ position: 'fixed', bottom: 287, left: -10 }}>
      <Typical
        
        steps={['Un ', 1000, 'Un developpeur', 500, 'Un developpeur', 500 ,'Un passionné d\'informatique ', 500,'Un passionné de mma', 500,'Un passionné de géopolitique', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </div> 
   </div>

   <div id="borderDemo" style={{ position: 'fixed', bottom: -70,}}className="button-container ">
    
    </div>
   
    <button style={{ position: 'fixed', bottom: 80 , left:760  ,}} className="button parcour  g" onClick={navToview3} href="">PARCOUR</button>
  <button style={{ position: 'fixed', bottom: 80 , left:960  ,}} className="button projet g" onClick={navToview4} href="">PROJETS</button>
<button style={{ position: 'fixed', bottom: 80 , left: 1160 ,}} className="button objectif  g" onClick={navToview5} href="">OBJECTIFS</button>

  </>
 );
}
    
export default View2;
