
import "./About.css"
function About({data_}){
    console.log(data_)
    return (
        <div id="about">
            <div>
                <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="" />
            </div>
            <div id="about-txt">
                <h3>software devloper - PYTHON - {data_} </h3>
                <p>Lorem </p>
            </div>
        </div>
    )

}

export default About



