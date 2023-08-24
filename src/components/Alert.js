import React from 'react'

export default function Alert(props) {

  const capitalize = (word) => {
      const lwr = word.toLowerCase();
      return lwr.charAt(0).toUpperCase() + lwr.slice(1);
  }

  return (
        props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
            {/* {props.alert} */}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}
