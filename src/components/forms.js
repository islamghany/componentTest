import React from 'react';
import {User_3} from '../assets/icons/icons'
const Forms =()=>{
	return <div>
	<div className="inputs">
     <form className="form">
       <div className="form__wrapper">
         <div className="form__unit">
           <label htmlFor="default" className="form__label">
            form__label / form__input
           </label>
           <input type="text" id="default" placeholder="default input" className="form__input"/>
         </div>
         <div className="form__unit">
           <label htmlFor="rounded" className="form__label">
            form__label / form__input rounded
           </label>
           <input type="text" id="rounded" placeholder="rounded input" className="form__input rounded"/>
         </div>  
         <div className="form__unit">
           <input type="text" id="iconed" placeholder="iconed input" className="form__input iconed"/>
           <span className="form__icon"><User_3  /></span>
         </div>
          <div class="form__unit labeled">
       <input class="form__input labeled" id="password" autocomplete="off" type="text" placeholder="input labeled" />
      <button class="btn btn--contained-info"> 
      search</button>
    </div>
         <div className="form__unit">
           <label for="email" class="form__label downshift ">form__label downshift / form__input downshift</label>
           <input class="form__input downshift" id="email" autocomplete="off" type="text" 
           placeholder="Enter Your E-mail." />
         </div>
         <div class="form__unit labelup">   
           <input class="form__input downshift  labelup" id="emailup" autocomplete="off" type="text" placeholder="form__unit labelup / form__label downshift labelup / form__input downshift  labelup" />
           <label for="emailup" class="form__label downshift labelup">form__unit labelup / form__label downshift labelup / form__input downshift  labelup</label>
         </div> 
         <div class="form__unit">     
	       <input class="form__input downshift labelup contained " id="emailup" autocomplete="off"  type="text" placeholder="form__label downshift labelup / form__input downshift labelup contained" />
	       <label for="emailup" class="form__label downshift labelup">form__label downshift labelup / form__input downshift labelup contained</label>
   		 </div>
       </div>
     </form>
	</div>
	<div className="inputs">
     <form className="form">
       <div className="form__wrapper">
       <div class="form__unit check">
      <input class="form__checkbox hidden" type="checkbox" id="rem" name="rem" />
      <label for="rem" class="form__label-box"> Remember me </label>
      </div>
       <div class="form__unit">
		<input type="checkbox" class="hidden switch__checkbox" id="switch" />
		<div class="switch">
		<label for="switch" class="switch__label"></label>
		</div>
		</div>
     <div class="form__unit check">
      <input class="form__radio hidden" type="radio" id="yes" name="rad" />
      <label for="yes" class="form__label-radio">Yes</label>
      </div>
      <div class="form__unit check">
       <input class="form__radio hidden" type="radio" id="no" name="rad" />
       <label for="no" class="form__label-radio">No</label>
      </div>     
    </div>
    <div class="form__unit">
      <label class="form__label">text</label><br />
      <textarea class="form__area"></textarea>
    </div>
    <div class="form__unit select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
        <option>With options</option>
      </select>
    </div>
       </form>
     </div>
	</div>
}
export default Forms