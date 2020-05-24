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
        I think any concept should be able to be "explained like I'm 5." This is
        kind of like an elevator pitch, but the elevator ride is ten minutes
        long, and the other person in the elevator isn't the CEO, rather a
        friend that works in a totally different field. But when my mom asked me
        to explain what I've been working on all this time on the computer, I
        struggled to express the concepts without babbling jargon.
      </Paragraph>
      <Paragraph>
        Whenever I start something new, I look for simple, bird-eye view
        explanations of the concepts involved. Before starting my new role at
        the beginning of this year, I found a lot of material on observability,
        but most of which assumed that I knew Stuff™.
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
      <Paragraph>
        Metrics are needed to answer any of these questions.
      </Paragraph>
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
        there could be more, sometimes less. Assuming the rate of traffic is
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
        changed in a way that breaks a lot of stuff, we would want to know as
        quickly as possible to fix the problem.
      </Paragraph>
      <Paragraph>
        Let's change things so that we emit some metric on success, and another
        one on any error that occurs. Suppose we have a ~1% error rate. Here's a
        graph that would represent that, with the green line marking total
        requests/minute and the red line marking errors/minute.
      </Paragraph>
      <Image
        src={graph3}
        alt={"Graph displaying 500 requests/minute and 5 errors/minute"}
      />
      <Paragraph>
        Now, what would we do if we were monitoring our service and looked at
        the graph to find something like this:
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
        fun sometimes too).
      </Paragraph>
      <Paragraph>
        As good as this is, it's not reasonable to expect someone to monitor
        dashboards 24/7, nor would it be a good use of time to do so. As
        services grow larger and more complex, you could imagine there are lots
        of metrics to watch and hundreds of dashboards that track different
        parts of the service. We'd never be able to get anything else done, or
        go to sleep, or really exist outside of staring at these dashboards
        waiting for something to change. How do we fix that?
      </Paragraph>
      <Header>Alerting</Header>
      <Paragraph>
        Imagine there were some way to automatically notify engineers when their
        graphs change in a certain way. In the past example, we may want to be
        emailed if the amount of traffic dips, or we might want a phone call if
        the error rate spikes significantly. This is what alerting does for us.
      </Paragraph>
      <Paragraph>
        Alerts are generally built with some query and some threshold. Lets say
        the metric we want to create an alert on is called{" "}
        <b>pricing.error_rate</b>, which we could interpret as the error rate
        for the pricing service, and we want the alert to fire and email us when
        the error rate is greater than 1%.
      </Paragraph>
      <Paragraph>
        Different alerting systems have different ways to build alerts and refer
        to metrics, but here's an example of what our alert configuration would
        look like:
        <ul>
          <li>
            <b>Alert name:</b> Error rate exceeds 1%
          </li>
          <li>
            <b>Alert condition:</b> pricing.error_rate > 0.01
          </li>
          <li>
            <b>On fire:</b> Email daniel.patrick.gil@gmail.com
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        The alerting system will then be responsible for checking the value of{" "}
        <b>pricing.error_rate</b>, and if it ever exceeds 0.01, then it should
        email the email we gave it.
      </Paragraph>
      <Paragraph>
        Alerts can be set on pretty much anything. Most services would benefit
        from alerts on the obvious- alert if the service is crashing, alert if
        the service is running out of memory or CPU. From there, we could build
        alerts that are specific to the pricing service. Maybe we'd want to
        alert if we start calculating a price of 0 for a bunch of rides.
      </Paragraph>
      <Paragraph>
        The problem with alerting is that it's easy to get alert-crazy, to a
        point where suddenly every possible failure in the application has an
        alert on it. The consequences of doing so are well illustrated in The
        Boy Who Cried Wolf- if the system starts waking you up every night at
        3am for things that aren't really actionable, alerts are going to start
        getting ignored.
      </Paragraph>
      <Paragraph>
        The hardest part is assessing what's important enough to be alerted on.
        When considering creating an alert on something, we need to think about
        the following:
        <ul>
          <li>
            If this functionality breaks, is there a clear way to fix the issue?
            i.e. is it actionable?
          </li>
          <li>
            Does this functionality affect the end user or the business? Will we
            be literally losing money if this isn't working?
          </li>
          <li>
            If this breaks at 3am, should I get woken up, or can it wait until
            business hours?
          </li>
        </ul>
        If the alert isn't urgent or actionable, maybe it doesn't need to be an
        alert. Google has a great book that talks more about this{" "}
        <TextLink
          text="here"
          link="https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/"
        />
        .
      </Paragraph>
      <Paragraph>
        Okay, back to the larger picture. We're using metrics to track a bunch
        of stuff. We're using alerts to tell us when that stuff goes wrong. Now
        it's 3am, and you get a phone call from our alerting system, with a link
        to this image:
      </Paragraph>
      <Image src={graph4} alt={"Graph displaying a spike in errors/minute"} />
      <Paragraph>
        But it's not clear what to do. We found out this thing is breaking, but
        we need more information. Pillar 3.
      </Paragraph>
      <Header>Logging</Header>
    </>
  );
};

const content: Blog = {
  title: "Baby's first observability lesson",
  year: "2020",
  month: "05",
  day: "16",
  description: "What it is and why it's important",
  id: "observability",
  content: <Content />,
  language: Language.ENGLISH
};

export default content;
