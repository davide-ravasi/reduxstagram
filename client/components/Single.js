import React from 'react';
import Photo from './Photo';
import Comments from './Comments';


const Single = React.createClass({
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.postId];
    console.log(post);
    return (
      <div className="single-photo">
        <Photo {...this.props} key={i} i={i} post={post}  />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
