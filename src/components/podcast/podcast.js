import React from 'react'
import { PodcastElement } from '../podcastElement/podcastElement'

export function Podcast(podcastList) {

    const component = (
        <div>
            <div>
            {podcastList.feed.entry.map(entry => (
                PodcastElement(entry)
            ))}
            </div>

        </div>
    )
    return component
}
