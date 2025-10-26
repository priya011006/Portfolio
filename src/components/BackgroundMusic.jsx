import React, { useEffect } from 'react'

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = document.getElementById('bg-music')
    if (audio) {
      audio.volume = 0.25
      
      // Enable music after first user interaction (autoplay policy workaround)
      const enableMusic = () => {
        audio.currentTime = 20 // Start from 20 seconds
        audio.muted = false
        audio.play().catch(console.log)
      }

      // Add event listeners for user interaction
      const events = ['click', 'touchstart', 'keydown']
      events.forEach(event => {
        document.addEventListener(event, enableMusic, { once: true })
      })

      return () => {
        events.forEach(event => {
          document.removeEventListener(event, enableMusic)
        })
      }
    }
  }, [])

  return (
    <audio id="bg-music" autoPlay loop muted>
      <source src="bg-track.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default BackgroundMusic

