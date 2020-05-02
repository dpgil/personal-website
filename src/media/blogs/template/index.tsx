import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { TextLink } from "../../../common";
import { Header, Paragraph } from "../tags";

const Content: React.FC = () => {
  return (
    <>
      <Header>Introduction</Header>
      <Paragraph>Some content</Paragraph>
      <Paragraph>
        More content. <TextLink text="A link" link="https://google.com" /> even?
      </Paragraph>
    </>
  );
};

const content: Blog = {
  title: "Some title",
  year: "2020",
  month: "04",
  day: "26",
  description: "Some nice nice description",
  id: "template",
  content: <Content />,
  language: Language.ENGLISH
};

export default content;
