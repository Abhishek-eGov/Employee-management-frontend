import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";
import { useQuery } from "react-query";
import { Button, Card, Col, Space, Table, Tooltip } from 'antd';
import Search from 'antd/lib/input/Search';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import axios from 'axios';

function  Home (){
 
 const [tableData , settableData] = useState([]);

 // fetch employee using useQuery

const fetchUsers = async () => {
  const res = await fetch("https://608a365f8c8043001757fd98.mockapi.io/user/Employee").
  then((res) => res.json())
  .then((res)=> settableData(res))
  return console.log('send');
};

  const { res, status } = useQuery("users", fetchUsers);
console.log('getting',res)


//delete employee



const Delete = (id) => {
  axios
    .delete(`https://608a365f8c8043001757fd98.mockapi.io/user/Employee/${id}`)
    .then(() => {
      fetchUsers();
      console.log('DATA DELETE');
    });
};

const columns = [
  {
    title: 'Sl No.',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Location',
    dataIndex: 'location',
  },
  {
    title: 'Mobile No.',
    dataIndex: 'phone',
  },
  {
    title:  'Action',
    key: 'action',
    render: (record , id) => (
      <Space size="middle">
        <a>
          
            
              <EditOutlined
                style={{ fontSize: '22px', color: 'skyblue' }}
               
              />
          
        </a>
        <a>
          <DeleteOutlined 
          onClick={() => Delete(record.id)}
            style={{ fontSize: '22px', color: 'skyblue' }}
           
          />
          
    </a>
       
      </Space>
    ),
  },
];

return(
    
    <>
    <Header/>
 
    <div className="flex items-center mt-24 mb-10">
          <div className="flex-grow text-left px-4 py-2 m-2">
            <h5 className="text-gray-900 font-bold text-xl">Employee Listing</h5>
          </div>
          
          <div className="flex-grow text-right px-4 py-2 m-2">
           <Link to="add">
              <button  className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <span className="pl-2">Add Employee</span>
              </button>
              </Link>
            
          </div>
        
        </div>
        <>
        <Card title="" bordered={true} style={{}}>
        <Col md={{ span: 2 }}>
          <Tooltip title="Back">
            <Button
              type="primary"
              style={{
                marginTop: 0,
                borderRadius: '.35rem',
                backgroundColor: '#001529',
                width: '3rem',
              }}
              // onClick={() => nav(-1)}
              // icon={
              //   <DoubleLeftOutlined
              //     style={{ fontSize: '10', fontWeight: '900' }}
              //   />
              // }
            />
          </Tooltip>
        </Col>
        <h4
          style={{
            textAlign: 'justify',
            marginTop: '1rem',
            marginLeft: '1rem',
          }}
        >
          
        </h4>
        <div>
      
          <Table
            columns={columns}
            dataSource={tableData}
            rowKey={(record) => record?.id}
            style={{ margin: '30px', width: '90%' }}
          />
        </div>
      </Card>
      </>
      
    </>

)
}
 export default Home;