import React, { Component } from 'react'
import NewsItem from './NewsItem'// eslint-disable-next-line
import axios from 'axios';
import defaultimg from '../imgnotloaded.png'
import Spinner from './spinner';

import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: 'general'
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
            hasMore: true

        }
    }

    componentDidMount() {

        this.fetchNews();

    }



    render() {

        return (

            <div className='container'>
                <h1 className='text-center my-5'>News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<Spinner />}
                    scrollThreshold="90%"
                >
                    <div className="row">
                        {this.state.articles.map((element, index) => {
                            return (<div key={index} className="col-md-4 my-3">
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : defaultimg} url={element.url} bagde={element.source.name} publishedAt={element.publishedAt} />
                            </div>)
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }


    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchNews = async (pageNo = this.state.page) => {
        this.setState({ showloading: true });

        console.log(pageNo);
        const response = await (await axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&page=${pageNo}&category=${this.props.category}&apiKey=b12ce90c7ca041e59e53d20736a6ce95`)).data;
        this.setState({
            articles: response.articles,
            totalResults: response.totalResults,

        });




    }


    fetchMoreData = async () => {

        const pageNo = this.state.page + 1;
        this.setState({ page: this.state.page + 1 });
        console.log(pageNo);
        if (!(pageNo < Math.ceil(this.state.totalResults / this.props.pageSize)))
            this.setState({ hasMore: false });
            
        
        const response = await (await axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&page=${pageNo}&category=${this.props.category}&apiKey=b12ce90c7ca041e59e53d20736a6ce95`)).data;
        this.setState({
            articles: this.state.articles.concat(response.articles),
            totalResults: response.totalResults,

        });
    };

}
