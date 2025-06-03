// src/component/Person.jsx
function Person({ name, age }) {
  return (
    <div>
      <prompt>Please Enter your name</prompt>
      <h2>Person Info</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      
      
    </div>
  );
}

export default Person;
