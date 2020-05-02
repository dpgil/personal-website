import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { TextLink } from "../../../common";
import { Paragraph } from "../tags";

const Content: React.FC = () => {
  return (
    <>
      <Paragraph>
        Tech is an interesting field, in that a bunch of twenty two year olds
        start making six figures right out of college and don't know what to do
        with their money.
      </Paragraph>
      <Paragraph>
        "Invest in the stock market," their boomer parent tells them. And
        they're right- when you look at a 20 year rolling average,{" "}
        <TextLink
          text="there hasn't
        been a time since the inception of the stock market that the 20 year
        average has been negative."
          link="https://seekingalpha.com/article/4336860-long-term-stock-market-timing-since-1871"
        />{" "}
        Even despite the Great Depression, despite the dot com crash, despite
        2008, the minimum annualized return over 20 years was 2%. The bottom
        line is this- if you want to beat inflation, you need to own assets
        long-term that increase in value as the economy grows.
      </Paragraph>
      <Paragraph>
        At some point though, this prudent advice metamorphosed into an
        all-encompassing mantra of: stock market == financial gains. Now there
        are a bunch of people trying to day trade and thinking that they're
        contributing to their financial success.
      </Paragraph>
      <Paragraph>
        It's been shown over and over that hedge fund managers struggle to even{" "}
        <TextLink
          text="match"
          link="https://www.investopedia.com/articles/investing/030916/buffetts-bet-hedge-funds-year-eight-brka-brkb.asp"
        />{" "}
        the S&P 500. They devote their lives to finance and understanding the
        market, get paid millions of dollars, and can't reliably get a better
        return than an index fund. So why do people still play the game?
      </Paragraph>
      <Paragraph>
        I'm not a behavioral psychologist, but my guess is it has something to
        do with positive reinforcement and how good it feels to be proven right
        and make money too. "I knew Apple was going to go up," you think, as you
        cash in your $300 after betting on earnings. The thing is, no one knows
        in what direction the stock market will move (and if they do, they're
        probably{" "}
        <TextLink
          text="cheating"
          link="https://www.bbc.com/news/world-us-canada-52097349"
        />
        ). It's an infintely complex model of emotion, supply and demand,
        projection, and what you think they think you think will happen next-
        certainly not a code you're going to crack by writing Python scripts in
        your free time.
      </Paragraph>
      <Paragraph>
        If you find joy in playing the stock market and understand the risk you
        can tolerate, then fine, do your thing. Just know that your day-to-day
        hunches are genius in the same way that you totally knew the ball was
        going to land on red. But if you're trying to ensure financial security,
        only you're lost about what to do with your money, do this:
      </Paragraph>
      <Paragraph>
        Put as much as you feel comfortable with in a{" "}
        <TextLink
          text="low cost index fund"
          link="https://www.fidelity.com/mutual-funds/investing-ideas/index-funds"
        />{" "}
        and forget about it. Like for twenty years. If you want to be smarter,
        instead of dumping it all at once, look into{" "}
        <TextLink
          text="dollar cost averaging"
          link="https://en.wikipedia.org/wiki/Dollar_cost_averaging"
        />{" "}
        to reduce the impact of volatility. That's it. A much more detailed
        explanation of the idea and a full guide of the strategy can be found on
        the{" "}
        <TextLink
          text="Bogleheads wiki"
          link="https://www.bogleheads.org/wiki/Main_Page"
        />
        .
      </Paragraph>
      <Paragraph>
        Don't waste your time trying to pick out stocks that you think are going
        to outperform. Not even experts can reliably do it. If you really want
        to make more money, spend your time getting better at your job, it's
        what you already get paid to do.
      </Paragraph>
    </>
  );
};

const content: Blog = {
  title: "You're not a genius, you're gambling",
  year: "2020",
  month: "05",
  day: "02",
  description: "Positive reinforcement and the stock market",
  id: "gambling",
  content: <Content />,
  language: Language.ENGLISH
};

export default content;
