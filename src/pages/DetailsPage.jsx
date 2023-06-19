import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BreadcrumbsContext } from "../App";

import axios from "axios";

import { searchByID } from "../UsersAPI-config";
import { RowTemplate } from "../components/RowTemplate";
import { TableTemplate } from "../components/tableTemplate";
import { BreadcrumbsTemplate } from "../components/BreadcrumbsTemplate";

export function DetailsPage() {

  const [userInfo, setUserInfo] = useState();

  const navigate = useNavigate();

  const {breadcrumbs, setBreadcrumbs} = useContext(BreadcrumbsContext);
  
  const {id} = useParams();

  useEffect(() => {
    axios.get(searchByID(id))
      .then( ({ data } ) => {
        setUserInfo(data);
        setBreadcrumbs(() => ([{url:`/`, title: `users`}, {url: `/${data.id}`, title: data.name}]))
    })
  }, [])

  const handleClick = (type, id, name) => {
    setBreadcrumbs([{url:`/`, title: `users`} ,{url:`/${id}`, title: `${name}`}])
  }


  return (
    <div>
      <BreadcrumbsTemplate />
      {userInfo
        ?
        <>
          <TableTemplate
            name={userInfo.name}
            rows={
              <RowTemplate {...userInfo} onClick={(type) => handleClick(type, userInfo.id, userInfo.name)}/>
            } 
          />
        </>
       :
        null
      }
    </div>
  );
}
