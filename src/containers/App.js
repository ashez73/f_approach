import React, {
  Component
} from 'react';
import './App.css';
import Wrapper from '../components/Wrapper';


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
      response: {},
      list: [],
      addNewVis: 1,
      formVis: 0,
      subVis:1,
      mode:'none',
    };
  }
  componentDidMount() {
    
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
      var objectStoreRequest = store.get(16);
      var objectStoreAnotherRequest = store.getAllKeys();
      //console.log (objectStoreRequest);

      objectStoreRequest.onsuccess = function () {
        //console.log('OH SUKCES!', objectStoreRequest.result);
        that.setState({
          response: objectStoreRequest.result
        });
        //console.log(objectStoreRequest.result);
      }
      objectStoreAnotherRequest.onsuccess = function () {
       // console.log('SUKCES2!');
        that.setState({
          list: objectStoreAnotherRequest.result
        });
       // console.log(objectStoreAnotherRequest);
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
    //console.log('still here');
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = function () {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName', "readwrite").objectStore('objectStoreName');
      let myRequest = requestStore.delete(record);
      myRequest.onsuccess = () => {
        let myAnotherRequest = requestStore.getAllKeys();
        myAnotherRequest.onsuccess = () => {
          that.setState({ list: myAnotherRequest.result });
        }
      }
    }
  }

  addRecord(myRecord) {
    let myObj = myRecord;
   // console.log(myObj);
    /*
    if (myObj.model !== "Toyota") {
      myObj.recalled = "";
    } else if (myObj.model !== "Ford") {
      myObj.wheels = "";
      myObj.color = "";
      myObj.legal = "";
    }
    if (!myObj.ownsCar) {
      myObj.model = "";
      myObj.wheels = "";
      myObj.color = "";
      myObj.recalled = "";
      myObj.legal = "";
    }
    */
    var that = this;
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = function () {
    let db = open.result;
      let requestStore = db.transaction('objectStoreName', "readwrite").objectStore('objectStoreName');
      let myRequest = requestStore.add(myObj);
      myRequest.onsuccess = () => {
        alert('RECORD ADDED');
        that.setState({formVis:0,addNewVis:1, mode:"none"});
        let myAnotherRequest = requestStore.getAllKeys();
        myAnotherRequest.onsuccess = () => {
          that.setState({ list: myAnotherRequest.result });
        }
      }
    }
  }

  readRecord(myRecord){
    let myObj = myRecord;
    var that = this;
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = function () {
    let db = open.result;
    let requestStore = db.transaction('objectStoreName').objectStore('objectStoreName');
    let myRequest = requestStore.get(myObj);
    myRequest.onsuccess = () => {
      alert('RECORD READ');
     // console.log(myRequest.result);
      that.setState({formVis:1,addNewVis:1, subVis:0, mode:"read", response: myRequest.result});
     // let myAnotherRequest = requestStore.getAllKeys();
      //myAnotherRequest.onsuccess = () => {
      //  that.setState({ list: myAnotherRequest.result });
      }
    }
  }

  methods = (e, meth, myRecord = 0) => {
   // console.log(myRecord, meth, e);
    if (meth === "update") {
    }
    else if (meth === "delete") {
      this.deleteRecord(myRecord);
    }
    else if (meth === "getForm") {
      this.setState({formVis:1,addNewVis:0, mode:"add"});
    }
    else if (meth === "add") {
      this.addRecord(myRecord)
    }
    else if (meth === "read"){
      this.readRecord(myRecord)
    }

  }

  toggleFormVisibility() {
    this.state.formVis ? this.setState({ formVis: 0 }) : this.setState({ formVis: 1 });
  }

  toggleAddButtonVisibility() {
    this.state.addNewVis ? this.setState({ addNewVis: 0 }) : this.setState({ addNewVis: 1 });
  }


  render() {
    // ==this.getList();
    //this.time();

    return (<div className="App" >
      <Wrapper data={this.state} methods={this.methods} />
    </div>
    );
  }
}

export default App;