import Button from "../../reusableComponents/Button/Button";
import "./About.css";

const About = (props) => {
  return (
      <div id="about_container" className="d-flex">
          <div className="pt-5 w-100" id="left_div">
              <h1 className=" ">About me</h1>
          </div>

          <div className="pt-5 pe-5 d-flex flex-wrap" id="right_div">
              <p className=" ">One of the most famous figures known to all people is the Egyptian scientist Ahmed Zewail. The fame of this scientist began when he invented a femtosecond spectroscopy camera.
              Ahmed Zewail was born in Rashid, near Alexandria. He was diligent in his studies and loved chemistry and physics. When he entered the University of Sciences, he began the journey of science and scientists.
              Ahmed Zewail learned important things from his maternal uncle, such as music and dealing with people.Ahmed Zewail traveled abroad and there he beat everyone and won the Nobel Prize in Chemistry in 1999</p>
              <br></br>
              <Button className="mt-5" content='Download Resume' type='submit'/>
          </div>
    </div>
  );
};

export default About;