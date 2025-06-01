import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div>
      <h1>Home Alarms and <br /> Security Systems</h1>
      <div className="polo">
        <form action="" id="registrationForm">

          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" /><br />

          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" /><br />

          <label htmlFor="retypepassword">Confirm Password:</label>
          <input type="password" id="retypepassword" name="retypepassword" /><br />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" /><br />

          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender">
            <option value="choose">Choose Option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br />

          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" /><br />

          <label htmlFor="city">City:</label>
          <select name="city" id="city">
            <option value="choose">Choose Option</option>
            <option value="multan">Multan</option>
            <option value="bahawalpur">Bahawalpur</option>
            <option value="kpk">Khyber Pakhtunkhwa</option>
            <option value="lodhran">Lodhran</option>
            <option value="karachi">Karachi</option>
            <option value="islamabad">Islamabad</option>
            <option value="murree">Murree</option>
            <option value="lahore">Lahore</option>
            <option value="sahiwal">Sahiwal</option>
            <option value="burewala">Burewala</option>
            <option value="okara">Okara</option>
          </select><br />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="+92 300 12345678" /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
