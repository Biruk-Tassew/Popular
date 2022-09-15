import React from "react";
import Story from "./Story";
import styled from "styled-components";

const Stories = () => {
  return (
    <StoriesWrapper>
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="Nabendu"
      />
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="TWD"
      />
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="Nabendu"
      />
    </StoriesWrapper>
  );
};

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories;