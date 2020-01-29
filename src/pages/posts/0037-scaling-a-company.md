---
title: "Scaling a Company"
sources:
  [
    {
      title: "The Hard Thing About Hard Things",
      authors: ["Ben Horowitz"],
      link: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205",
    },
  ]
tags:
  - business
  - startups
---

If you want to build an important company, then at some point you have to scale. People in startup land often talk about the magic of how few people built the original Google or the original Facebook, but today’s Google and Facebook employ thousands of people. So, if you want to do something that matters, then you are going to have to learn the black art of scaling a human organization.

Often board members give entrepreneurs two bits of advice regarding scale:

1. Get a mentor.
2. Find some “been there, done that” executive who already knows how to scale.

These answers, while fine as far as they go, have some important limitations. First, if you don’t know anything about scaling an organization, then it will be very difficult for you to evaluate people for that job. Imagine trying to find a killer engineer if you’d never written a single program. Second, many investor-board members don’t know anything about scaling a company, either, and can be suckers for people who have the experience but not the skills. If you’ve ever worked in a large organization, you know that there are plenty of people with experience running them but none of the requisite skills to run them well.

This advice is still good, but the right way to pick both the best mentors and the best employees is by first learning the basics; then you can apply the myriad of scaling techniques n the management literature depending on the context.

When an organization grows in size, things that were previously easy become difficult. Specifically, the following things that cause no trouble when you are small become big challenges as you grow:

1. Communication
1. Common knowledge
1. Decision making

In order to get a clear understanding of the problem, let’s start with the boundary condition. Imagine a company of one employee. That employee writes and tests all the code, does all the marketing and sales, and manages herself. She has complete knowledge of everything in the company, makes all the decisions, needn’t communicate with anyone, and is totally aligned with herself. As the company grows, things will only get worse in each dimension.
On the other hand, if the company doesn’t expand, then it will never be much of a company, so the challenge is to grow but degrade as slowly as possible. Specialization, organizational structure, and process al complicate things and implementing them will feel like you are moving away from common knowledge and quality communication. It is very much like an offensive linemen taking a step backward to “give ground grudgingly.” You will lose ground, but you will prevent your company from descending into chaos.

## Specialization

The first scale technique to implement is specialization. In startups, everybody starts out as a jack-of-all trades. For example, engineers write code, manage the build system, test the product, and, increasingly, deploy it and operate it. This works well in the beginning because everybody knows everything and the need to communicate is minimized; there are no complicated handoffs, because there is nobody to hand anything to. As the company grows, it becomes increasingly difficult to add new engineers, because the learning curve starts to get super-steep. Getting a new engineer up to speed starts to become more difficult than doing the work yourself. At this point, you need to specialize.

By dedicating people and teams to such tasks as the build environment, the test environment, and operations, you will create some complexity—handoffs across groups, potentially conflicting agendas, and specialized rather than common knowledge. In order to mitigate these issues, you will need to consider other scale techniques like organizational design and process.

## Organizational Design

The first rule of organizational design is that all organizational designs are bad. With any design, you will optimize communication among some parts of the organization at the expense of other parts. For example, you will optimize communication between product management and engineering at the expense of communication between product management and marketing. As a result, as soon as you roll out the new organization, people will find fault with it and they will be right.

Nonetheless, at some point the monolithic design of one huge organization runs out of gas and you will need to split things into smaller subgroups. At the most basic level, you’ll want to consider giving the groups that you’ve specialized their own managers as they grow. You may want a QA manager, for example. After that, things become more complex. Do client engineering and server engineering have their own groups or do you organize by use cases and include all technical components? When you get really big, you’ll need to decide whether to organize the entire company around functions (i.e. sales, marketing, product management, engineering, etc.) or around missions—self-contained business units that contain multiple functions.

Your goal is to choose the least of all evils. Think of the organizational design as the communications architecture for your company. If you want people to communicate, the best way to accomplish that is to make them report to the same manager. By contrast, the further away people are in the organizational chart, the less they will communicate. The organizational design is also the architecture for how the company communicates with the outside world. For example, you might want to organize your sales force by product to maximize communication with the relevant product groups and maximize the product competency of the sales force. If you do that, then you will do so at the expense of simplicity for customers who buy multiple products and will now have to deal with multiple salespeople.

With this in mind, here are the basic steps to organizational design:

1. **Figure out what needs to be communicated.** Start by listing the most important knowledge and who needs to have it. For example, knowledge of the product architecture must be understood by engineering, QA, product management, marketing, and sales.
2. **Figure out what needs to be decided.** Consider the types of decisions that must get made on a frequent basis: feature selection, architectural decisions, how to resolve support issues. How can you design the organization to put the maximum number of decisions under the domain of a designated manager?
3. **Prioritize the most important communication and decision paths.** Is it more important for product managers to understand the product architecture or the market? Is it more important for engineers to understand the customer or the architecture? Keep in mind that these priorities will be based on today’s situation. If the situation changes, then you can reorganize.
4. **Decide who’s going to run each group.** Notice that this is the fourth step, not the first. You want to optimize the organization for the people—for the people doing the work—not for the managers. Most large mistakes in organizational design come from putting the individual ambitions of the people at the top of the organization ahead of the communication paths for the people at the bottom of the organization. Making this step four will upset your managers, but they will get over it.
5. **Identify the paths that you did not optimize.** As important as picking the communication paths that you will optimize is identifying the ones that you will not. Just because you deprioritized them doesn’t mean they are unimportant. If you ignore them entirely, they will surely come back to bite you.
6. **Build a plan for mitigating the issues identified in step five.** Once you’ve identified the likely issues, you will know the process you will need to build to patch the impending cross-organizational challenges.

