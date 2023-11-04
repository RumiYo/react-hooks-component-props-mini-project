import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}){

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emoji (minutes)} {minutes}min read</small>
            <p>{preview}</p>
        </article>
    ) 
}

function emoji (time){
    let emoji = ""
    if(time < 10){
        if(time <= 5){
            return emoji = "☕️";
        }else{
            return  emoji = "☕️☕️";
        }
    }else{
        const numberOfBento = Math.ceil(time/10);
        const bento = "🍱"
        return emoji =  bento.repeat(numberOfBento);
    }
}

export default Article;