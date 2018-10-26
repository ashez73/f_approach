import React, { Component } from 'react';
import './App.css';
import Wrapper from '../components/Wrapper';
import idb from 'idb';


if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

function putSomeData() {
    let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    let open = indexedDB.open('db-name', 1)
    open.onupgradeneeded = function() {
       let  db = open.result
        db.createObjectStore('objectStoreName', { autoIncrement: true })
    }    
}
putSomeData()

class App extends Component {
  constructor(props){
  super(props);
  this.getList =this.getList.bind(this);
  this.state ={response:"uauaua", list: []};
  }
componentDidMount(){
  console.log("mounted");
  this.getList();
  //this.time();
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
    var objectStoreAnotherRequest =store.getAllKeys();
    //console.log (objectStoreRequest);
   
    objectStoreRequest.onsuccess = function(){
      console.log('SUKCES!');
      that.setState({response: objectStoreRequest.result});
      console.log(objectStoreRequest.result);
    } 
    objectStoreAnotherRequest.onsuccess = function(){
      console.log('SUKCES2!');
      that.setState({list: objectStoreAnotherRequest.result});
      console.log(objectStoreAnotherRequest);
    } 
}
  
} 

upd=()=>{
  this.forceUpdate(); 
 }

 time= ()=> setInterval(
  () => console.log('zzz'),
  3000
);

/*
deleteRecords = records => {
  request = db
    .transaction([DB_STORE_NAME], "readwrite")
    .objectStore(DB_STORE_NAME)
    .delete(records);
  request.onsuccess = () => {
    let myArray = [...this.state.response];
    let index = myArray.indexOf(records);
    myArray.splice(index, 1);
    console.log(myArray);
    this.setState(() => {
      return { response: myArray };
    });
  };
};
*/

deleteRecord(record){
  //console.log(record);
  //console.log('del?');
  let open = indexedDB.open('db-name', 1);
  open.onsuccess = function() {
  let db = open.result;
  /*
  let request =db
    .transaction('db-name', "readwrite")
    .objectStore('dbname')
    .delete(record)
*/
  let myRequest =db.transaction ('objectStoreName', "readwrite").objectStore('objectStoreName');
    
    myRequest.delete(record).onsuccess =()=>{
      console.log('DELETED');
    }
 
  }
  }
  //let tx = db.transaction('objectStoreName', 'readwrite');




methods=(record,meth,e)=>{
console.log(record,meth,e);
meth==='update'? console.log('update'): this.deleteRecord(record);
}



  render() {
   // ==this.getList();
   //this.time();

    return (
      <div className="App">
        <Wrapper data = {this.state} methods={this.methods}/>
    {/*<h1>{this.state.response.firstname}</h1>*/}
      </div>
    );
  }
}

export default App;