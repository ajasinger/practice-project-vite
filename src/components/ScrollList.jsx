import styled from "@emotion/styled";
import React, { FC, useEffect, useRef, useState } from "react";
import { Item } from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";

const ScrollWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 500px;
  overflow: auto;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const ITEM_HEIGHT = 30; // Fixed height of each item
const VIEWPORT_HEIGHT = 500; // Height of the scrollable area
//const MAX_RENDERED_ITEMS = 2500; // Maximum number of items to render at once

export const List = ({ items }) => {
  const scrollRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  };

  useEffect(() => {
    //const totalItems = items.length;
    const filteredItems = items.filter(word => word.includes(searchTerm));
    const totalItems = filteredItems.length
    const startIdx = Math.floor(scrollTop / ITEM_HEIGHT);
    const endIdx = Math.min(startIdx + Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT), totalItems);

    //const newVisibleItems = items.slice(startIdx, endIdx);
    const newVisibleItems = filteredItems.slice(startIdx, endIdx);
    setVisibleItems(newVisibleItems);
  //}, [items, scrollTop]);
}, [items, scrollTop, searchTerm]);

  return (
    <ScrollWrapper ref={scrollRef} onScroll={handleScroll}>
      <SearchInput 
        type="text" 
        placeholder="Search words..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ListWrapper>
        <SafelyRenderChildren>
          {visibleItems.map((word) => (
            <Item key={word}>{word}</Item>
          ))}
        </SafelyRenderChildren>
      </ListWrapper>
    </ScrollWrapper>
  );
};

//https://dev.to/surajondev/building-an-infinite-scroll-component-in-react-1ljb
// window.addEventListener("scroll", handleScroll);

//When scrolling check if current position of scoll bar is just above the bottom of the web page
//(ie total vertical scrollable area). If yes change loading state to true.
//const handleScroll = () => {
//   if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
//     setLoading(true);
//   }
// };

// scrollHeight : It is the property that returns the total height of the content, 
//including the portion that is not visible on the screen. So, it will be the total scrollable area.
// scrollY: It is the property that returns the number of pixels that the document has 
//been scrolled vertically from the top. So it will be the area that has been scrolled.
// innerHeight: It is the property that return the height of the browser’s Windows content area. 
//It will be the scrollbar width. It is added to scrollY so that fetch happens when we reached the content rather than when we passed the content.