import React from 'react'
import './DescriptionBox.scss'
const DescriptionBox = () => {
  return (
    <>
        <div className="description_container">
<div className="description_navigator">
    <div className="descriptionBox_nav_box">Description</div>
    <div className="descriptionBox_nav_box fades">Reviews ({Math.floor(Math.random()*100)})</div>
</div>
<div className="descriptionBox_des">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores sunt numquam pariatur, voluptates reiciendis molestiae aliquid sit, vitae deserunt omnis cum, nemo quas. Aperiam deserunt nobis tempore architecto assumenda tempora ducimus, eos ut, fugiat eligendi dolore. Eius, aliquid veritatis? Maxime autem optio iusto suscipit, eligendi quia similique excepturi. Aspernatur!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga fugit illum eveniet eos porro nesciunt maxime ut officiis laboriosam?</p>
</div>
        </div>
    </>
  )
}

export default DescriptionBox