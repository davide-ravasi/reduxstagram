import React from 'react';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment">&times;</button>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        console.log('submitting the form');
        console.log(this.refs);
        const postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(postId, author, comment);
    },
    render() {
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
});

export default Comments;