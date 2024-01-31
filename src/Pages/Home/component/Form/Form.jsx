import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import LearnMoreBtn from "../../../../Component/Buttons/LearnMoreBtn/LearnMoreBtn";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get(`https://northwind.vercel.app/api/categories`).then((res) => {
      const data = res.data;
      setData(data);
    });
  };
  const postData = (event) => {
    event.preventDefault();
    axios
      .post(`https://northwind.vercel.app/api/categories`, {
        name: name,
        mail: mail,
        message: message,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <form className={styles.ourPracticeAreaSummaryForm}>
        <h3>Get Free Quote</h3>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination.
        </p>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name}
        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        {mail}
        <select id="familyLaw" name="familyLaw">
          <option value="familyLaw1">Family Law 1</option>
          <option value="familyLaw2">Family Law 2</option>
          <option value="familyLaw3">Family Law 3</option>
          <option value="familyLaw4">Family Law 4</option>
        </select>
        <textarea
          name="Message"
          placeholder="Message"
          id="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {message}
        <LearnMoreBtn
          text="Send Message"
          bgColor="#FF6F00"
          border="none"
          color="white"
          width="66%"
          padding="15px"
          type="submit"
          onclick={postData}
        />
      </form>
      <div>
        <ul>
          {data.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;
