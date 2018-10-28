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
    myStore.add({
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: 'December',
      year: 2013,
      notified: "no"
    });

  }
}
putSomeData()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      //console.log (objectStoreRequest);

      objectStoreRequest.onsuccess = () => {
        //console.log('OH SUKCES!', objectStoreRequest.result);
        this.setState({
          response: objectStoreRequest.result
        });
        //console.log(objectStoreRequest.result);
      }
      objectStoreAnotherRequest.onsuccess = () => {
        // console.log('SUKCES2!');
        this.setState({
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
          that.setState({
            list: myAnotherRequest.result
          });
        }
      }
    }
  }

  addRecord(myRecord) {
    let myObj = myRecord;
    var that = this;
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = function () {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName', "readwrite").objectStore('objectStoreName');
      let myRequest = requestStore.add(myObj);
      myRequest.onsuccess = () => {
        alert('RECORD ADDED');
        that.setState({
          formVis: 0,
          addNewVis: 1,
          mode: "none"
        });
        let myAnotherRequest = requestStore.getAllKeys();
        myAnotherRequest.onsuccess = () => {
          that.setState({
            list: myAnotherRequest.result
          });
        }
      }
    }
  }

  readRecord = (myRecord, update = false) => {
    let myObj = myRecord;
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = () => {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName').objectStore('objectStoreName');
      let myRequest = requestStore.get(myObj);
      myRequest.onsuccess = () => {
        alert('RECORD READ');
        let displayMode = update ? [1, 0, 1, "update"] : [1, 1, 0, "read"];
        this.setState({
          formVis: displayMode[0],
          addNewVis: displayMode[1],
          subVis: displayMode[2],
          mode: displayMode[3],
          response: myRequest.result
        });
      }
    }
  }

  updateRecord = (myRecord) => {
    let myObj = myRecord[1];
    let open = indexedDB.open('db-name', 1);
    open.onsuccess = () => {
      let db = open.result;
      let requestStore = db.transaction('objectStoreName').objectStore('objectStoreName');
      let myRequest = requestStore.put(myObj);
      myRequest.onsuccess = () => {
        alert('RECORD UPDATED');
        this.setState({
          formVis: 1,
          addNewVis: 1,
          subVis: 0,
          mode: "update",
          response: myRequest.result
        });
        // let myAnotherRequest = requestStore.getAllKeys();
        //myAnotherRequest.onsuccess = () => {
        //  that.setState({ list: myAnotherRequest.result });
      }
    }
  }

  showForm = () => {

    this.setState({
      formVis: 1,
      addNewVis: 0,
      mode: "add",
    })
  }

  listManageMethods = (e, meth, myRecord = 0) => {
    // console.log(myRecord, meth, e);
    if (meth === "update") {
      this.updateRecord(myRecord)
    } else if (meth === "delete") {
      this.deleteRecord(myRecord);
    } else if (meth === "getForm") {
      this.setState({
        formVis: 1,
        addNewVis: 0,
        subVis: 1,
        mode: "add"
      });
    } else if (meth === "add") {
      this.addRecord(myRecord)
    } else if (meth === "read") {
      this.readRecord(myRecord)
    }

  }

  toggleFormVisibility() {
    this.state.formVis ? this.setState({
      formVis: 0
    }) : this.setState({
      formVis: 1
    });
  }
  toggleAddButtonVisibility() {
    this.state.addNewVis ? this.setState({
      addNewVis: 0
    }) : this.setState({
      addNewVis: 1
    });
  }

  setInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  processSubmit = (e) => {
    e.preventDefault();
    if (this.props.data.mode === "add") {
      this.props.methods(e, "add", this.state)
    }
  }
  render() {
    return (
      <div className="App" >
        <Wrapper state={this.state} showForm={this.showForm} readRecord={this.readRecord} updateRecord={this.updateRecord} deleteRecord={this.deleteRecord} createRecord={this.creareRecord} setInput={this.setInput} processSubmit={this.processSubmit} listManageMethods={this.listManageMethods} />
      </div>
    );
  }
}
export default App;