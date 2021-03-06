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
      {name:'Monte Cassino',author:'Sven Hussel',likes:50,price:10,imglink:'http://images.gr-assets.com/books/1328870390l/1058610.jpg',genre:"war"},
      {name:'The Art of War',author:"Sun Tzu",likes:40,price:30,imglink:"http://eduze.com/wp-content/uploads/2016/06/the-art-of-war.jpg",genre:"war"},
      {name:'Whatcha gonna do with those ducks',author:"Seth Godin",likes:30,price:45,imglink:"http://media-cache-ak0.pinimg.com/736x/61/3d/6f/613d6f14ce9214622c3d64ae96f4f22b.jpg",genre:"Self-Improvement"},
      {name:'A walk to remember',author:"Nicholas Sparks",likes:20,price:90,imglink:"https://images-na.ssl-images-amazon.com/images/I/51zXxGtyhuL._SX324_BO1,204,203,200_.jpg",genre:'romance'},
      {name:"The Notebook",author:"Nicholas Sparks",likes:10,price:55,imglink:"http://i2.wp.com/ibookpile.com/wp-content/uploads/2014/08/The-Notebook-Nicholas-Sparks.jpg?resize=420%2C675",genre:"romance"},
      {name:'War and Peace',author:'Leo Tolstoy',likes:50,price:15,imglink:"http://images.gr-assets.com/books/1413215930l/656.jpg",genre:'war'},
      {name:"The Shining",author:'Stephen King',likes:66,price:15,imglink:"https://images-na.ssl-images-amazon.com/images/I/81ipXKw8rjL.jpg",genre:"thriller"},
      {name:'Silence of the Lambs',author:"Thomas Harris",likes:120,price:20,imglink:"https://dj6cnfthgyqas.cloudfront.net/0099446782-original.jpg",genre:"thriller"},
      {name:'Eat Pray Love',author:'Elizabeth Gilbert',likes:5,price:30,imglink:"https://kimberlywinston.files.wordpress.com/2008/01/eatpraylove.jpg",genre:'self-improvement'},
      {name:'Eat Pray Love',author:'Elizabeth Gilbert',likes:5,price:30,imglink:"https://kimberlywinston.files.wordpress.com/2008/01/eatpraylove.jpg",genre:'self-improvement'}
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
 
  render:function(){
   
    var rand=Math.floor(Math.random() * this.state.book.length);
    
    return (
      <div>
        <div id="left" className="well col-xs-2">
        
        </div>
        
    <div id="content">
     
    <div className="col-xs-4"></div>
    <div className="col-xs-4">
     <Tile tileInfo={this.state.book[rand]} like={this.pressLike} />
     </div>
     </div>
        <div id="right" className="well col-xs-2"></div>
     </div>   
    )
  }
})

ReactDOM.render(<List />,document.getElementById('main'));