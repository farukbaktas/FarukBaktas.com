import 'react-multi-carousel/lib/styles.css';

export const Spotify = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <section className="spotify" id="spotify">
        <div className="Group">
            <div className="textgroup">
                <h2>My Spotify Playlist</h2>
                <p>Here are some of my favorite songs, I hope you like them too.</p>
            </div>
            <div className="SpotifyList">
              <iframe style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/playlist/3VW5y4qQgz4aUWKGVeg8iD?utm_source=generator&theme=0"
              width="100%" height="500" frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"></iframe>
            </div>
        </div>
    </section>
  )
}
