import React, { useEffect, useState } from "react";
import productServices from "../../Api/product.services";
import history from "../../routes/history";
const Search = () => {
  const [allData,setAllData] = useState()
  const [searchtext,setSearchtext] = useState();
  const [filterSearch,setFilterSearch] = useState();

  useEffect(() => {
    console.log("check");
    productServices.getTable().then((res) => {
     setAllData(res.data)
    });
  }, []);

  const getsearchtext=(e)=>{
    setSearchtext(e.target.value)
  }

  const SearchItem=()=>{

      console.log('my search',searchtext);
      if(allData.length){
        console.log('cgeck 3');
        var search = allData.filter(items=>
            items.prdname.toLowerCase().includes(searchtext.toLowerCase())
        )
        console.log(search);
        setFilterSearch(search);
      }
  }
  const goto=()=>{
    history.push('/')
    window.location.reload();
    }
  return (
    <div>   
      <div class="box">
        <div class="title-name">
          <a>Buyer</a>
        </div>
        <div class="topnav">
          < button onClick={goto} >
            Back
          </button>
          <input id='item' type="text" placeholder="Search item.." onChange={getsearchtext}/>
          <button id='search' value='search' onClick={SearchItem}>Search</button>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dosage</th>
            <th>Price</th>
            <th>Details</th>
            <th>Ratings</th>
          </tr>
          {  !filterSearch ?
          allData?.map((items)=>{
              return (
                <tr>
                    <td>{items.prdname}</td>
                    <td>{items.type}</td>
                    <td>{items.dosage}</td>
                    <td>{items.price}</td>
                    <td>{items.details}</td>
                    <td>{items.ratings}</td>
                </tr>
              )
          }) :
          filterSearch.map((items)=>{
            return (
              <tr>
                  <td>{items.prdname}</td>
                  <td>{items.type}</td>
                  <td>{items.dosage}</td>
                  <td>{items.price}</td>
                  <td>{items.details}</td>
                  <td>{items.ratings}</td>
              </tr>
            )
        })
          }
        </table>
      </div>
    </div>
  );
};
export default Search;
