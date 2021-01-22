import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {

    const toggelNavHandler = () => {
        setLibraryStatus(!libraryStatus);
    }

    return (
        <nav>
            <h1>Worklify</h1>
            <button onClick={toggelNavHandler}>
                Library <FontAwesomeIcon icon={faMusic} className="toggle-nav" />
            </button>
        </nav>
    );
};

export default Nav;