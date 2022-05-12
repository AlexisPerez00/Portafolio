import { Card, Link, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import RickandMorty from "../media/rickandmortyapp.png"
import Quotesapp from "../media/quotesapp.png"
import Crudglobal from "../media/crudglobal.png"
import Todoapp from "../media/todoapp.png"
import Countriesapp from "../media/countriesapp.png"
import "../styles/Portafolio.css"

export const Portafolio = () => {
    const apps = [{
        name: "Rick and Morty App",
        image: RickandMorty,
        href: "https://rick-y-morty-app.vercel.app/"
    }, {
        name: "Quotes App",
        image: Quotesapp,
        href: "https://quote-box.vercel.app/"
    }, {
        name: "Weather App",
        image: "../media/",
        href: ""
    }, {
        name: "CRUD Global",
        image: Crudglobal,
        href: "https://crud-to-do-list.vercel.app/"
    }, {
        name: "ToDo App",
        image: Todoapp,
        href: "https://to-do-app-chi-swart.vercel.app/"
    }, {
        name: "Countries App",
        image: Countriesapp,
        href: "https://countries-app-five.vercel.app/"
    }];

    const appsList = apps.map((app, key) =>
    <Link id={key} href={app.href} underline="none">
      <Card sx={{ maxWidth: 345, margin: "20px", backgroundColor: "#767676"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={app.image}
            alt="app"
          />
          <CardContent>
            <Typography sx={{ color: "#fff"}} gutterBottom variant="h5" component="div">
              {app.name}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Link>)

    return (
        <div id='Portafolio' className='section' >
            <h2 >Portafolio</h2>
            <h5>Here are some works and applications that I have done</h5>
            <div className='apps'>
                {appsList}
            </div>

        </div>
    )
} 