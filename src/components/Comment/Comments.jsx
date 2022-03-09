import React, { useEffect, useState,useContext } from 'react';
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import { productsContext } from '../../context/ProductContext';

import './Comments.css'

const Comments = () => {
    const { getProductDetails, productDetails,editProductDetails } =
    useContext(productsContext);
    let params = useParams().id;
    const [message,setMessage] = useState('')

    useEffect(() => {
    getProductDetails(params);
    }, []);

    function sendMessage(){
        console.log(productDetails)
        let [...newComment] = productDetails.comments
        newComment.push(message)
        let newObj = {
          ...productDetails,
          comments: newComment,
        }
       console.log(newObj)

        editProductDetails(newObj.id,newObj)
        getProductDetails(params)
      }

    const {
        user: { email },
      } = useAuth();
      console.log({ email });


    return (
        <>
        <div className='comBlock'>
            <input type="text" className="comInput" onChange={(e)=>setMessage(e.target.value)} />
            <button className="CommentButton" onClick={sendMessage}>Add Comment</button>
        </div>

 
 <div className="comments">
        {productDetails.comments?productDetails.comments.map((elem) => (
            <div className="task">
                <div className="mainTaskBlock">
                     <h5  className="makersLogo" >{email}</h5>
                </div>
                <div key={elem.id} className="mainTask">{elem}</div>
            </div>
        )):null}
 </div>
      
        </>
    );
};

export default Comments;