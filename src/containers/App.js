import React, {
  Component
} from 'react';
import './App.css';
import Wrapper from '../components/Wrapper';
import idb from 'idb';


if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

function putSomeData() {
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
  let open = indexedDB.open('db-name', 1)
  open.onupgradeneeded = function () {
    let db = open.result
    var myStore = db.createObjectStore('objectStoreName', {
      autoIncrement: true
    });
    myStore.add({ taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: 'December', year: 2013, notified: "no" });

  }
}
putSomeData()

class App extends Component {
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);
    this.state = {
      response: "uauaua",
      list: [],
      addNewVis: 1
    };
  }
  componentDidMount() {
    console.log("mounted");
    this.getList();
    //this.time();
    //this.upd();
  }

  getList() {
    var that = this;
    // console.log("getting list");
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = function () {
      let db = open.result;
      let tx = db.transaction('objectStoreName', 'readwrite');
      let store = tx.objectStore('objectStoreName');
      var objectStoreRequest = store.get(1);
      var objectStoreAnotherRequest = store.getAllKeys();
      //console.log (objectStoreRequest);

      objectStoreRequest.onsuccess = function () {
        console.log('SUKCES!');
        that.setState({
          response: objectStoreRequest.result
        });
        console.log(objectStoreRequest.result);
      }
      objectStoreAnotherRequest.onsuccess = function () {
        console.log('SUKCES2!');
        that.setState({
          list: objectStoreAnotherRequest.result
        });
        console.log(objectStoreAnotherRequest);
      }
    }

  }

  upd = () => {
    this.forceUpdate();
  }

  time = () => setInterval(
    () => console.log('zzz'),
    3000
  );


  deleteRecord(record) {
    var that = this;
  
    console.log('still here');
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = function () {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName', "readwrite").objectStore('objectStoreName');
      let myRequest = requestStore.delete(record);

      myRequest.onsuccess = () => {
        console.log('DELETED');
        console.log('processing new request')
        
        let myAnotherRequest = requestStore.getAllKeys();
        console.log(myAnotherRequest)
        myAnotherRequest.onsuccess = () => {
          console.log('getting again');
          that.setState({ list: myAnotherRequest.result });
        }
      }



    }
  }

    methods = (record, meth, e) => {
      //console.log(record,meth,e);
      meth === 'update' ? console.log('update') : this.deleteRecord(record);
    }



    render() {
      // ==this.getList();
      //this.time();

      return (<div className="App" >
        <Wrapper data={this.state} methods={this.methods}/>
        </div>
      );
    }
  }
  
export default App;