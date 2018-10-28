import React, {
  Component
} from 'react';
import './App.css';
import Wrapper from '../components/Wrapper';
const DB_NAME = "sky";
const DB_VERSION = 1;
const DB_STORE_NAME = "store";

if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}

function putInitData() {
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
  let open = indexedDB.open('db-name', 1)
  open.onupgradeneeded = function () {
    let db = open.result
    db.createObjectStore('objectStoreName', {
      autoIncrement: true
    });
  }
}
putInitData()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recStore: '',
      list: [],
      addNewVis: 1,
      formVis: 0,
      subVis: 1,
      mode: 'none',
      ownsCar: '',
      buildingBuilt: '',
      companyName: '',
      model: '',
      color: '',
      wheels: '',
      legal: '',
      recalled: ''
    };
  }
  componentDidMount() {
    this.getList();
  }

  getList = () => {
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = () => {
      let db = open.result;
      let tx = db.transaction('objectStoreName', 'readwrite');
      let store = tx.objectStore('objectStoreName');
      var objectStoreRequest = store.get(16);
      var objectStoreAnotherRequest = store.getAllKeys();

      objectStoreRequest.onsuccess = () => {
        this.setState({
          response: objectStoreRequest.result
        });
      }
      objectStoreAnotherRequest.onsuccess = () => {
        this.setState({
          list: objectStoreAnotherRequest.result
        });
      }
    }
  }
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
          that.setState({
            list: myAnotherRequest.result
          });
        }
      }
    }
  }
  addRecord = (e, myMode) => {
    let myObj = {};
    myObj.ownsCar = this.state.ownsCar;
    myObj.buildingBuilt = this.state.buildingBuilt;
    myObj.companyName = this.state.companyName;
    if (this.state.ownsCar === "yes") {
      myObj.model = this.state.model;
      if (this.state.model === "Toyota") {
        myObj.recalled = this.state.recalled;
      }
      else if (this.state.model === "Ford") {
        myObj.color = this.state.color;
        myObj.wheels = this.state.wheels;
        if (parseInt(this.state.wheels) > 4) {
          myObj.legal = this.state.legal
        }
      }
    };
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = () => {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName', "readwrite").objectStore('objectStoreName');
      let myRequest;
      myRequest = myMode === "add" ? requestStore.add(myObj) : requestStore.put(myObj, this.state.recStore);

      myRequest.onsuccess = () => {
        alert('RECORD ADDED/UPDATED');
        this.setState({
          formVis: 0,
          addNewVis: 1,
          mode: "none"
        });
        let myAnotherRequest = requestStore.getAllKeys();
        myAnotherRequest.onsuccess = () => {
          this.setState({
            list: myAnotherRequest.result
          });
        }
      }
    }
  }
  readRecord = (e, data, mymode) => {
    let sub = mymode === "read" ? 0 : 1;
    let myObj = data;
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = () => {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName').objectStore('objectStoreName');
      let myRequest = requestStore.get(myObj);
      myRequest.onsuccess = () => {
        alert('RECORD RETRIEVED');
        this.setState({ formVis: 1, addNewVis: 1, subVis: sub, mode: mymode, ...myRequest.result });
      }
    }
  }
  purgeState = () => {
    console.log('PURGING')
    let myObj = { ...this.state };
    console.log(myObj)

    let counter = 0;
    for (let key in myObj) {
      if (counter >= 6) {
        myObj[key] = '';
      }
      counter++;
    }
    return myObj;
  }
  showForm = (opMode) => {
    console.log('WAS CLICKED', opMode);

    this.setState({
      formVis: 1,
      addNewVis: 0,
      mode: "add",
      subVis: 1, ...this.purgeState()
    });
    /*hotfix to potential purge problem
    rebuilding state to desired condition*/
    this.setState({ mode: "add", subVis: 1, addNewVis: 0, formVis: 1 })
  }
  listManageMethods = (e, data = 0) => {
    console.log("ATTEMPTING TO CHANGE:", e.target.innerHTML);
    if (e.target.innerHTML === "Delete") {
      this.deleteRecord(data)
    }
    else if (e.target.innerHTML === "Update") {
      /*not the real update yet, just reading and setting up form
      probably I should unify naming conventions*/

      this.setState({ recStore: data });
      this.readRecord(e, data, "update");
    }
    else {
      this.setState({ recStore: data });
      this.readRecord(e, data, "read");
    }
  };
  setInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  processSubmit = (e, opMode) => {
    e.preventDefault();
    console.log('ATTEMPTING TO ADD');
    /*And similary this method will 
    cater both to adding a record and
    updating it*/
    this.addRecord(e, opMode);
  }
  render() {
    return (
      <div className="App" >
        <Wrapper state={this.state} mydb={[DB_NAME, DB_STORE_NAME, DB_VERSION]} showForm={this.showForm} readRecord={this.readRecord} updateRecord={this.updateRecord} deleteRecord={this.deleteRecord} createRecord={this.creareRecord} setInput={this.setInput} processSubmit={this.processSubmit} listManageMethods={this.listManageMethods} />
      </div>
    );
  }
}
export default App;