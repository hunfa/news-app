import React, { Component } from 'react'
import NewsItem from './NewsItem'// eslint-disable-next-line
import axios from 'axios';
import defaultimg from '../imgnotloaded.png'
import Spinner from './spinner';


export default class News extends Component {

static defaultProps={
    country:"in",
    pageSize:8,
    category:'general'
}

constructor(){
    super();
    this.state={
        articles:[],
        totalResults:0,
        showloading:true,
        page:1,
        

    }
}

componentDidMount(){
   
   this.fetchNews();
  
   }


 handlenext=()=>{
        this.setState({page:this.state.page+1});
        this.fetchNews(this.state.page+1);
}

handleprevious=()=>{
    this.setState({page:this.state.page-1});
    this.fetchNews(this.state.page-1);
}


    render() {
       
        return (
            
            <div className='container'>
                <h1 className='text-center my-5'>News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
           {this.state.showloading&& <Spinner/>}
                <div className="row">
                    {!this.state.showloading&& this.state.articles.map((element,index)=>{
                        return ( <div key={index} className="col-md-4 my-3">
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:defaultimg} url={element.url} bagde={element.source.name} publishedAt={element.publishedAt}/>
                    </div>)
                    })}

               
               
               
               
                </div>
               {!this.state.showloading&& <div className='d-flex justify-content-between my-3'> 
                <button onClick={this.handleprevious} disabled={this.state.page<=1} type="button" class="btn btn-dark">Previous</button>
                    <button onClick={this.handlenext} disabled={this.state.page>Math.ceil(this.props.pageSize/this.state.page)} type="button" class="btn btn-dark">Next</button>
               </div>}
            </div>
        )
    }


     capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

     fetchNews=async(pageNo=this.state.page)=>{
        this.setState({showloading:true});
        const response=await  (await axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&page=${pageNo}&category=${this.props.category}&apiKey=b12ce90c7ca041e59e53d20736a6ce95`)).data;
        this.setState({articles:response.articles,
        totalResults:response.totalResults,
        showloading:false
        });
        // console.log(response.articles);
        
       }
    
}
