import React from 'react';
import RecordList from './RecordList';
import MyHeader from './MyHeader';
import { Container } from "reactstrap";
import AddNewRecordBtn from './AddNewRecordBtn'
import MasterForm from './MasterForm';
import Scroll from '../components/Scroll';
import { NameContext } from '../containers/App'


class Wrapper extends React.Component {
  static contextType = NameContext;
  render() {
    return (
      <>
        <MyHeader />
        <main>
          <Container style={{ marginTop: "160px" }}>
            <NameContext.Consumer>
              {name => (<div><h3>{name[0]} v: {name[1]}</h3>
                <h5>store: {name[2]}</h5></div>)}
            </NameContext.Consumer>
            <Scroll items = {this.props.state.list.length}>
              <RecordList state={this.props.state} listManageMethods={this.props.listManageMethods} />
            </Scroll>
            {this.props.state.formVis ? <MasterForm setInput={this.props.setInput} state={this.props.state} processSubmit={this.props.processSubmit} /> : null}
            <AddNewRecordBtn state={this.props.state} showForm={this.props.showForm} />
          </Container>
        </main>
      </>
    )
  }
}
export default Wrapper;