These six steps should get you pretty far. When we examine advanced organizational design, we’ll also need to consider trade-offs such as speed versus cost, how to roll out organizational changes, and how often you should reorganize.

## Process

The purpose of process is communication. If there are five people in your company, you don’t need process, because you can just talk to each other. You can hand off tasks with a perfect understanding of what’s expected, you pass important information from one person to another, and you can maintain high-quality transactions with no bureaucratic overhead. With four thousand people, communication becomes more difficult. Ad hoc, point-to-point communication no longer works. You need something more robust—a communication bus or, to use the conventional term for human communication buses, a process.

A process is a formal, well-structured communication vehicle. It can be a heavily engineered Six Sigma process or it can be a well-structured regular meeting. The size of the process should be scaled up or down to meet the needs of the communication challenge that it facilitates.

When communication in an organization spans across organizational boundaries, processes will help ensure that the communication happens and that it happens with quality. If you are looking for the first process to implement in your company, consider the interview process. It usually runs across organizational boundaries (the hiring group, human resources—or wherever the recruiter lives, and supporting groups), involves people from outside the company (the candidate), and is critically important to the success of the company.

Who should design a process? The people who are already doing the work in an ad hoc manner. They know what needs to be communicated and to whom. Naturally they will be the right group to formalize the existing process and make it scalable.

When should you start implementing processes? While that varies depending on your situation, keep in mind that it’s much easier to add new people to old processes than new processes to old people. Formalize what you are doing to make it easy to onboard new people.

Much has been written about process design, so we won’t repeat it here. Horowitz has found “The Basics of Production,” the first chapter of Andy Grove’s High Output Management, to be particularly helpful. For new companies, here are a few things to keep in mind:

1. **Focus on the output first.** What should the process produce? In the case of the interview process, an outstanding employee. If that’s the goal, what’s the process to get there?
1. **Figure out how you’ll know if you are getting what you want at each step.** Are you getting enough candidates? Are you getting the right candidates? Will your interview process find the right person for the job? Once you select the person, will they accept the job? Once they accept the job, will they become productive? Once they become productive, will they stay with your company? How will you measure each step?
1. **Engineer accountability into the system.** Which organization and which individual is responsible for each step? What can you do to increase the visibility of their performance?

The process of scaling a company is not unlike the process of scaling a product. Different sizes of company impose different requirements on the company’s architecture. If you address those requirements too early, your company will seem heavy and sluggish. If you address those requirements too late, your company may melt down under the pressure. Be mindful of your company’s true growth rate as you add architectural components. It’s good to anticipate growth, but it’s bad to overanticipate growth.

As CEO, you must constantly evaluate all the members of your team. However, evaluating people against the future needs of the company based on a theoretical view of how they will perform is counterproductive, for the following reasons:

1. **Managing at scale is a learned skill rather than a natural ability.** Nobody comes out of the womb knowing how to manage a thousand people. Everybody learns at some point.
1. **It’s nearly impossible to make the judgment in advance.** How do you tell in advance if an executive can scale? Was it obvious that Bill Gates would learn how to scale when he was a Harvard dropout? How do you go about making that decision?
1. **The act of judging people in advance will retard their development.** If you make a judgment that someone is incapable of doing something such as running a larger organization, will it make sense to teach them those skills or even point out the anticipated dificiencies? Probably not. You’ve already decided they can’t do it.
1. **Hiring.** Scalable execs too early is a bad mistake. There is no such thing as a great executive. There is only a great executive for a specific company at a specific point in time. Mark Zuckerberg is a phenomenal CEO for Facebook. He would not be a good CEO for Oracle. Similarly, Larry Ellison does a terrific job at Oracle but he would not be the right person to manage Facebook. If you judge your team in advance and have a high sense of urgency, you will bring in executives who can manage at high scale in advance of needing them. Unfortunately, you will probably ignore their ability to do the job for the next twelve months, which is the only relevant measure. As a result, you will swap out good executives for worse ones.
1. **You still have to make the judgment at the actual point in time when you hit the higher level of scale.** Even if you avoid the trap of hiring a scalable executive too early or retarding the new executive’s development, you still haven’t actually bought yourself anything by making the prejudgment. Regardless of what you decided at point in time A, you still have to evaluate the situation with far better data at point in time B.
1. **It’s no way to live your life or run an organization.** Deciding (with woefully incomplete data) that someone who works their butt off, does a terrific job, and loyally contributes to your mission won’t be with you three years from now takes you to a dark place. It’s a place of information hiding, dishonesty, and stilted communication. It’s a place where prejudice substitutes for judgment. It’s a place where judgment replaces teaching. It’s a place where teamwork becomes internal warfare. Don’t go there.

So, if you don’t prejudge people’s ability to scale, how do you make the judgment? You should evaluate your team at least once a quarter on all dimensions. Two keys can help you avoid the scale anticipation trap:

1. **Don’t separate scale from the rest of the evaluation.** The relevant question isn’t whether an executive can scale; it’s whether the executive can do the job at the current scale. You should evaluate holistically, and this will prevent you from separating out scale, which often leads to an unwise prediction of future performance.
1. **Make the judgment on a relative rather than an absolute scale.** Asking yourself whether an executive is great can be extremely difficult to answer. A better question: For this company at this exact point in time, does there exist an executive who I can hire who will be better? If my biggest competitor hires that person, how will that impact our ability to win?

Predicting whether an executive can scale corrupts your ability to manage, is unfair, and doesn’t work.
