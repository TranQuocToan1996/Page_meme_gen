import { useState, useEffect } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState([])
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
    useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(json => setAllMemeImages(json))
    }, [allMemeImages])
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
            <div className="meme">
                <img src={meme.randomImage} alt="meme image" className="meme_img" />
                <h2 className="meme_text top">{meme.topText}</h2>
                <h2 className="meme_text bot">{meme.bottomText}</h2>
            </div>
        </>
    )
} 
