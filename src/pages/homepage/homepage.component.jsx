import React from 'react';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import HomeLargeImage from '../../component/homeLargeImage/homeLargeImage.component';
import HomeIntro from '../../component/homeIntro/homeIntro.component';
import HomeProduct from '../../component/homeProduct/homeProduct.component';
import HomeFooter from '../../component/homeFooter/homeFooter.component';

import './homepage.styles.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


class HomePage extends React.Component {
  
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

    
    gsap.from('.homepage',{
      opacity:0,
      duration:2
    })
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homepage",
        start: "top top",
        end: "bottom bottom", 
        scrub: 1, 
      }
    });

    tl.fromTo('.homepage', {
      background:'linear-gradient(0.65turn, #ff6333, #ff8737)'
    },{
      background:'#f8d8ec'
    })
  }
  

  render() {

    return (
      <div className='homepage'>
          {/* <Directory/> */}
        <HomeLargeImage/>
        <HomeIntro/>
        <HomeProduct/>
        <HomeFooter/>

    </div>
    )
  }
};


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(HomePage);