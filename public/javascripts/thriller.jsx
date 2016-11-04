var Tile=React.createClass({
  likeUp:function(){
    this.props.like(this.props.index);
  },
  render:function(){
    
    return(
   
    <div className="well " id="til" >
        <div className="details" >
     <p><span>Title:</span>{this.props.tileInfo.name}</p >
     <p><span>Author:</span>{this.props.tileInfo.author}</p>
     <p><span>Genre:</span>{this.props.tileInfo.genre}</p>
     <p><span>Price:</span>£{this.props.tileInfo.price}</p>
     <p><span>Likes:</span>{this.props.tileInfo.likes}</p>
     <button className="btn btn-primary" onClick={this.likeUp} >Like <span className="glyphicon glyphicon-thumbs-up"></span></button>
     <button className="btn btn-primary">Buy <span className="glyphicon glyphicon-shopping-cart"></span></button>
          </div>
        <img src={this.props.tileInfo.imglink} className="img-thumbnail" />
      
     </div>
       
    )
  }
})

var List=React.createClass({
  getInitialState:function(){
    return ({book:[
       {name:"The Shining",author:'Stephen King',likes:66,price:15,imglink:"https://images-na.ssl-images-amazon.com/images/I/81ipXKw8rjL.jpg",genre:"thriller"},
      {name:'Silence of the Lambs',author:"Thomas Harris",likes:120,price:20,imglink:"https://dj6cnfthgyqas.cloudfront.net/0099446782-original.jpg",genre:"thriller"}
      ],
      query:''
    })
  },
  sortStuff:function(){
    
    var val=event.target.value;
    var sp=val.split('&');
   
    var what=sp[0];
    var how=sp[1];
    
 
    
    var set=this.state.book;
     
    if(how=='asc'){
    var swap=true;
    while(swap){
      swap=false;
      for(var i=0;i<set.length-1;i++){
         
        if(set[i][what]>set[i+1][what]){
         
          var temp=set[i];
          set[i]=set[i+1];
          set[i+1]=temp;
          swap=true;
        }
      }
      
    }
    }
    else{var swap=true;
    while(swap){
      swap=false;
      for(var i=0;i<set.length-1;i++){
         
        if(set[i][what]<set[i+1][what]){
         
          var temp=set[i];
          set[i]=set[i+1];
          set[i+1]=temp;
          swap=true;
        }
      }
      
    }}
    this.setState({book:set});
  },
  
  pressLike:function(i){
    var update=this.state.book;
    update[i].likes++;
    this.setState({book:update})
  },
  search:function(){
    var query=this.refs.authorSearch.value;
    this.setState({query:query});
    var book=this.state.book;
    var count=false;
    for(var i=0;i<book.length;i++){
      if(query==book[i].author){
        count=true;
        i=book.length;
      }
    }
    console.log(query);
    if(count==false){
      if(query!=""){
      $('#404').removeClass("hidden");
      }
    }
    if(count==true || query=="")
     {$('#404').addClass("hidden");
      }
    
   
  },
  eachEntry:function(item,i){
    
     if(this.state.query==""){
        return (
             <div className="col-xs-4">
            
             <Tile tileInfo={item} like={this.pressLike} index={i}/>
             </div>
             );
     }
     else if(item.author==this.state.query){
        
     return (
             <div className="col-xs-4">
            
             <Tile tileInfo={item} like={this.pressLike} index={i}/>
             </div>
             )
     }
  },
  render:function(){
   
   
    
    return (
      <div>
        <div id="left" className="well col-xs-2">
        <h4>Sort likes:</h4>
        <form onChange={this.sortStuff}>
        <p>Low-High<input type="radio" name='likes' value="likes&asc"  ></input></p>
        <p>High-Low<input type="radio"  name='likes' value="likes&desc" ></input></p>
        <h4>Sort Price:</h4>
        <p>Low-High<input type="radio" name='likes' value="price&asc"  ></input></p>
        <p>High-Low<input type="radio"  name='likes' value="price&desc" ></input></p>
        </form>
        </div>
        
    <div id="content">
     
        <p>Search by author:<input type="text" name="author" ref="authorSearch" ></input><button onClick={this.search}>Search</button></p>
         
         <h4 className="hidden" id='404'>No results.</h4 >
     {this.state.book.map(this.eachEntry )}
     
     </div>
        <div id="right" className="well col-xs-2"></div>
     </div>   
    )
  }
})

ReactDOM.render(<List />,document.getElementById('main'));