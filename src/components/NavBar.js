import React from "react";
import SearchBar from "../components/SearchBar"
import Logo from "../components/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas)


const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
          <Logo></Logo>
          <SearchBar></SearchBar>
            
            <FontAwesomeIcon
            icon={[ 'fas', 'search']}
            className="search-icon icon" size="s"/>

              <FontAwesomeIcon
              icon={[ 'fas', 'video']}
              className="video-icon icon" size="s"/>

                <FontAwesomeIcon
                icon={[ 'fas', 'bell']}
                className="bell-icon icon" size="s"/>

                  <FontAwesomeIcon
                  icon={[ 'fas', 'user-circle']}
                  className="user-circle-icon icon" size="s"/>
      </div>
    </>
  );
}
export default NavBar;