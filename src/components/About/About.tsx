import React, { useEffect, useState } from "react";

export const About = () => {
  const [form, setForm] = useState({
    image: "",
  });
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.images);
        setData(data.images);
      });
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setUrl(`https://lexica.art/api/v1/search?q=${e.target.value}`);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">PROMPT SEARCH IMAGE</label>
        <input onChange={handleChange} type="text" name="image" id="image" />
        <button type="submit">Search</button>
      </form>
      {data.map((item: any, index) => (
        <div key={index}>
          <img src={item?.src} alt="" width="100" height="100" />
        </div>
      ))}
    </div>
  );
};
