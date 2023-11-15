import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import './CSS/Card.css';

export default function Card(props) {
  return (
    <>
        <div className="card">
            <div className="wrapper">
                <div className="id">{props.cardDetails.id}</div>
                <div className="profile">
                    <div style={{textTransform : "uppercase"}}>{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"active-status online" : "active-status"}></div>
                </div>
            </div>
            <div className="title"> {props.cardDetails.title}</div>
            <div className="tag">
              <div className="icon color-grey"> <HiDotsHorizontal /></div>

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="tag-box">
                                <div className="tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
