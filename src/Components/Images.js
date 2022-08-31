import React from "react";
import ImageCard from "./ImageCard";

const Images =({data})=>data.map((image)=><ImageCard 
                    imagedata={image} 
                    key={image.id}
                    />
            )
       
    

export default Images;