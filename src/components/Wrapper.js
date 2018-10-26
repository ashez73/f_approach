import React from 'react';
import RecordList from './RecordList';
import MyHeader from './MyHeader';
import { Container } from "reactstrap";
const Wrapper = ({data, methods})=>{
  return(
    <>
    <MyHeader/>
    <main>
    <Container style={{marginTop: "160px"}}>
    <h1>{data.list}</h1>
    <RecordList data={data} methods ={methods} />
    </Container>
    </main>
    </>
  )
}
export default Wrapper;