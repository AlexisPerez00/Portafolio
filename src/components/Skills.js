import { ImageList, ImageListItem } from "@mui/material"
import Js from '../media/Skills/javascript.png'
import Html from '../media/Skills/html.png'
import Css from '../media/Skills/css.png'
import React from '../media/Skills/react.png'
import Python from '../media/Skills/python.png'
import Git from '../media/Skills/github.png' 

export const Skills = () => {
    const itemData = [
        {
            img: Js,
            title: 'javascript',
          },
          {
            img: Html,
            title: 'html',
          },
          {
            img: Css,
            title: 'css',
          },
          {
            img: React,
            title: 'react',
          },
          {
            img: Python,
            title: 'python',
          },
          {
            img: Git,
            title: 'github',
          }
    ]


    return (
        <div id="Skills" className="section">
            <h2>Skills</h2>
            <h5>These are the technologies I've worked with</h5>
                <ImageList sx={{ width: 400, height: 800, }} cols={2} gap={30} rowHeight={160}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
        </div>
    )
}