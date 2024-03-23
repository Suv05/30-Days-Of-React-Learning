import { createContext } from "react";

const Postlist = createContext({});

const PostlistProvider = ({ children }) => {
    
  return <Postlist.Provider value={[]}>{children}</Postlist.Provider>;
};

export default PostlistProvider;