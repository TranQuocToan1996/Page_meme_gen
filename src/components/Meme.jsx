import data from "../data"
import { useState } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(data)
    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        }))
    }
    const handleChangeTop = (e) => {
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: e.target.value
        }))
    }
    const handleChangeBot = (e) => {
        setMeme(prevMeme => ({
            ...prevMeme,
            bottomText: e.target.value
        }))
    }
    return (
        <>
            <main className="main">
                <div className="form">
                    <input id="top"
                        type="text"
                        name="top"
                        placeholder="Top text"
                        value={meme.topText}
                        onChange={handleChangeTop}
                        className="form_input" />
                    <input type="text"
                        id="bot"
                        name="bot"
                        placeholder="Bot text"
                        value={meme.bottomText}
                        onChange={handleChangeBot}
                        className="form_input" />
                    <button
                        className="form_button"
                        onClick={getMemeImage}
                    >Get a new meme image  🖼</button>
                </div>
            </main>
            <img src={meme.randomImage} alt="meme image" className="meme_img" />
        </>
    )
} 
