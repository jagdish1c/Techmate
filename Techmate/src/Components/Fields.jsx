import React from 'react'

export default function Fields(props) {
  return (
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">{props.item1}</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder={props.item2} />
  </div>
  )
}
