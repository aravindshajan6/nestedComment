import { useState } from "react";
import Action from "./Action";

const Comment = ({
  handleInsertNode,
  comment,
}) => {

  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  //handles comment post
  const onAddComment = () => {
  
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");

  };

  return (
    <div>
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}  
              placeholder="type..."
            />
            <Action
              className="reply comment"
              type="COMMENT" 
              handleClick={onAddComment}
            />
          </>
        ) : ( 
          <>
            <span   >
              {comment.name}
            </span>

            <div style={{ display: "flex", marginTop: "5px" }}>
                <>
                  <Action
                    className="reply"
                    type={<> REPLY </>}
                    handleClick={handleNewComment}
                  />
                </>
            </div>
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              onChange={(e) => setInput(e.target.value)}
            />
            <Action className="reply" type="REPLY" handleClick={onAddComment} />
          </div>
        )}

        {comment?.items?.map((cmnt) => {
          return (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}  
              comment={cmnt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
