import './podcastElement.scss'
import React from 'react'

export function PodcastElement(podcastElement) {
    let elementName = podcastElement['im:name'].label
    let authorName = podcastElement['im:artist'].label
    console.log(elementName)

    if (elementName.length > 19){
        elementName = elementName.slice(0,20) + '...'
        console.log(elementName)
    }

    if (authorName.length > 15){
        authorName = authorName.slice(0,15) + '...'
        console.log(authorName)
    }
    return (
        <div className="podcast-element">
            
            <img className='podcast-element-img' src={podcastElement['im:image'][2].label}></img>
            <p className='podcast-element-text' title={elementName.length > 19?podcastElement['im:name'].label:''}>{elementName}</p>
            <p className='podcast-element-text'title={authorName.length > 10?podcastElement['im:artist'].label:''}>Author: {authorName}</p>
            <div className='podcast-element-background'></div>
        </div>
    )
}
