import "./Skills.css";
import Progress from '../../reusableComponents/Progress/Progress';

const Skills = (props) => {
  return (
      <div className="bg-dark pt-5 pb-5">
          <div className="container d-flex justify-content-center flex-column gap-3" id="skills_container">
              <h2 className="h1">Skills</h2>
              <p>One of the most famous figures known to all people is the Egyptian scientist Ahmed Zewail. The fame of this scientist began when he invented a femtosecond spectroscopy camera.
              Ahmed Zewail was born in Rashid, near Alexandria. He was diligent in his studies and loved chemistry and physics.
              </p>
        <div id="" className="d-flex justify-content-around">
          <div className="pt-5 " id="left_div">
            
                <ul className="list-group ">
                <li class="list-group-item-group-item-dar border-bottom">MY FOCUS</li>
                <li class="list-group-item-group-item-dark">UI/UX Design</li>
                <li class="list-group-item-group-item-dark">Responsive Design</li>
                <li class="list-group-item-group-item-dark">Web Design</li>
                <li class="list-group-item-group-item-dark">Mobile App Design</li>
                </ul>
       
          </div>

          <div className="pt-5 pe-5 d-flex flex-wrap flex-column gap-3" id="right_div">
              
            <Progress  text='HTML' width="95%"></Progress>
             <Progress text='CSS' width="40%"></Progress>
             <Progress text='Bootstrap' width="70%"></Progress>
             <Progress text='JS' width="60%"></Progress>
             <Progress text='Jquery' width="60%"></Progress>
             <Progress text='React' width="20%"></Progress>
             <Progress text='XD' width="60%"></Progress>
             <Progress text='Dart' width="80%"></Progress>
            
          </div>
    </div>
            </div>
      </div>
  );
};

export default Skills;