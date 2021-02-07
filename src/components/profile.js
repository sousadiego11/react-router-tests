import React from 'react'

const Profile = (props)=> {
  const [redirect, setRedirect] = React.useState(false)

  console.log(props)

  const redir = ()=>{
    if(redirect){
      return(
        props.history.push('./')
      )
    }
  }

  return (
  <>
    {redir()}
      <div>Posts of profile</div>
      <button  
        onClick={()=> setRedirect(true)}
      >
        Ir para página home
      </button>
  </>
  );
}

export default Profile;
