import { Link,useNavigate} from "react-router-dom";

import React, { useState, } from 'react';

const View3 = () => {


  const [text, setText] = useState("");
  const [element,setElement] = useState(0);



  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleClick = () => {
    
    setElement((element+1)%4);
  }






  const navigate = useNavigate();
  const navToview3 = () => {navigate('/View3')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (<>

    <h2 className="y nom  b">Shuan</h2>
    <h5 className="y nom  b">[Su-anne]</h5>
    <h2 className="y nom  b">Huynh</h2>
    <h2 className="y  age  c">23 ans</h2>
    <div className="photo " style={{ position:'fixed' , bottom:355, left: -5}} > </div>
    <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="pcv.pdf" download> <button href="" className="buttony bfond  g">CV</button></a>
   <br></br>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony afond g">Contact</button></Link>

   </div>
   
   <div className="ecran  animate__animated  animate__fadeInUp" style={{ position: 'fixed', top: 30, right: 10 }} >
   <h2 className="y" style={{display:element=== 0 ? "" :"none"}}> Mon Parcour : 1/4</h2> 
   <h2 className="y" style={{display:element=== 1 ? "" :"none"}}> Mon Parcour : 2/4</h2> 
   <h2 className="y" style={{display:element=== 2 ? "" :"none"}}> Mon Parcour : 3/4</h2> 
   <h2 className="y" style={{display:element=== 3 ? "" :"none"}}> Mon Parcour : 4/4</h2> 

<div className="photoban" >ff</div>

<div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{display:element=== 0 ? "" :"none"}}> 

   
  A l'obtention de mon bts j'ai acquis une base de savoir en informatique et en programation. 
  Durant celu-ci j'ai pu réalisé en equipe ou individuellement des projets a but proffessionel ou de l'ordre du didactique.
  J'ai aussi découvert durant mon alternance le monde du travail ou j'ai du m'adapté, évolué, apprendre et réalisé des services ou des produits...


</div><div className="txtgauche photo5 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', left: 50 ,bottom:75 ,display:element=== 0 ? "" :"none"}}> 


</div></div>

<div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed',  left: 50 , display:element=== 1 ? "" :"none"}}> 
   
   
  ...J'ai ensuite décidé de faire un état des lieus de mon savoir et de mes compétences.
  Aprés mur reflection,
  j'ai réalisé que je voulais créer des applications pour des entreprises ou des particuliers qui ont pour but d'apporter un apport.

  J'avais besoin d'étre au contact direct des clients et aussi de m'habituer au travail d'équipe en entreprise.
  J'ai donc décidé de choisir un travail dans le monde du tissu et du service client (Service Client Zara)...
  


 </div><div className="txtgauche photo2 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', bottom: 120, left: 70,display:element=== 1 ? "" :"none"}}> 


</div></div>


 <div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{display:element=== 2 ? "" :"none"}}> 
   
   
 ...Je choisis de m’améliorer physiquement et mentalement par le biais du sport, une façon personnel qui m'améne à étre constant dans mon travail et dans ma vie ...
 
 </div><div className="txtgauche photo3 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', left: 70 ,bottom:80,display:element=== 2 ? "" :"none"}}> 


</div></div>

 <div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{display:element=== 3 ? "" :"none"}}> 
   
   
 ... Dorénavant, je me consacre entièrement à ma spécialisation dans le monde de la cybersécurité un domaine qui m'anime et auquel j'aimerais apporter mon énergie et mon travail.
    Effectivement, la stratégie et l'organisation sont deux éléments que j'affectionne et qui sont inhérents à la cybersécurité.
    Pour cela, je lis des articles ou des livres, réalise des projets personnels et effectue une veille technologique régulière en rapport avec ce sujet.
 
 </div><div className="txtgauche photo4 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', left: 70,bottom:100 ,display:element=== 3 ? "" :"none"}}> 


</div></div>


<h4 className="par animate__animated  animate__fadeIn m "style={{ position: 'fixed', bottom: 10,left:85}}>Objectif Global : apprendre dans le domaine de l'informatique en intégrant une structure afin de mener à bien des projets. <button  className="p" onClick={handleClick}> Suite</button></h4>
   <h2 className=" yt animate__animated animate__fadeIn"></h2> 
 
</div>  
     
  

    <div id="borderDemo" style={{ position: 'fixed', bottom: -70,}}>
    
    </div>
   
    <button style={{ position: 'fixed', bottom: 80, left:760  ,}} className="button parcour  g" onClick={navToview3} href="">PARCOUR</button>
  <button style={{ position: 'fixed', bottom: 80 , left:960  ,}} className="button projet g" onClick={navToview4} href="">PROJETS</button>
<button style={{ position: 'fixed', bottom: 80 , left: 1160 ,}} className="button objectif  g" onClick={navToview5} href="">OBJECTIFS</button>
  </>

  );
}

export default View3;
