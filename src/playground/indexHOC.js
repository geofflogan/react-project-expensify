//HOC Higher Order Component - A component that renders another component(s)
//Reuse code
//Render highjacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Hey bud</h1>
        <p>The info is {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) =>(
//         <div>
//             {props.isAdmin && <p>This is private info</p> }
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
            (<WrappedComponent {...props}/>) : 
            (<p>Please log in to see this</p>)}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

// const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuthenticated= {false} info='hey bud'/>, document.getElementById('root'))