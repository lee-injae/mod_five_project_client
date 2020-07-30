import React from "react"
import 'semantic-ui-css/semantic.min.css'

// import { Form } from "semantic-ui-react"

class Filters extends React.Component {


    render(){
        return(
            <div className="ui form">
                <h3>Neighborhood</h3>
                <div className="field">
                    <select name="locations" id="locations"
                    onChange={this.props.changeType}>
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

}

export default Filters
