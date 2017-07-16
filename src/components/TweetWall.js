import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()    debugger;

  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()


  componentWillMount = () => {
   this.setState({
    tweets: this.props.newTweets
    }) 
  }

  componentWillReceiveProps = (nextProps) => {
   var currentTweets = this.state.tweets
   nextProps.newTweets.map((tweet) => {
       currentTweets.unshift(tweet)
   })
   this.setState({
    tweets: currentTweets
    }) 
  }

  shouldComponentUpdate = () => {
    this.state.tweets.length > 0
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;