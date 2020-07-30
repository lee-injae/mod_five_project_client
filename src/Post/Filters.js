import React from "react"
import 'semantic-ui-css/semantic.min.css'

const Filters = (props) => {
        return(
            <div className="ui selection dropdown">
                <h4>Neighborhood</h4>
                <div className="field">
                    <select name="locations" id="locations"
                     onChange={props.changeFilterType}>
                        <option value="all">All</option>
                        <option value="adamsmorgan">Adams Morgan</option>
                        <option value="dupontcircle">Dupont Circle</option>
                        <option value="kalorama">Kalorama</option>
                        <option value="ustreet">U Street</option>
                        <option value="woodleypark">Woodley Park</option>
                    </select>
                </div>
            </div>
        )
    }

export default Filters
