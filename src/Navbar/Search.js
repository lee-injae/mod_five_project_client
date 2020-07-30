import React from 'react'

const Search = props => {
        return (
            <div class='ui search'>
                <form className="ui icon input">
                    <input class="prompt" type="text" name="search" placeholder="Search" 
                        onChange={props.changeSearch}  />
                    <i className="search icon"></i>
                </form>
                <div className="results"></div>
            </div>
        )
    }

export default Search