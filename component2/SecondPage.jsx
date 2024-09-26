import React, { useState } from "react";
import styles from "./styles.module.css";
import ThirdPage from "../component3/ThirdPage";

const SecondPage = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [url, setUrl] = useState("");
  const [address, setAddress] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  const handleReset = () => {
    setFname("");
    setLname("");
    setEmail("");
    setContact("");
    setGender("");
    setUrl("");
    setAddress("");
  };

  return (
    <>
      {showData ? (
        <>
          <ul className={styles.userData}>
            <li>{fname}</li>
            <li>{lname}</li>
            <li>{email}</li>
            <li>{contact}</li>
            <li>{gender}</li>
            <li>{url}</li>
            <li>{address}</li>
          </ul>
        </>
      ) : (
        <span>{showData}</span>
      )}

      <div className={styles.formMaincontainer}>
        <h1>Form in React</h1>
        <form className={styles.formContainer}>
          <label htmlFor="fname">
            <p>First Name</p>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter first name"
              className={styles.inputBox}
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
          <label htmlFor="lname">
            <p>Last Name</p>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter last name"
              className={styles.inputBox}
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className={styles.inputBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="number">
            <p>Contact</p>
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="Enter mobile number"
              className={styles.inputBox}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </label>
          <div className={styles.genders}>
            <p>Gender</p>
            <label htmlFor="gender">
              <input
                type="radio"
                id="gender"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Male</label>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Female</label>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="Others"
                checked={gender === "Others"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label>Others</label>
            </label>
          </div>

          <div className={styles.subjects}>
            <p>Your best Subject</p>
            <label htmlFor="subject">
              <input type="checkbox" id="subject" name="subject" />
              <label>Tamil</label>
              <input type="checkbox" id="subject" name="subject" />
              <label>Maths</label>
              <input type="checkbox" id="subject" name="subject" />
              <label>Physics</label>
            </label>
          </div>

          <label htmlFor="file">
            <p>Upload Resume</p>
            <div className={styles.files}>
              <input
                type="file"
                id="file"
                name="file"
                className={styles.inputBox}
              />
            </div>
          </label>

          <label htmlFor="url">
            <p>Enter URL</p>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Enter url"
              className={styles.inputBox}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>

          <label htmlFor="choice" className={styles.choices}>
            <p>Select your choice</p>
            <select name="choice" id="choice">
              <option value="">Select Your Answer</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </label>

          <label htmlFor="address" className={styles.areas}>
            <p>About</p>
            <textarea
              name="address"
              id="address"
              rows="10"
              cols="30"
              placeholder="About your self"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </label>

          <h4>Submit OR Reset</h4>

          <div className={styles.twoBtn}>
            <button
              type="reset"
              className={styles.formBtn}
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              type="submit"
              className={styles.formBtn}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ThirdPage fname={fname} contact={contact} gender={gender} />
    </>
  );
};

export default SecondPage;
