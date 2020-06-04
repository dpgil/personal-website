import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { TextLink } from "../../../common";
import { Paragraph } from "../tags";

const Content: React.FC = () => {
  return (
    <>
      <Paragraph>
        Yesterday, I was playing a variant of darts with my parents called
        Around the World. You take turns throwing three darts per turn, with the
        objective of being the first person to hit every number 1-20 in order;
        hitting a number that’s not the one you’re going for doesn’t count
        against you. A “perfect” game would be hitting 1, 2, and 3 on the first
        turn, then 4, 5, 6 on the second, finishing the game in 7 turns.
      </Paragraph>
      <Paragraph>
        After every turn we would write the numbers we hit that turn on the
        chalkboard to keep track of which numbers we’ve hit so far. After the
        first turn, my mom hit 1 and 2, and wrote 1, 2 on the board. She quickly
        realized it didn’t make sense to write the 1, so we settled on just
        writing the last number we hit.
      </Paragraph>
      <Paragraph>
        In a way, this is a form of compression. We’re omitting data because we
        still have the full state of the world without it.
      </Paragraph>
      <Paragraph>
        So what if we had to compress it further and use fewer bits to store the
        state of the dart game? To illustrate, here’s an example game for one
        person which shows every turn and which numbers were hit on that turn.
      </Paragraph>
      <Paragraph>
        Turn 1: 1, 2
        <br />
        Turn 2: nothing
        <br />
        Turn 3: 3
        <br />
        Turn 4: 4, 5, 6
        <br />
        Turn 5: 7, 8
        <br />
        Turn 6: nothing
        <br />
        Turn 7: 9, 10
        <br />
        Turn 8: 11
        <br />
        Turn 9: 12, 13, 14
        <br />
        Turn 10: 15, 16, 17
        <br />
        Turn 11: nothing
        <br />
        Turn 12: nothing
        <br />
        Turn 13: 18, 19
        <br />
        Turn 14: 20
        <br />
      </Paragraph>
      <Paragraph>
        Let’s say we{" "}
        <TextLink
          text="don’t want to lose any data"
          link="https://en.wikipedia.org/wiki/Lossless_compression"
        />{" "}
        so we can’t afford to just forget about turns where nothing happened. We
        can store the symbol * to indicate that nothing happened that turn. We
        can also omit the turn numbers since we can imply it by the row we're
        on. Here’s the first “level” of compression.
      </Paragraph>
      <Paragraph>
        1, 2
        <br />
        *
        <br />
        3
        <br />
        4, 5, 6
        <br />
        7, 8
        <br />
        *
        <br />
        9, 10
        <br />
        11
        <br />
        12, 13, 14
        <br />
        15, 16, 17
        <br />
        *
        <br />
        *
        <br />
        18, 19
        <br />
        20
        <br />
      </Paragraph>
      <Paragraph>
        The next level of compression would be what we mentioned earlier, where
        we just write the last number that was hit in that turn:
      </Paragraph>
      <Paragraph>
        2
        <br />
        *
        <br />
        3
        <br />
        6
        <br />
        8
        <br />
        *
        <br />
        10
        <br />
        11
        <br />
        14
        <br />
        17
        <br />
        *
        <br />
        *
        <br />
        19
        <br />
        20
        <br />
      </Paragraph>
      <Paragraph>
        We still have all the information we need about the game but we’re
        storing that information with maybe 50% of the characters as before.
        What happened on turn 5? Look at row 5- we got to 8, and we were on 6
        before, so we can “uncompress” this back to Turn 5: 7, 8.
      </Paragraph>
      <Paragraph>Can we compress further?</Paragraph>
      <Paragraph>
        This gets a little trickier, but on a computer storing the number 20,
        for example, requires more bits than storing the number 1. Everything in
        computers is stored in base 2, and 20 represented in base 2 is 10100,
        which uses 5 bits, whereas the number 1 in base 2 is just 1, which uses
        1 bit. What if instead of storing the last number we hit that turn, we
        instead stored how many numbers we advanced that turn? So after going
        from 6 to 8, we would store 2, going from 10 to 11 would be stored as 1,
        and so on. Then every entry in a row would be either 0, 1, 2, or 3, and
        we could store the game as follows:
      </Paragraph>
      <Paragraph>
        2
        <br />
        0
        <br />
        1
        <br />
        3
        <br />
        2
        <br />
        0
        <br />
        2
        <br />
        1
        <br />
        3
        <br />
        3
        <br />
        0
        <br />
        0
        <br />
        2
        <br />
        1
        <br />
      </Paragraph>
      <Paragraph>
        This is called{" "}
        <TextLink
          text="delta encoding"
          link="https://en.wikipedia.org/wiki/Delta_encoding"
        />
        . We’re using significantly less data to store the state of this game as
        the first representation, but we have all the information needed to
        reproduce the full state of the game.
      </Paragraph>
      <Paragraph>
        Generally this is unnecessary and just over engineered. But if we’re
        storing billions, maybe trillions of dart games, this difference
        matters. Using a compression scheme like this would save the Dart Game
        Storage Company like 90% of its storage costs.
      </Paragraph>
      <Paragraph>
        <div style={{ border: "1px solid black" }} />
      </Paragraph>
      <Paragraph>
        Some engineers at Facebook take this another step further in their time
        series database,{" "}
        <TextLink
          text="Gorilla"
          link="http://www.vldb.org/pvldb/vol8/p1816-teller.pdf"
        />
        . There’s a lot of good stuff in the paper, but the most relevant
        portion is how they store timestamps in their database.
      </Paragraph>
      <Paragraph>
        They get a ton of data points that each have a timestamp and some value
        and they need to store them as efficiently as possible. Just focusing on
        the timestamp, they’re getting that’s the number of seconds since{" "}
        <TextLink
          text="January 1, 1970"
          link="https://en.wikipedia.org/wiki/Unix_time"
        />
        , which at the time of writing is 1591239371. For any given metric, they
        expect to get a new timestamp and value every 60 seconds, though it’s
        not always the case.
      </Paragraph>
      <Paragraph>
        Okay, so for one given metric let’s say we get data points with the
        following timestamps:
      </Paragraph>
      <Paragraph>
        1591200000
        <br />
        1591200060
        <br />
        1591200120
        <br />
        1591200182
        <br />
        1591200241
        <br />
        1591200300
        <br />
      </Paragraph>
      <Paragraph>
        There’s some information that we’re redundantly storing. If we use delta
        encoding like we just did earlier, we then have the following
        timestamps. We still need the first timestamp so we know where to start.
        We didn’t need this for the dart game compression because we know every
        dart game starts at 0.
      </Paragraph>
      <Paragraph>
        Initial time: 1591200000
        <br />
        60 ← 1591200060 - 1591200000 = 60
        <br />
        60
        <br />
        62
        <br />
        59
        <br />
        59
        <br />
      </Paragraph>
      <Paragraph>
        This is where we stopped, but the Gorilla engineers looked at existing
        data from Facebook and noticed 95% of deltas in the database were going
        to be 60. Why store the 60 over and over? So they decided to store their
        data using delta-of-delta encoding. Instead of just storing the delta,
        which is expected to be 60, store the delta between the delta and 60.
        Our new timestamps would be:
      </Paragraph>
      <Paragraph>
        Initial time: 1591200000
        <br />
        0 ← 60 - 60 = 0
        <br />
        0
        <br />
        2
        <br />
        -1
        <br />
        -1
        <br />
      </Paragraph>
      <Paragraph>
        All the information that's needed is still there, it's just stored using
        much less data. It’s clever. At Facebook scale, those few bits certainly
        saved a lot of money.
      </Paragraph>
      <Paragraph>Anyway, back to playing darts.</Paragraph>
    </>
  );
};

const content: Blog = {
  title: "Darts and gorillas",
  year: "2020",
  month: "06",
  day: "04",
  description: "Unnecessary lossless compression",
  id: "darts",
  content: <Content />,
  language: Language.ENGLISH
};

export default content;
