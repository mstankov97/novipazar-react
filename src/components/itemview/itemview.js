import React from "react";
import {render} from "react-dom";
import './itemviewstyle.css'
import Media from "react-bootstrap/Media";

const ItemView = (props)=>{

return <Media>
        <img
            width={64}
            height={64}
            className="mr-3"
            src={props.item.images[0].imageUrl} //[""0""].images[1].imageUrl
            alt="Generic placeholder"
        />
    {console.log(props.item.images.imageUrl)}
        <Media.Body>
            <h5> {props.item.name}</h5>
            <p>id:{props.item.id}
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </p>
        </Media.Body></Media>
}
export default ItemView;

