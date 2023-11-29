import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
import "./styles.css";

const comments = {
  id: 1,
  items: [],
};

const App = () => {

  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  return (
    <div className="App">
      <Comment 
        handleInsertNode={handleInsertNode}
        comment={commentsData}
      />
    </div>
  );
};

export default App;
