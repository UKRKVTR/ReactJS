import { useState } from "react";
import styles from "./User.module.css";

function User(props) {
  const { isLight } = props;
  const users = [
    {
      firstName: "Test1",
      lastName: "Testovich1",
      age: 28,
      photoSrc: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
    },
    {
      firstName: "Test2",
      lastName: "Testovich2",
      age: 31,
      photoSrc:
        "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      firstName: "Test3",
      lastName: "Testovich3",
      age: 70,
      photoSrc:
        "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      firstName: "Test4",
      lastName: "Testovich4",
      age: 20,
      photoSrc:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      firstName: "Test5",
      lastName: "Testovich5",
      age: 28,
      photoSrc:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [index, setIndex] = useState(0);
  const buttonStyle = {
    border: ` 1px solid ${isLight ? "black" : "white"}`,
    backgroundColor: isLight ? "white" : "black",
    color: isLight ? "black" : "white",
  };
  function nextUser(e) {
    setIndex((index + 1) % users.length);
  }
  function prevUser(e) {
    setIndex((index - 1 + users.length) % users.length);
  }
  return (
    <article className={styles.userCard}>
      <img
        src={users[index].photoSrc}
        alt={`${users[index].firstName} ${users[0].lastName}`}
      />
      <p>
        {users[index].firstName} {users[index].lastName}
      </p>
      <p>{users[index].age}</p>
      <div className={styles.buttonContainer}>
        <button className={buttonStyle} onClick={prevUser}>
          {"<"}
        </button>
        <button className={buttonStyle} onClick={nextUser}>
          {">"}
        </button>
      </div>
    </article>
  );
}

export default User;
