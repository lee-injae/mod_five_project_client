import React from 'react'
// import SearchForm from './SearchForm'

const Search = props => {
        return (
            <div>
                <form className="search-form">
                    <input type="text" name="search" placeholder="Search" 
                        onChange={props.changeSearch}  />
                </form>
            </div>
        )
    }

export default Search