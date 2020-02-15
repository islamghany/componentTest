import React from 'react';

const Buttons =()=>{
	return <div>
			<h1 class="heading-primary">
    # Outlined Buttons => btn btn--outlined-[type]
  </h1>
  <div class="group__wrapper">
    <button class="btn btn--outlined-warning" ripple="ripple">warning </button>
     <button class="btn btn--outlined-primary" ripple="ripple">primary</button>
     <button class="btn btn--outlined-secondary" ripple="ripple">secondary</button>
    <button class="btn btn--outlined-dark" ripple="ripple">dark</button>
    <button class="btn btn--outlined-success" ripple="ripple">success</button>
    <button class="btn btn--outlined-default" ripple="ripple">default</button>
    <button class="btn btn--outlined-info" ripple="ripple">info</button>
     <button class="btn btn--outlined-fairuz" ripple="ripple">fairuz</button>
     <button class="btn btn--outlined-link" ripple="ripple">link</button>
     <button class="btn btn--outlined-danger" ripple="ripple">danger</button>
  
  </div>
  <h1 class="heading-primary">
    # Contained Buttons => btn btn--contained-[type]
  </h1>
    <div class="group__wrapper">
       <button class="btn btn--contained-warning" ripple="ripple">warning</button>
       <button class="btn btn--contained-primary" ripple="ripple">primary</button>
       <button class="btn btn--contained-secondary" ripple="ripple">secondary</button>
       <button class="btn btn--contained-dark" ripple="ripple">dark</button>
        <button class="btn btn--contained-success" ripple="ripple">success</button>
        <button class="btn btn--contained-default" ripple="ripple">default</button>
        <button class="btn btn--contained-info" ripple="ripple">info</button>
        <button class="btn btn--contained-fairuz" ripple="ripple">fairuz</button>
        <button class="btn btn--contained-bluer" ripple="ripple">bluer</button>
        <button class="btn btn--contained-link" ripple="ripple">link</button>
        <button class="btn btn--contained-danger" ripple="ripple">danger</button>
  
    </div>
 <h1 class="heading-primary">
    # Contained1 Buttons => btn btn--contained1-[type]
   </h1>
  <div class="group__wrapper">
  <button class="btn btn--contained1-primary">
    Primary
  </button>
    <button class="btn btn--contained1-secondary">
        secondary
    </button>
    <button class="btn btn--contained1-white">
        white
    </button>
    <button class="btn btn--contained1-fairuz">
        fairuz
    </button>
    <button class="btn btn--contained1-link">
        Link
    </button>
   
  
  </div>
  <h1 class="heading-primary">
    # Wave Buttons =>btn btn--wave-white circle
  </h1>
  <div class="group__wrapper ">
    <button class="btn btn--wave-white circle" >white</button>
    <button class="btn btn--wave-danger circle" >danger</button>
    <button class="btn btn--wave-success circle" >danger</button>
  </div>
  <h1 class="heading-primary">
    # Circled Buttons => btn btn--contained-default circle
  </h1>
  <div class="group__wrapper">
      <button class="btn btn--contained1-white ripple circle" ripple="ripple">flatter</button>
        <button class="btn btn--contained-default ripple circle" ripple="ripple">default</button>
        <button class="btn btn--contained-secondary ripple circle" ripple="ripple">secondary</button>
        <button class="btn btn--outlined-fairuz ripple circle" ripple="ripple">fairuz</button>
  </div>

  <h1 class="heading-primary">
    # Cartoon Buttons
  </h1>
  <div class="group__wrapper">
       <button class="btn btn__cartoon--white">
      white
    </button>
    <button class="btn btn__cartoon--red">
      red
    </button>
    <button class="btn btn__cartoon--brown">
      brown
    </button>
    <button class="btn btn__cartoon--yellow">
      yellow
    </button>
    <button class="btn btn__cartoon--blue">
      blue
    </button>
    <button class="btn btn__cartoon--black">
      black
    </button>
  
  </div>
   <h1 class="heading-primary">
   btn btn-contained__shadow--[color]
  </h1>
  <div class="group__wrapper">
  <button className="btn btn--contained__shadow-primary">see more</button>
  </div>
	</div>
}
export default Buttons;