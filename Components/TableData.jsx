import React,{useState} from 'react';
import { DataTable } from 'react-native-paper';

const TableData = (props) => {

  const [del, setDel] = useState(false)

  const toggle = ()=>{
    {del ? setDel(false):setDel(true)}
  }

  

  return (
    <DataTable>
           <DataTable.Header>
               <DataTable.Title >S.No</DataTable.Title>
               <DataTable.Title>Item Name</DataTable.Title>
               <DataTable.Title numeric>No's</DataTable.Title>
               <DataTable.Title numeric>Rate</DataTable.Title>
               <DataTable.Title numeric>Amount</DataTable.Title>
           </DataTable.Header>
          <DataTable.Row onPress={toggle}>
               <DataTable.Cell>25</DataTable.Cell>
               <DataTable.Cell>John Doe</DataTable.Cell>
               <DataTable.Cell numeric>25</DataTable.Cell>
               <DataTable.Cell numeric>25</DataTable.Cell>
               <DataTable.Cell numeric>25</DataTable.Cell>
           </DataTable.Row>
       </DataTable>
  )
}

export default TableData;