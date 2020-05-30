import React from "react";
import { Blog } from "../index";
import { Language } from "../language";
import { TextLink } from "../../../common";
import { Header, Image, Paragraph } from "../tags";
import graph0 from "./graph-0.png";
import graph1 from "./graph-1.png";
import graph2 from "./graph-2.png";
import graph3 from "./graph-3.png";
import graph4 from "./graph-4.png";
import diagram0 from "./diagram-0.png";
import dependencies0 from "./dependencies-0.png";

const Content: React.FC = () => {
  return (
    <>
      <Paragraph>
        I think any concept should be able to be "explained like I'm 5." This is
        kind of like an elevator pitch, but the elevator ride is ten minutes
        long, and the other person in the elevator isn't the CEO, rather a
        friend that works in a totally different field. But when my mom asked me
        to explain what I've been working on all this time on the computer, I
        struggled to express the concepts without babbling.
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
        building a car but not adding an odometer, or a gas tank meter, or
        engine warning lights. You get the idea.
      </Paragraph>
      <Paragraph>
        Observability is composed of four pillars: metrics, alerting, logging,
        and tracing. We'll get into what each of these means. But first, let's
        build an example:
      </Paragraph>
      <Paragraph>
        We're software engineers that work at a ride sharing company and are in
        charge of the pricing service. Calculating the price of taking a ride
        between two points on a map is hard, we have to keep in mind distance
        traveled, time of day, supply and demand, different currencies, and much
        more. Instead of expecting every engineer to implement this logic on
        their own, we're the pricing specialists, and just work on building out
        this pricing system. Then other engineers will use that service by
        sending it two addresses and expecting a price in return.
      </Paragraph>
      <Paragraph>
        Someone opens up the ride sharing app on their phone, enters in two
        addresses, and sees a price for the ride show up on their screen. From
        the service's point of view, the order of events is this:
        <ol>
          <li>Two addresses are sent from the user to the service</li>
          <li>The price of the ride is calculated</li>
          <li>The price is sent back to the user</li>
        </ol>
        Try to think of some places things could go wrong. Here are a few: are
        valid addresses being sent to the service? Are valid prices being sent
        from the service? Is the service crashing at any point? We need a few
        tools to help us answer these questions.
      </Paragraph>
      <Paragraph>
        We're going to use all four pillars of observability to help us detect
        and solve a problem with the pricing service to better understand the
        role each pillar plays. Let's start with metrics.
      </Paragraph>
      <Header>Metrics</Header>
      <Paragraph>
        Suppose we modify the pricing service so that every single time someone
        makes a request, the service emits some metric.
      </Paragraph>
      <Paragraph>
        Then we could look at a graph that shows our metric over time. Let's say
        the service is receiving 500 requests/minute. We could see a graph like
        this, where the y-axis represents the number of requests made in the
        last minute, and the x-axis represents time:
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
        to metrics, but here's an example of what our alert configuration could
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
        alert if we start calculating a price of $0 for a bunch of rides.
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
        we need more information.
      </Paragraph>
      <Header>Logging</Header>
      <Paragraph>
        In short, logs are ways to record events that happened on a computer.
        They're similar to metrics in that sense, but where metrics are focused
        on recording small data points that are analyzed in aggregate, logs are
        more concerned with providing single data points that are more detailed.
      </Paragraph>
      <Paragraph>
        Back to the example above with errors occurring with the pricing
        service- we found out that a problem exists but we don't know what's
        going on. One question we might want to answer could be: what is the
        input to our system when we see these errors? In the context of the
        pricing system, what start and end addresses are causing the system to
        crash?
      </Paragraph>
      <Paragraph>
        A log would do the trick. Somewhere in our code, we'll have something
        that tries to calculate the price, and if that fails, we can log the
        start and end addresses. Let's say we're investigating the increased
        error rate and we see three logs as follows:
        <ul>
          <li style={{ marginBottom: 10 }}>
            11:16:25: Error calculating price
            <br />
            <span style={indented}>Start address: 123 Sesame Street</span>
            <br />
            <span style={indented}>End address: 42 Walt Court</span>
          </li>
          <li style={{ marginBottom: 10 }}>
            11:16:40: Error calculating price
            <br />
            <span style={indented}>Start address: 123 Sesame Street</span>
            <br />
            <span style={indented}>End address: 1600 Pennsylvania Avenue</span>
          </li>
          <li style={{ marginBottom: 10 }}>
            11:17:03: Error calculating price
            <br />
            <span style={indented}>Start address: 9 Berry Lane</span>
            <br />
            <span style={indented}>End address: 123 Sesame Street</span>
          </li>
        </ul>
        What's suspicious? 123 Sesame Street is an address in every error log-
        it's pretty likely this is contributing to the problem.
      </Paragraph>
      <Paragraph>
        Now we might have a few more questions to get a better idea of what's
        going on. What is happening when 123 Sesame Street is provided as input
        to the system? Why is the system crashing from it? Also, is it expected
        for so many people to be traveling to/from 123 Sesame Street? If not,
        where are the requests coming from? To follow up on these questions, we
        might start playing with the system and seeing what happens with 123
        Sesame Street as input. Is the system consistently crashing with that
        address? Are there other addresses that are also causing crashes?
      </Paragraph>
      <Paragraph>
        Logs are used to provide more verbose information on the state of the
        system. Just like metrics and dashboards, the expectation is not to be
        monitoring logs just waiting for something to happen- typically logs are
        there to aid in investigation after an issue is known.
      </Paragraph>
      <Paragraph>
        So the flow we have so far for investigating a problem is this:
        <ol>
          <li>Get notified of the issue through an alert</li>
          <li>See what's going on and when it started by looking at metrics</li>
          <li>Find more detailed information by searching the logs</li>
        </ol>
        This can be enough information for a lot of issues. We might find an
        obvious error by inputting 123 Sesame Street into the system, and then
        we could go ahead and work on fixing it. There are cases, however, where
        we need another tool.
      </Paragraph>
      <Header>Tracing</Header>
      <Paragraph>
        Without going into too much detail, the need for tracing arises when
        systems start becoming more complex. In the pricing example, let's say
        that we actually depend on another service for some information. For
        example, when given the address 123 Sesame Street, how do we know it's
        the 123 Sesame Street in Dracut, MA or the one in Wurtsboro, NY? Let's
        pretend that the pricing service depends on another service, the
        location service, to disambiguate addresses.
      </Paragraph>
      <Paragraph>
        But then, the location service also depends on a few other services, and
        those services depend on other services. Suddenly we have this large
        tree of dependencies from one request to the pricing service. This is
        kind of like when you open up your Facebook news feed- it's possible
        thousands of requests are made, to the friends service, groups,
        birthdays, news, rankings, etc, just to provide you with the information
        on your news feed.
      </Paragraph>
      <Paragraph>
        A diagram of these dependencies might look like the following:
      </Paragraph>
      <Image
        src={diagram0}
        alt="A tree of dependencies from the pricing service"
      />
      <Paragraph>
        Now things are a big more complicated. When the user sees something go
        wrong, is the problem in the pricing service? Or is it an issue in the
        location service? Or an issue even further down? With this large tree of
        dependencies, the pricing service <i>depends</i> on some functionality
        from service D, and a problem in that code could surface as a crash in
        the app to the user.
      </Paragraph>
      <Paragraph>
        In order to figure this out, we could look at the logs for the pricing
        service, then look at the logs for the location service, then service A,
        then service D, until we track which service we think the problem is in.
        If the pricing service and the location service both had errors, but
        service A had no errors, the problem is most likely in the location
        service. The problem is that this method doesn't scale. It's common for
        systems at large companies to have hundreds or thousands of different
        services with many dependencies between them.{" "}
        <TextLink
          text="This great post"
          link="https://blog.twitter.com/engineering/en_us/a/2013/observability-at-twitter.html"
        />{" "}
        about observability at Twitter (the ones who coined the term) shows what
        the service dependencies at Twitter were in 2013:
      </Paragraph>
      <Image
        src={dependencies0}
        alt="Image showing hundreds to thousands of services and maybe tens of thousands of dependencies between them"
      />
      <Paragraph>
        The names outside of the circle are the names of different services at
        Twitter, and the lines connecting them in the middle are dependencies
        between them. So yeah, we probably won't be searching the logs for every
        pricing issue.
      </Paragraph>
      <Paragraph>
        Tracing can help fix this issue by following a request through its whole
        lifecycle and visualizing it. There are a lot of tracing programs that
        come with much better UI than this, but suppose we looked at the traces
        for a request to the pricing service and saw the following:
        <ol>
          <li>Pricing service</li>
          <li>Location service</li>
          <li>Service A: Error</li>
        </ol>
        Okay, so the request was able to get to the pricing service, then
        another was made to the location service, then another to service A
        where we ultimately hit an error. Now we know service A is the issue,
        and we can go look at the logs for service A to find out more about
        what's going on.
      </Paragraph>
      <Paragraph>
        In essence, tracing helps us understand where in a chain of requests
        things are failing.
      </Paragraph>
      <Header>Conclusion</Header>
      <Paragraph>
        In summary: metrics act as sensors and track data continuously across
        our applications- we use graphs to visualize this data. Alerts are what
        pull the alarm when things eventually go wrong. Logs provide us with a
        more detailed state of the world that help understand a particular issue
        on a particular computer, and finally, tracing helps us track down
        problems between different services in our system.
      </Paragraph>
      <Paragraph>
        Without any of these tools, we wouldn't have known there was a problem
        at all. With them, we're able to quickly detect problems, understand
        more about them, and dig into their root causes.
      </Paragraph>
      <Paragraph>
        It's important that these tools work really, really well. Systems will
        break. We know this. The real question is how quickly we can respond to
        failures and fix them. Going off Wikipedia, Facebook generates $70B of
        revenue every year. This comes down to $133,181/minute. Imagine you're
        an engineer at Facebook and the site completely crashes- every minute
        that goes by that the problem is not fixed is money lost.
      </Paragraph>
      <Paragraph>
        Hopefully this has helped you understand what observability is, its
        importance, and how to use different observability tools to detect and
        diagnose issues in systems. Bye!
      </Paragraph>
    </>
  );
};

const indented: React.CSSProperties = {
  marginLeft: 15
};

const content: Blog = {
  title: "ELI5: Observability",
  year: "2020",
  month: "05",
  day: "25",
  description: "What it is and why it's important",
  id: "observability",
  content: <Content />,
  language: Language.ENGLISH
};

export default content;
