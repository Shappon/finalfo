import {Link, useNavigate} from "react-router-dom";
import Typical from 'react-typical';


const View5 = () => {

  const navigate = useNavigate();
  const navToview3 = () => {navigate('/View3')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
    return (<>




<h2 className="y nom  b">Shuan</h2>
<h5 className="y nom   b">[Su-anne]</h5>
    <h2 className="y nom  b">Huynh</h2>
    <h2 className="y  age  c">23 ans</h2>
    <div className="photo " style={{ position:'fixed' , bottom:355, left: -5}} > </div>
    <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="pcv.pdf" download> <button href="" className="buttony bfond  g">CV</button></a>
   <br></br>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony  afond g">Contact</button></Link>
   <div className="y" style={{ position: 'fixed', bottom: 287, left: -10 }}>
      <Typical
        
        steps={['Un ', 1000, 'Un developpeur', 500, 'Un developpeur', 500 ,'Un passionné d\'informatique ', 500,'Un passionné de mma', 500,'Un passionné de géopolitique', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </div> 
   </div>
   <div className="ecran3 animate__animated  animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-fluid">


   <h2 className="y" ><Typical
        
        steps={['Objectifs : ', 500, 'Objectifs : Quelques objectifs ateint ou en cours que je me fixe.' ,500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br>    

  <div>

  <table className="table">
 
    <tbody className="yt" >
   
      <tr>
        <td className="yu">Acquerir une expérience profesionnel dans le monde du textile et dnas le domaine du rapport client.</td>

        <td className="v2" ></td>
      </tr>
      <tr>
        <td className="yu">Decouvrir Reactjs / Crée un portfolio en reactjs/ Le publier</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Découvrir en surface le monde de la cybersécurité et ses enjeux.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Crée un projet informatique de cryptage de mot de passe.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Trouvé une alternance dans le domaine de la cybérsécurité. </td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Instauré un apprentisage des technique et technologie lié a la cybersécurité.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Lecture de livre sur la cybersécurité et créations de projets en corélation avec ce théme.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Acquérir des compétence en accéptant des challenges Capture The Flag (https://www.root-me.org).</td>
 
        <td className="eca2"></td>
      </tr>
    </tbody>
  </table>

  </div>
</div>


    </div>
    
    

   <div id="borderDemo" style={{ position: 'fixed', bottom: -70,}}className="button-container ">
    
    </div>
  
    <button style={{ position: 'fixed', bottom: 80, left:760  ,}} className="button parcour  g" onClick={navToview3} href="">PARCOUR</button>
  <button style={{ position: 'fixed', bottom: 80 , left:960  ,}} className="button projet g" onClick={navToview4} href="">PROJETS</button>
<button style={{ position: 'fixed', bottom: 80 , left: 1160 ,}} className="button objectif  g" onClick={navToview5} href="">OBJECTIFS</button>

</>
 );
}
    
export default View5;
