import React from "react";

const List = ({ people }) => {
  let date = new Date();
  let count = 0;

  const calculate = (dob) => {
    let year = parseInt(dob.slice(0, 4));
    let month = parseInt(dob.slice(5, 7));
    let day = parseInt(dob.slice(8, 10));
    return { year, month, day };
  };

  const calculateAge = (dob) => {
    let { year, month, day } = calculate(dob);
    let age = date.getFullYear() - year;
    let m = date.getMonth() + 1 - month;
    if (m < 0 || (m === 0 && date.getDate() < day)) {
      age--;
    }
    return age;
  };

  const calculateBirthday = (dob) => {
    let { month, day } = calculate(dob);
    if (month === date.getMonth() + 1 && day === date.getDate()) {
      return true;
    }
  };

  return (
    <>
      {people.map((person) => {
        if (calculateBirthday(person.dob)) {
          count += 1;
          return (
            <div className="person" key={person.id}>
              <img src={person.image} alt={person.name} />
              <div>
                <h5>{person.name}</h5>
                <p>Age: {calculateAge(person.dob)}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default List;
