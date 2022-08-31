import React from 'react';


class SearchBar extends React.Component{
    state={term:''}
    onFormSubmit(event){
        event.preventDefault();
        this.props.FormSubmit(this.state.term)
    }
    onSearchChange(event){
        this.setState({term:event.target.value})
    }

    render(){
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={(e)=>this.onFormSubmit(e)}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type='text' 
                            value={this.props.term} 
                            onChange={(e)=>this.onSearchChange(e)} 
                            className=''/>
                    </div>
                    
                </form>
                    
            </div>
        )
    }

}

export default SearchBar;