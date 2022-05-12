import  FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn';import emailjs from 'emailjs-com'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import "../styles/Contact.css"


export const Contact = () => {
    const handleSubmit = (e) => {

        e.preventDefault()
        emailjs.sendForm('service_c72xkcs', 'template_qbu4vgm', e.target, 'ykOsndQ7C5ncYRz_z').then(res => {
            alert('Se ha enviado correctamente.')
            console.log(res)
        })
    }


    return (
        <div className='section' >
            <h2>Contact</h2>
            <form id='Contact' onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label><b>Name</b></label>
                        <input type="text" className="form-control" id="name" name="name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label><b>Email</b></label>
                        <input type="text" className="form-control" id="email" name="email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label><b>Message</b></label>
                    <textarea type="text" className="form-control" id="message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{width:"50%", margin:"0 auto",marginTop:"20px"}}>Submit</button>               
               
            </form>
            <div className='icons'>
                <IconButton sx={{color: '#72a1fa'}} href="https://www.linkedin.com/in/alexis-p%C3%A9rez-a56002230/">
                    <LinkedInIcon sx={{fontSize: 50, padding:5}}/>
                </IconButton>

                <IconButton sx={{color: '#72a1fa'}} href="https://github.com/AlexisPerez00/">
                    <GitHubIcon sx={{fontSize: 50, padding:5}}/>
                </IconButton>

                <IconButton sx={{color: '#72a1fa'}} href="https://www.facebook.com/profile.php?id=100007928505471">
                    <FacebookRoundedIcon sx={{fontSize: 50, padding:5}}/>
                </IconButton>

            </div>        
        </div>
    )
}