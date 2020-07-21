import React from 'react'

class SearchForm extends React.Component {

    

    render(){
        return(
            <div>
                <form className="search-form">
                    <input type="text" name="search" placeholder="Search" />
                </form>
            </div>
        )
    }

}

export default SearchForm