import React, {useState} from "react";
import ItemView from "../itemview/itemview";
import 'bootstrap/dist/css/bootstrap.min.css'
class ItemList extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            items: [] ,
            isLoaded:false}
        // const [isLoaded, setIsLoaded] = useState(false);
        // const [items, setItems] = useState([]);
    //this.handleClick = this.handleClick.bind(this);
        this.ClickHandler = this.ClickHandler.bind(this);
    }


    componentDidMount(){
        fetch("http://www.localhost:8080/items")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({isLoaded:true});
                    this.setState({items:result});
                }
            );

    }

     ClickHandler (e){
        e.preventDefault();

        fetch("http://www.localhost:8080/items")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({isLoaded:true});
                    this.setState({items:result});
                },
            )

    }


    render(){
        return(<div>

            <button className={'btn btn-danger'} onClick={this.ClickHandler}> fetch <data></data></button>
            {/*{this.state.items.map(item => <ItemView item={item}/>)}*/}

        </div>)
    }



}
export default ItemList