import Link from 'next/link';

import "./Login.scss";+
import { Logo } from './logo';
import {LoginForm} from './LoginForm';
import LoginFooter from "./LoginFooter";


// guess  backend have to use this somewhere  !!!!
const handleSubmit  = () => {
  console.log("working")
}


export default function page() {
  return (
    <>

      <div className="Login">
        <div className="Container">
          <div className="wrapper">
          <div className="top-left">
           <Logo />

            <h5>
              Facebook helps you connect and share with the people in your life.{" "}
            </h5>
          </div>

          <div className="bottom-right">
          <div className="form-wrapper">

           <LoginForm   handleSubmit={handleSubmit()}  />
            <div className="divider"></div>
          
          <div className="createButton">
            <button className=' CreateAccount' type='submit'>
                  Create new Account
            </button>
          </div>

          </div>
        <p className="celebBtn">
          <Link href='#' className="toCelebPage"> Create a Page </Link>
          for a celebrity, brand or business.
        </p> 
        </div>
  </div>
      </div>
      </div>

      {/* LoginFooter Comes in  */}
      {/* TODO: LoginFooter  */}
      <LoginFooter />
    </>
  );
}