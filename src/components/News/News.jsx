import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Loading from "../Loading/Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitlizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7386c959b63b4308ae9555476ed427e4&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  // async componentDidMount() {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7386c959b63b4308ae9555476ed427e4&page=1&pageSize=${props.pageSize}`;
  //   setState({
  //     loading: true,
  //   });
  //   const data = await fetch(url);
  //   const parsedData = await data.json();
  //   console.log(parsedData);
  //   setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // }
  // handlePreviousClick = async () => {
  //   console.log(" Previous Clicked");
  //   const url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=7386c959b63b4308ae9555476ed427e4&page=
  //   ${state.page - 1}&pageSize=${props.pageSize}`;
  //   setState({
  //     loading: true,
  //   });
  //   const data = await fetch(url);
  //   const parsedData = await data.json();
  //   console.log(parsedData);
  //   setState({
  //     articles: parsedData.articles,
  //     page: state.page - 1,
  //     loading: false,
  //   });
  // };

  // handleNextClick = async () => {
  //   console.log("Next clicked");
  //   if (
  //     state.page + 1 >
  //     Math.ceil(state.totalResults / props.pageSize)
  //   ) {
  //   } else {
  //     const url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apiKey=7386c959b63b4308ae9555476ed427e4&page=${
  //       state.page + 1
  //     }&pageSize=${props.pageSize}`;
  //     setState({
  //       loading: true,
  //     });
  //     const data = await fetch(url);
  //     const parsedData = await data.json();
  //     console.log(parsedData);
  //     setState({
  //       articles: parsedData.articles,
  //       page: state.page + 1,
  //       loading: false,
  //     });
  //   }
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=7386c959b63b4308ae9555476ed427e4&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setLoading(false);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1
        className="text-muted text-center"
        style={{ margin: "40px 0px", marginTop: "80px" }}
      >
        InSync - Your Daily Dose of NEWS
      </h1>

      {loading && <Loading />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static.theprint.in/wp-content/uploads/2020/11/Brahmos.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
