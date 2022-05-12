
import Profile from "../media/profile_picture.jpg"
import "../styles/AboutMe.css"


export const AboutMe = () => {

    return (

        <div id="AboutMe" className="section" style={{flexDirection: "row"}}>
            <h2>About Me</h2>
            <div className="profile">
                <img  alt="profile" src={Profile}/>

                <div className="text_container">
                    <h4>Hi I'm Alexis, nice to meet you. Please take a look around!</h4>
                    <div className="container_info">
                        <div className="description">
                            <h5>Address:</h5>
                            <h5>Age:</h5>
                            <h5>Email:</h5>
                            <h5>Study:</h5>
                            <h5>Freelance:</h5>
                        </div>
                        <div className="description_content">
                            <h6>Nuevo Leon, Mexico</h6>
                            <h6>20</h6>
                            <h6>alexisperez00.cappi@gmail.com</h6>
                            <h6>Academlo</h6>
                            <h6>Available</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}