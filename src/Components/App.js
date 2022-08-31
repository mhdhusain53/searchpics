import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Images from './Images';

class App extends React.Component{
    state={data:[]};

    onFormSubmit=async (props)=>{
        const response=await axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                Authorization: 'Client-ID AswYbgADZScvudmuH_j-JIHVguirxj5hjERB9mBYyzE'
            },
            params:{
                query:props
            }
        });
        this.setState({data:response.data.results});

    }

    render(){ 
        return (
    <div className='ui container' style={{marginTop: '15px'}}>
        <SearchBar 
            FormSubmit={this.onFormSubmit}
        />
        Found {this.state.data.length} images.
        <Images
            data={this.state.data}
        />
    </div>
        )
    }
}

export default App;