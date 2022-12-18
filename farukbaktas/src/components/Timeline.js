import bgVideo from '../assets/img/background.mp4';
import event1Img from '../assets/img/Yoorbit.jpg';
import event2Img from '../assets/img/Yoorbit.jpg';

export const Timeline = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
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
      <section className="timeline" id="timeline">
                <video loop muted> 
                  <source src={bgVideo} type="video/mp4" />
                </video>
            <div className="upper">
                <h2>Timeline</h2>
                <p>"Great things are done by a series of small..."<br></br>
                    ~ Vincent Van Gogh</p>
            </div>
            <div className="textgroup">
                <div className="text">
                    <div className="date">
                        <h3>2017</h3>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <p>Received robotics coding training from Bilge Adam.</p>
                </div>
                <div className="text">
                    <div className="date">
                        <h3>2018</h3>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <p>Started learning C programming language in a course.</p>
                </div>
                <div className="text">
                    <div className="date">
                        <h3>2020</h3>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <p>Accepted into the Software Engineering program at Haliç University.</p>
                </div>
                <div className="text">
                    <div className="date">
                        <h3>2021</h3>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <p>Learned Solidity, a blockchain programming language, and Ether.js, a framework.</p>
                </div>
                <div className="text">
                    <div className="date">
                        <h3>2022</h3>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <p>Worked on marketing software, Discord.js, React, data science, and AI projects.</p>
                </div>
            </div>
      </section>
    )
  }