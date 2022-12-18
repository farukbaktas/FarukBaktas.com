import 'react-multi-carousel/lib/styles.css';

export const Calendly = () => {
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
    <section className="calendly" id="calendly">
        <div className="calendlygroup">
            <div className="calendlytextgroup">
                <h2>Calendly</h2>
                <p>Here you can schedule a meeting with me.</p>
            </div>
        
            <div class="calendly-inline-widget" 
            data-url="https://calendly.com/farukbaktas/30min" 
            style={{ width: "320px", height: "630px" }}>
            </div>
            <script type="text/javascript" 
            src="https://assets.calendly.com/assets/external/widget.js"async>
            </script>
        </div>
    </section>
  )
}
