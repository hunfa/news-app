
import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {


  render() {
    
     const {title,description,imageUrl,url,bagde,publishedAt}=this.props;

    return (
        <div className="card" >
          
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <span class="badge rounded-pill text-bg-danger mb-2">{bagde}</span>
        <a className='desc' href={url} target="_blank" rel="noreferrer"> <h5 className=" card-title">{title}</h5></a>
        <p class="card-text"><small class="text-muted"><strong> {(new Date(publishedAt)).toUTCString()}</strong></small></p>
         <p className="card-text">{description}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

NewsItem.defaultProps={
  title:"NO Title",
  description:"No Description Found",
  imageUrl:"../../public/imgnotloaded.png",
  url:"/"
}