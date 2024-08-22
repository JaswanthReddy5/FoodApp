import {useEffect,useState} from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import ShimmerContainer from "./ShimmerContainer";
import Smallcard from "./Smallcard";

const CardContainer =()=>{
        let [duplicateCards,setDuplicateCards]= useState([]);
        let [roundcards,setRoundcards]=useState([]);
        let [cards,setCards]=useState([]);
        let [search,setSearch]=useState("");
        async function setdata(){
            let duplicate= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            let dup= await duplicate.json();
            console.log(dup.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setDuplicateCards(dup.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setCards(dup.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        }
        async function rounddata(){
            let roundcards = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            let round = await roundcards.json();
            
        }
       
    
    useEffect(()=>{
        setdata();
        rounddata();
    },[]);

  

    return (<div id="print" >
        <div>
            <button onClick={()=>{
                let filteredcards = cards.filter(obj=>obj.info.avgRating>=4.5)
                setDuplicateCards(filteredcards)
            }}>filter</button>
            <button onClick={()=>{
              setDuplicateCards(cards)
            }}>CLEAR FILTER</button>
        </div>
        <div className="search-bar">
            <i       id="bob"   class="fa-solid fa-magnifying-glass"></i>
                <input className="bar"   type="text"placeholder="search for Restaurants" onChange={(event)=>{
                    setSearch(event.target.value)

                }}/>
                <button onClick={()=>{
                    let filterrestaurents= cards.filter(obj=>obj.info.name.toLowerCase().includes(search.toLowerCase()));
                    console.log(filterrestaurents)
                    setDuplicateCards(filterrestaurents);
                }}>search</button>
            </div>
            <div>
                <h1>Hussle-Free meal delivered right to you</h1>
            </div>
        <div className="rounding">
            <Smallcard/>
        </div>
        <div>
            <h1 className="side-heading">Top restaurants in your Area</h1> 
        </div>
        <div className="const">
        {duplicateCards.length==0?<ShimmerContainer/>:duplicateCards.map(obj=>{
            return <Card key={obj.info.id} {...obj.info}/>

        })}
        </div>
    </div>)
};
export default CardContainer;