import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { Paragraph } from "../tags";

const Content: React.FC = () => {
  return (
    <>
      <Paragraph>
        When someone requests changes on a pull request, there are generally
        three options.
      </Paragraph>
      <Paragraph>
        First is to ignore the comment and just check in the code anyway. This
        is a binary middle finger and not a great way to make friends at work.
        The second way, if you disagree with the comment, is to politely explain
        the rationale behind the current approach and why the change should stay
        as is. This might turn into a longer back-and-forth, a design review, or
        if a manager gets involved- a meeting *gasp*. The third option is to
        make the requested changes to the code and ask for a new review before
        checking it in.
      </Paragraph>
      <Paragraph>
        In a perfect world, options two and three are the only viable options.
        When someone suggests some changes to a pull request, either make the
        changes or don't make the changes and explain why not.
      </Paragraph>
      <Paragraph>
        When I started my first full time job, I quickly got to learn that
        there's a secret fourth option- it's called the TODO. What you do is
        agree that certain requested changes <i>should</i> be made, just maybe
        not in this exact pull request. So what you'll do to deal with this is
        put a comment in the code, saying we should fix this later, and check in
        the code as it is. It's perfect. Not only are you agreeing that the work
        should be done, appeasing your coworker's concerns, but you also don't
        have to do the work right now. It's a win-win.
      </Paragraph>
      <Paragraph>
        Sometimes there are valid reasons to do this. Maybe the requested
        changes are lower priority, or they're not really related to the current
        change, so it makes sense to be split up. But what actually ends up
        happening is this:
      </Paragraph>
      <Paragraph>
        Someone sends a pull request with a line of code that does X in a
        "hacky" way. Their coworker calls it out, saying that we should probably
        come up with a non-hacky way to do X. The author agrees, but instead of
        fixing the problem, they add a comment "TODO: Fix this hack," and the
        change goes in. There's other work to do though, so it's not a priority
        to fix <i>today</i>, also there's no task tracking the fix.
      </Paragraph>
      <Paragraph>A few months go by.</Paragraph>
      <Paragraph>
        In the meantime, other engineers who've faced similar issues copied that
        line of code into other parts of the codebase. They didn't think twice
        about it, because if that line of code is already being used in
        production somewhere it should be safe for them to use, right?
      </Paragraph>
      <Paragraph>
        Eventually another engineer stumbles across some "TODO: Fix this hack,"
        but they think, why is this a hack? This is line of code is used all
        over. So they delete the comment, and the problematic code lives
        forever.
      </Paragraph>
      <Paragraph>
        When I was working at the really big company, one time I tried to check
        in a change that the lead architect on a project disagreed with. He
        stated why he didn't like it and I explained why I thought it was
        necessary. He eventually said something like, "Look, if I let you check
        in this code, it's not going to affect you. But in twenty years, it
        could become a problem, and when it does, you'll be nowhere to be found.
        I've seen it happen."
      </Paragraph>
      <Paragraph>
        Now I'm not sure I agree with thinking twenty years out on every change
        that's made, but I think the underlying idea- building software to last-
        is an important one. Problematic code spreads like a virus throughout a
        codebase. If engineers aren't conscientious about the changes going into
        it, technical debt will grow, problems will surface more and more
        frequently, and maintenance will become a headache.
      </Paragraph>
      <Paragraph>
        Someone once told me that lazy engineers are the best engineers, since
        they don't have the patience for repeated process and look to automate
        everything. I haven't had that experience. I've found lazy engineers
        just write lazy code and do things like checking in TODOs just to forget
        about them.
      </Paragraph>
      <Paragraph>
        Don't be a lazy engineer. Do things right the first time and they won't
        come back to haunt you.
      </Paragraph>
    </>
  );
};

const blog: Blog = {
  title: "Temporary hacks",
  year: "2020",
  month: "05",
  day: "01",
  description: 'And the myth of "doing it later"',
  id: "hacks",
  content: <Content />,
  language: Language.ENGLISH
};

export default blog;
