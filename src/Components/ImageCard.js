import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={span:0};
        this.myRef=React.createRef();
    }
    componentDidMount=()=>{
        console.log(this.myRef);
    }
    render(){
        const {regular}=this.props.imagedata.urls;
        return (
            <img 
                ref={this.myRef}
                src={regular}
            />
        );
    }
}

export default ImageCard;





