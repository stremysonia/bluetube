import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Logo = () => {
    return (
        <>
            <div>
                <FontAwesomeIcon
                icon={[ 'fab', 'youtube']}
                className="blutube-logo" size="2x"/>
                    <h1 className="logo-name">BluTube</h1>
            </div>
        </>
    );
}
export default Logo