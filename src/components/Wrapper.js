import React from 'react';
import RecordList from './RecordList';
import MyHeader from './MyHeader';
import { Container } from "reactstrap";
import AddNewRecordBtn from './AddNewRecordBtn'
import MasterForm from '../containers/MasterForm';
const Wrapper = ({data, methods})=>{
  console.log('vis', data.formVis);
  return(
    <>
    <MyHeader/>
    <main>
    <Container style={{marginTop: "160px"}}>
    <h1>{data.list}</h1>
    <RecordList data={data} methods ={methods} />
    {data.formVis?<MasterForm data={data} methods ={methods}/>:null}
    <AddNewRecordBtn btAdd = {data.addNewVis} methods ={methods}/>
    </Container>
    </main>
    </>
  )
}
export default Wrapper;