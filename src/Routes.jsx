import React, { useRef } from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Switch, Route, Redirect, } from "react-router-dom";
import Header from './component/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";


import { gsap } from "gsap";

const completeCall = (target,  bg) => {
  gsap.set(bg, { autoAlpha: 0 });
  gsap.set(target, { clearProps: "position, width" });
//   parent && gsap.set(parent, { clearProps: "overflow" });
  document.body.style.overflowY = "scroll"
};

const Routes = (props) => {
  const transBG = useRef(null);

  const onEnterHandler = (node) => {
    
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden"

    gsap.killTweensOf(node);
    
    gsap.set(node, {
      position: "absolute", 
      top: 0,
      y: `+=${window.innerHeight}`, 
      autoAlpha: 0,
      zIndex:"20"
    });

    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 1, 
      autoAlpha: 1,
      ease:'power4.inOut',
      delay:.4,
      y: 0,
      
      onComplete: completeCall,
      onCompleteParams: [node,  transBG.current]
    });

  };

  const onExitHandler = (node) => {
    document.body.style.overflow = "hidden"
    gsap.killTweensOf(node);

    // Set initial position and styles
    gsap.set(node, {
        position: "absolute", 
        zIndex:"0"
    });
    gsap.set(transBG.current, {
        position: "absolute", 
        zIndex:"10",
        y: ()=>{ return `${window.scrollY + window.innerHeight}`}, 
        autoAlpha: 1, 
      });
    gsap.to(transBG.current, {
        duration: .8, 
        autoAlpha: 1,
        ease:'power4.inOut',
        delay:.1,
        y: `${window.scrollY}`,
    })
    // // Create the animation for the incoming component
    // tl.to(node, {
    //     duration: 1, 
    //     // autoAlpha: 0,
    //     ease:'power4.inOut',
    //     delay:.5,
    //     //   y: `-=${window.innerHeight}`,
    //       backgroundColor:'#ff0000'
    // });

  };


  return (
    // <div className="w-full min-h-screen">
    <>
      <Header />

        <div ref={transBG} style={{height:"100vh", width:"100%", backgroundColor:"#ff4810", position: "absolute"}}/>

            <TransitionGroup component={null}>
            <Transition
                timeout={{
                    appear: 100,
                    enter: 500,
                    exit: 1000,
                   }}
                key={props.location.pathname}
                onEnter={onEnterHandler}
                onExit={onExitHandler}
                
                >


                <Switch location={props.location}>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' render={() => props.currentUser ? ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage/> )}/>
                    <Route path='/checkout' component={CheckoutPage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch> 

            </Transition> 
            </TransitionGroup>
    </>
    // </div>
  );
};

export default Routes;
