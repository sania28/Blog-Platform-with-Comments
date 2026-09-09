export const Comment = ({props}) => {



    var date = props.postedTime;
    date = date.slice(0,10);

    return <div className="comment">

        <p><b>By {props.postedBy}</b></p>
        <p>{props.comment}</p>
        <p id="comment-date">posted on : {date}</p>




    </div>

}

