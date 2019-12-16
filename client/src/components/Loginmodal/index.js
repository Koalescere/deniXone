import React from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
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
            <Input
             value={this.state.email}
             onChange={this.handleInputChange}
             name="email"
             placeholder="email (required)"
           />
             <Input
             value={this.state.email}
             onChange={this.handleInputChange}
             name="email"
             placeholder="email (required)"
           />
            <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                  sign in
              </FormBtn>
              <button><a href="/signup">sign up</a></button>
        </form>
        <p>Not a member yet?</p>

    </div>
  </div>
</div>
        
    )
}

export default Loginmodal;