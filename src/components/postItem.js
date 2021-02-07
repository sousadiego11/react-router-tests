import React from 'react'

const PostItem = (props)=> {
    console.log(props)
  
    return (
        <div>
        Posts item id is "{props.match.params.id}"
        </div>
    );
}
export default PostItem
