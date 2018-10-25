import React, { Component } from 'react';
import './App.css';
import idb from 'idb';

if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

function putSomeData() {
    let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    let open = indexedDB.open('db-name', 1)
    open.onupgradeneeded = function() {
        let db = open.result
        db.createObjectStore('objectStoreName', { autoIncrement: true })
    }    
}
putSomeData()

class App extends Component {
  constructor(props){
  super(props);
  this.getList =this.getList.bind(this);
  this.state ={response:"lolz"};
  }
componentDidMount(){
  console.log("mounted");
  this.getList();
  //this.upd();
}

getList(){
  var that = this;
 // console.log("getting list");
  let open = indexedDB.open('db-name', 1);
  open.onsuccess = function() {
    let db = open.result;
    let tx = db.transaction('objectStoreName', 'readwrite');
    let store = tx.objectStore('objectStoreName');
    var objectStoreRequest =store.get(1);
    //console.log (objectStoreRequest);
   
    objectStoreRequest.onsuccess = function(){
      console.log('SUKCES!');
      that.setState({response: objectStoreRequest.result});
      console.log(objectStoreRequest.result);
    } 
}
  
}
 
upd=()=>{
  this.forceUpdate(); 
 }
  render() {
   // ==this.getList();
   

    return (
      <div className="App">
        <h2>lol</h2>
        <h1>{this.state.response.firstname}</h1>
      </div>
    );
  }
}

export default App;