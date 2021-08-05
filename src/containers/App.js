import './App.scss';
import { Fragment } from 'react';
import Login from './Auth/Login';

function App() {
    return (
        <Fragment>
            <div className="App">
                <Login />
            </div>
        </Fragment>
    );
}

export default App;
