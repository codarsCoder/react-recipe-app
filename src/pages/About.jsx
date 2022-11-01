import { FaLinkedin, FaGithub} from "react-icons/fa";

const About = () => {


  return (
  
    <div className="container ">
        <div className="about">
       <h4> Hello I'm Nurullah</h4><br />
       <p> I'm Full-Stack Developer</p>
       <p>I build Web-Sites by coding with javaScript/React/HTML/CSS/Bootstrap/</p>
       <p>Please visit my Github and LinkedIn pages</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/nurullah-arslan-889661237/"><FaLinkedin className="m-3 icon-color" size={'3rem'}/></a>
          <a href="https://github.com/codarsCoder"><FaGithub className="m-3 icon-color" size={'3rem'}/></a>
 </div>
 </div>
 
   </div>
  )
}

export default About