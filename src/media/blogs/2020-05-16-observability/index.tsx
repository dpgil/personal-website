import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { TextLink } from "../../../common";
import { Header, Image, Paragraph } from "../tags";
import obs0 from "./obs-0.png";
import graph0 from "./graph-0.png";
import graph1 from "./graph-1.png";
import graph2 from "./graph-2.png";
import graph3 from "./graph-3.png";
import graph4 from "./graph-4.png";

const Content: React.FC = () => {
  return (
    <>
      <Paragraph>
        [DRAFT] In my transition from a front end engineer to a back end
        engineer (on observability!!), the word observability was a foreign term
        that meant nothing to me.
      </Paragraph>
      <Paragraph>
        When my mom asked me to explain what I was working on al lthat ime on
        the computer, I struggled to express the concepts without babbling
        jargon.
      </Paragraph>
      <Paragraph>
        I think any concept should be able to be "explained like I'm 5," kind of
        like an elevator pitch, but the elevator ride is ten minutes long, and
        the other person in the elevator isn't the CEO, rather a friend that
        works in a totally different field. Whenever I start something new, I
        look for simple, bird-eye view explanations of the concepts involved.
        Before starting my new tole at the beginning of this year, I found a lot
        of material on observability, but most of which assumed that I new
        Stuff™.
      </Paragraph>
      <Paragraph>Here's the article I wish I read six months ago.</Paragraph>
      <Paragraph>
        At a high level, observability is what enables you to know what is
        happening on computers that host services that you care about. At a ride
        sharing company, you might want to know how many people are requesting
        rides. Is the app crashing? What are users doing when the app crashes?
        Are we making more money than last week? It's the ability to observe
        your systems from a level as low as statistics about the computers
        running code themselves, all the way up to core business metrics that
        tell you if your company is making money.
      </Paragraph>
      <Paragraph>
        This data is important. Without it, your app could be crashing for 100%
        of users and you wouldn't have the slightest idea. It would be like
        trying to catch a fish but just throwing the whole fishing pole into the
        lake. Or building a car but not adding an odometer, or a gas tank meter,
        or engine warning lights. You get the idea.
      </Paragraph>
      <Paragraph>
        Observability is composed of four pillars: metrics, alerting, logging,
        and tracing. We'll get into what each of these means. But first, let's
        build an example:
      </Paragraph>
      <Paragraph>
        Emily, a software engineer, works at a ride sharing company and is in
        charge of the pricing service. Calculating the price of taking a ride
        between two points on a map is hard, Emily has to keep in mind distance
        traveled, time of day, supply and demand, different currencies, and much
        more. Instead of expecting every engineer to implement this logic on
        their own, Emily is a pricing specialist, and just works on building out
        this pricing system. Then other engineers will use that service by
        sending it two addresses and expecting a price in return.
      </Paragraph>
      <Paragraph>
        Someone opens up the ride sharing app on their phone, enters in two
        addresses, and sees a price for the ride show up on their screen. We
        could draw a diagram that represents this:
      </Paragraph>
      <Image
        src={obs0}
        alt={"Diagram showing flow between the user and the pricing service"}
      />
      <Paragraph>(The smiley is kind of horrifying, sorry.)</Paragraph>
      <Paragraph>
        So we have this diagram. Try to think of some places things could go
        wrong. Here are a few: are valid requests being sent to the service? Are
        valid responses being sent from the service? Is the service crashing at
        any point?
      </Paragraph>
      <Paragraph>We need metrics to answer any of these questions.</Paragraph>
      <Header>Metrics</Header>
      <Paragraph>
        Let's modify the service so that every single time someone makes a
        request, the service emits some metric.
      </Paragraph>
      <Paragraph>
        Then we could look at a graph that shows our metric over time. Let's say
        the service is receiving 500 requests/minute. We could see a graph like
        this, where the y-axis repesents the number of requests, and the x-axis
        represents time:
      </Paragraph>
      <Image
        src={graph0}
        alt={"Graph displaying a constant 500 requests/minute"}
      />
      <Paragraph>
        In practice, it wouldn't be exactly 500 requests per minute. Sometimes
        we could get more, sometimes less. Assuming the rate of traffic is
        relatively stable, a more realistic graph might look like this:
      </Paragraph>
      <Image
        src={graph1}
        alt={"Graph displaying a more realistic 500 requests/minute"}
      />
      <Paragraph>
        Cool, so now we have some insight on how much traffic is coming into the
        service. If for some reason we started receiving a ton more traffic, the
        graph would change and we would know about it. Here's what we might see:
      </Paragraph>
      <Image
        src={graph2}
        alt={
          "Graph displaying a jump from 500 requests/minute to 1500 requests/minute"
        }
      />
      <Paragraph>
        Right now we're just counting the number of requests going into the
        service, which is important. Maybe a lot more people are using the
        service than anticipated. Maybe no one is. No problem, at least we know
        that's the case rather than being left in the dark. Knowledge is power.
      </Paragraph>
      <Paragraph>
        Sometimes things go wrong, though. For example, if the pricing code was
        changed in a way that breaks a lot of stuff, Emily would want to know as
        quickly as possible to fix the problem.
      </Paragraph>
      <Paragraph>
        Let's change things so that we emit some metric on success, and another
        one on any error that occurs. Suppose we have a ~1% error rate. Here's a
        graph that would represent that.
      </Paragraph>
      <Image
        src={graph3}
        alt={"Graph displaying 500 requests/minute and 5 errors/minute"}
      />
      <Paragraph>
        Now, what would we do if we looked at the graph again and we saw
        something like this:
      </Paragraph>
      <Image src={graph4} alt={"Graph displaying a spike in errors/minute"} />
      <Paragraph>
        Oh shit, errors are spiking. Something is going seriously wrong. We
        don't know <i>what</i> is wrong, but we know <i>something</i> is wrong,
        and that's a good start to investigating. Looking at the graph, the
        problem started around 11:15, so we could start looking into what
        happened then. Maybe some new code was deployed and we can see what was
        changed.
      </Paragraph>
      <Paragraph>
        The bottom line is that metrics did their job here. Now we're aware that
        things are going wrong instead of pretending they don't exist (which is
        fun sometimes too). As services grow larger and more complex, you could
        imagine we have lots of metrics to watch and hundreds of dashboards that
        track different parts of it.
      </Paragraph>
      <Paragraph>
        As good as this is, it's not reasonable to expect someone to monitor all
        these dashboards 24/7, nor would it be a good use of time to do so.
        Emily would never be able to get anything else done, or go to sleep, or
        really exist outside of staring at these dashboards waiting for
        something to change. How do we fix that?
      </Paragraph>
    </>
  );
};

const content: Blog = {
  title: "Baby's first observability",
  year: "2020",
  month: "05",
  day: "16",
  description: "What it is and why it's important",
  id: "template",
  content: <Content />,
  language: Language.ENGLISH
};

export default content;
