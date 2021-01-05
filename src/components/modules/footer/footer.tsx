import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import image from './me.jpeg'
import s from './footer.module.css'

const Footer: React.FC = ():JSX.Element => {
    return(
        <footer className={s.container_main}>
            <div className={s.container_profile}>
                <div className={s.container_avatar}>
                    <Avatar alt="Me" src={image} className={s.avatar}/>
                    <p>Ignacio Gimenez</p>
                    <p>Full Stack Developer</p>
                </div>
                <div className={s.container_social}>
                    <div>
                        <a href="mailto:ignaciogimenez70@gmail.com" rel="noreferrer" target="_blank">
                            <MailIcon/><div className={s.text}>ignaciogimenez70@gmail.com</div>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/ignacio-gimenez-305799184/" rel="noreferrer" target="_blank">
                            <LinkedInIcon/><div className={s.text}>Ignacio Gimenez</div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Nacho077" rel="noreferrer" target="_blank">
                            <GitHubIcon/><div className={s.text}>Nacho077</div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;