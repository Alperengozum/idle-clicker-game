import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
const  PrivateRoute = ({component:Component, ...rest}) => {
  const _start = useSelector((state) => state.start)

  return (
    <div>
      <Route
        {...rest}
        render={props  => (
          _start != null ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/start",

              }}
            />
          ))
        }
      />
      );


    </div>
  );
}


export default PrivateRoute;