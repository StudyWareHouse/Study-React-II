import React from 'react';

const UserContext = React.createContext();
const user = { name: "Mike", age: 23 };

const ParentComponent = () => {
  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  )
}

const ChildComponent = () => {
  // ...
  return (
    <div>
      <UserContext.Consumer>
        {user => (
          <React.Fragment>
            <p>name is {user.name}</p>
            <p>age is {user.age}</p>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    </div>
  )
}

export default ParentComponent;
