import React from "react";
import { Input, FormBtn } from "../Form";
import "./Loginmodal.css";

function Loginmodal() {
    return(
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <h1>Login</h1>
        <br></br>
        <p>Login to your account to access all the features of deniXone.</p>
        <br></br>
        <form>
          {/* email */}
          <Input />
          {/* password */}
          <input />
            <FormBtn>
                  sign in
              </FormBtn>
              <p>Not a member yet?</p>
              <button><a href="/signup">sign up</a></button>
        </form>
        <p>Not a member yet?</p>

    </div>
  </div>
</div>
        
    )
}

export default Loginmodal;