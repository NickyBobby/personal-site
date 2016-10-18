import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';

class App extends Component {
  render() {
    const carouselInstance = (
      <Carousel>
        <Carousel.Item>
          <img width={9000} height={5000} alt="900x500" src="https://static.pexels.com/photos/36717/amazing-animal-beautiful-beautifull-large.jpg"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={9000} height={5000} alt="900x500" src="http://thedogpaddler.com/EmailNewsletters/080703_Outlaws_Panos_Vigilant/04_080629_BrilliantSunset_Pano08_900x500_opt9ADV.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={9000} height={5000} alt="900x500" src="http://www.shaunkillenphotography.com/wp-content/uploads/2010/09/oban-bay-pano-BW-900x500-srgb.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={9000} height={5000} alt="900x500" src="http://www.shaunkillenphotography.com/wp-content/uploads/2010/09/oban-bay-pano-BW-900x500-srgb.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={9000} height={5000} alt="900x500" src="http://www.shaunkillenphotography.com/wp-content/uploads/2010/09/oban-bay-pano-BW-900x500-srgb.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={9000} height={5000} alt="900x500" src="http://www.shaunkillenphotography.com/wp-content/uploads/2010/09/oban-bay-pano-BW-900x500-srgb.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    return (
      <div>
        {carouselInstance}
      </div>
    );
  }
}
export default App;
