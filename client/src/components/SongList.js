import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAll } from '../reducers/songReducer'
export default function SongList() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(getAll())
      }, [dispatch])
    return (
        <div>
            {items.map((song) => (
            <h1>title: {song.title}</h1>
            ))}
        </div>
    )
}