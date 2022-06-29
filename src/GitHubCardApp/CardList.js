import { render } from "@testing-library/react";
import Card from "./Card";
import testData from "./MockData"

function CardList(props)
{
    var profile = testData[0];   
    return (
   <div> {props.profiles.map(profile => <div><Card {...profile}/></div>)} </div>  
    )
}



	
export default CardList;