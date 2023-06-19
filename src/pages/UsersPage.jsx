import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { BreadcrumbsContext } from "../App";

import { RowTemplate } from "../components/RowTemplate";
import { TableTemplate } from "../components/tableTemplate";

import axios from "axios"

import { BASE_URL } from "../UsersAPI-config";
import { BreadcrumbsTemplate } from "../components/BreadcrumbsTemplate";


export function UsersPage() {
  
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const {breadcrumbs, setBreadcrumbs} = useContext(BreadcrumbsContext)
  
  useEffect(() => {
    axios.get(BASE_URL).then(({data}) => setUsers(data))
  }, [])

  const handleClick = (type, id, name) => {
    setBreadcrumbs([{url:`/`, title: `users`} ,{url:`/${id}`, title: `${name}`}])

  if(type === 'id'){
      navigate(`/user/${id}`)
  }

  }

  return(
    <>
    <BreadcrumbsTemplate />
    <TableTemplate 
      rows={users.map((item => {
        return(
          <RowTemplate 
            key={item.id} 
            name={item.name} 
            id={item.id}
            onClick={(type) => handleClick(type, item.id, item.name)}
          />
        )
      }))}
    />
    </>
  )
}