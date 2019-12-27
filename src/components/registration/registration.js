import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API, postData } from "../../requests";

const Registration = props => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [invait, setInvait] = useState("");
  const [group, setGroup] = useState(1);

  const handleEvent = event => {
    event.preventDefault();

    const data = {
      name,
      surname,
      login,
      password,
      invait,
      group
    };

    console.log(data);

    postData("/Account/Register", data);
  };

  return (
    <div>
      <form onSubmit={handleEvent}>
        <label>Имя :</label> <br />
        <input
          className="registInput"
          onChange={e => setName(e.target.value)}
          required
          type="text"
        />
        <br />
        <label>Фамилия :</label> <br />
        <input
          className="registInput"
          onChange={e => setSurname(e.target.value)}
          required
          type="text"
        />
        <br />
        <label>Логин :</label> <br />
        <input
          className="registInput"
          onChange={e => setLogin(e.target.value)}
          required
          type="text"
        />
        <br />
        <label>Пароль :</label> <br />
        <input
          className="registInput"
          onChange={e => setPassword(e.target.value)}
          required
          type="text"
        />
        <br />
        <label>Инвайт :</label> <br />
        <input
          className="registInput"
          onChange={e => setInvait(e.target.value)}
          required
          type="text"
        />
        <br />
        <label>Группа :</label> <br />
        <select>
          {/* {group.length > 0 ? (
            group.map(item=>{
            <option value={item.id}>{item.name}</option>
            })
          ) : (
            <option>loading</option>
          )} */}
          <option>ИБ</option>
          <option>ПИ</option>
        </select>
        <br />
        {/* <Link to="/"> */}
        <button type="submit">Зарегистрироваться</button>
        {/* </Link>  */}
      </form>
    </div>
  );
};

export default Registration;
