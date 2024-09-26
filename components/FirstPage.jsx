import React, { useState } from "react";
import styles from "./styles.module.css"

const FirstPage = () => {

  const [uname,setUname]=useState("");
  const [psw,setPsw]=useState("");
  const [fdata,setFdata]=useState(false);

  const handleSubmit = (e)=>{
    // console.log(e)
    e.preventDefault();
    setFdata(true)
  }
  return (
    <>
    { fdata ?<>
    <h1>{uname}</h1>
    <h1>{psw}</h1>
    </> : <span>No data</span>}
      <div className={styles.mainContainer}>
        <h1>Login</h1>
        <form className={styles.container}>
          <label htmlFor="uname" className={styles.topBox}>
            UserName
            <input
              type="text"
              id="uname"
              name="name"
              placeholder="Enter your name"
              required
              onChange={(e)=> setUname(e.target.value)}
            />
          </label>
          <label htmlFor="pass">
            Password
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Enter your Password"
              required
              onChange={(e)=> setPsw(e.target.value)}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
    </>
  );
};

export default FirstPage;
