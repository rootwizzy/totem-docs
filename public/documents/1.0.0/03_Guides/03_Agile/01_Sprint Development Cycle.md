# Document of Agility +5


## Introduction to Agile life cycle
<img src="//talk-thinkspace-org.s3.amazonaws.com/original/1X/7492516fb4e491b5c4ec7e25a5988fdadd11fe11.png" width="684" height="466">

The Agile development life cycle has become a popularly touted method within software development with its ideas focusing on alleviating the challenges that technical projects face over more traditional management methods.

The core tenants of an agile process is build a process that is inherently adaptable allowing for consistent feedback intervals from both team members and stakeholders to fuel quicker iterations of a product. 

This is beneficial for software development because there is a lot of uncertainty in the life cycle of a product, especially early on in the project. If you can get something in the hands of the people who will be using it and bypass the pain points of strenuous requirement gathering.

**The Agile Manifesto**

- **Individual & Interaction** over _process & tools_
- **Working software** over _comprehensive documentation_
- **Customer collaboration** over _contract negotiation_
- **Responding to change** over _following plans_

All of these factors are important in some capacity but the bold concepts are given a more important focus.

Although there are a number of benefits from using a quicker agile process, there will still be challenges to overcome in converting to this methodology. Managing our existing workflow processes will take time to conform to this new format, in example handling the technical tickets or currently outstanding issues will have to be included alongside the new tasks generated from the agile methods. It will be up to the team members involved to determine how to best balance the workload of the assigned tasks and support for the system.

Another challenge we will face with this agile method is the fact that most agile teams seem to work best while all in the same room. Being remote will make collaboration more difficult, but not impossible. The key will to find a way to allow for as much interaction as possible without hindering or adding more work.

---

## Roles
There are 3 defined roles within an agile team. For our purposes there will have to be some overlap between some of the roles as our total number of members are not ideally suited for each person to belong to one unique role. The purpose of these roles are to define what your influence and involvement with the application.

- [Product Owner](#product-owner) - Contains the _vision_ for the product and business oriented.
- [Development Team](#development-team) - A self organizing and inter-disciplinary team tackling tasks.
- [Scrum Master](#scrum-master) - The facilitator and filter for the team and owner

### Product Owner
- Responsible for the vision of the project
- Prioritize **product backlog** adjusting for long term expectations and release plans
- Final arbiter of requirement questions
- Decides whether to ship or continue development
- Considers stake holders interests
- May contribute as a **development team** member
 
### Development Team
- Self organizing without externally assigned roles
- Negotiate commitments with **product owner** one **sprint** at a time
- Autonomous in deciding how to reach its commitment
- Collaborative
- Most successful with long term membership building as a learning group
 
### Scrum Master
- Has no authority or management over the **development team**
- Facilitates the scrum process
- Helps resolve impediments
- Capture empirical data to adjust forecasts
- Shields team from external interference
- Enforces timeboxes
- Keeps **artifacts** visible
- Promote improved engineering practices

---
## Artifacts
There are two primary tools that are key to agile development method which are called artifacts. The **product backlog** and **sprint backlog**. These tools can be implemented using any number of tools or applications, but at its core they are a collection of lists that are used to prioritize and break down into tasks.

### Product Backlog
The **product backlog** is a ranked list that contains any possible feature or requirement that pertains to the product.

This list should be accessible by any stakeholder or team member to add new items. While all members can add items to the list, prioritizing the list is solely on the **product owner** and refining the items occurs with the team in the **sprint planning** meeting and **backlog refinement** meeting.

It is also important to note that you want to maintain a manageable size with your backlog. Having more general epics towards the bottom of the list is okay because as you continue your **product backlog** refinement there will be a natural expansion of larger items as they move to the top especially as requirements and commitments are evaluated during sprints.

#### Product Backlog Item
A product backlog item can be just about anything that could be potentially useful or required for the product moving forward. 

Ideally these should be granular user stories describing more **what** is needed than _how_ to complete it. Because anyone can contribute these items they may start out as an _epic_ but as the team refines the backlog items should be broken into separate items. Most commonly these items will be written as a **user story** giving context to why this item would be useful.

The second important aspect to these items is that they need an agreed definition of **done** which means more than just code complete, but encompassing tested and or refactored to coding or style guidelines.

These items have inherit prioritization based on their position within the **product backlog** but they will also have an estimated effort score associated with them that has been decided by the team in the **sprint planning** meeting.


### Sprint Backlog
The **sprint backlog** is the list the team works with through the duration of the sprint. 

This list is generated from the committed upon **product backlog items** that were negotiated in the **sprint planning** and updated during the **daily scrum** with the **development team**. Once **product backlog items** are committed to the **sprint backlog** each item should be broken down further into a series of tasks.

The tasks will then go through a few states, most commonly 'Not Started', 'In Progress' and 'Completed'. Consistently updating your progress on the task will provide a good sense of what is being done within the team.


#### Sprint Task Item
A **sprint task** is responsible for describing **what** needs to be done for a given **product backlog item**. Usually there a multiple task assigned to any one **product backlog item**.

These tasks should be self contained and require about a day or so less of estimated work. If tasks become more complicated or change they can be re-evaluated during the **daily scrum**.

Although each task will generally have one primary member who is assigned, collaboration for these tasks is to be expected.

---
## Sprints
Sprints are the iteration cycle of the agile development cycle. These cycles are commonly two weeks up to 30 days. These quick cycles are what allow for the adaptability. A sprint should be a fully self contained development cycle including design, coding, testing and feedback. Along with getting faster iterations of your product visible to your stakeholders, it also is a framework for better defining tasks that need to be tackled within your collaborative development team.

### Sprint Planning
This is the first meeting of the sprint and includes the whole team and owner to negotiate what items from the **product backlog** will be committed into the sprint backlog. The product owner is responsible for deciding what items from the **product backlog** are the most important for business while the team decides what items they can effectively commit to work without accruing large technical debt. If the **product backlog** has not been refined into more granular items a good portion of time will be spent doing this especially if there has not been many **backlog refinement** meetings.

Especially starting out as a **development team** it will be challenging in selecting items that can be effectively committed to within the duration of the sprint. When encountering complex tasks it will be on the team to intuitively assess what their capacity, and this process will largely be effected by their previous sprints. It may seem prudent to compare assigned hours to what their actual time was to create a more precise measurement, but this can devalue the ownership of the commitment and should only be used briefly or avoided entirely. Until a team has gone through a number of iterations together it is best to be conservative in your commitments in the sprint.

Towards the end of the meeting after the items have been agreed upon they will be transferred into the **sprint backlog** and broken into sprint tasks.

The maximum time that should be given to this meeting is 8 hours for a 30-day sprint cycle, reduced proportionally based on the sprint duration. This may seem to be excessive for our needs and we may not need a full day for this, but it stresses the importance of really spending time breaking down items and evaluating what the commitment to the tasks really are.

### Daily Scrum
The daily scrum is the core of the agile process. It should be a meeting that takes place at the same time every day during the sprint and should only take about 15 minutes. The purpose of this meeting is to summarize what each member has worked on in the previous day, any blockers they may have and what the plan is for the upcoming work session. This is what allows for the building of a learning team, giving a more visible working environment and allow for collaboration and adaptability.

During this meeting teams may find it useful to maintain the current Sprint Task list, Sprint burn down chart and an impediment list. During this meeting it may be common in finding additional tasks for the sprint. Although it may be useful for the **product owner** to attend these daily meetings, but if an attendee is more of a boss figure there may be an invisible gun effect which hinders self organization.

### Review
After the sprint is complete there is a review of the product increment. This meeting is not a report on the product or application but should involve a demonstration with the whole team, product owner and any stakeholders that may be interested.

After the demonstration the Product Owner is responsible for reviewing the commitments made by the team and declaring what items are complete. A code complete product is not considered done, it must be tested and fully realized. Incomplete items are returned to the **product backlog** and ranked for future sprints.

The **scrum master** in tandem with the **product owner** will review the feedback given by the stakeholders to new product items. It is common that the scope and discovery of new items out paces the capacity of the development team as part of this process.

It is important for external stakeholders to attend these review in some capacity as development is difficult to proceed within a vacuum; it is easier to see the things you want when you have something that you do not.

Given a 30 day cycle, the time allotted for this is given a maximum of 4 hours including the demonstration and feedback analysis.

### Retrospective
Another meeting that occurs after the sprint, this meeting focuses on the **development team** reflecting on its own process. These meetings should not become a place to reprimand or punish those who may have struggled with any tasks or become a stale look back on what went wrong.

Although it these meetings tend to look on what could be changed to become more effective, it is not a performance review. There will be a number of impediments that crop up during these meetings, and it is important to include solutions alongside problems.

Once the team has determined what influences would be important to resolve their impediments it is up to the **scrum master** to expand upon these influences. Tools that the **scrum master** can implement could be silent writing, timelines and satisfaction histograms.

### Backlog Refinement
This is not a core meeting for the agile process, but has become a useful meeting especially early on in the implementation of the agile process. The **product backlog** tends to start off large and poorly understood, and this meeting purpose is aimed to prepare the **product backlog** for the upcoming sprints.

During this meeting the **development team** and **product owner** look at the **product backlog** items that are considered large or vague and break them down from both a business aspect and technically. Along with breaking them down it is important to note how you build these items, moving away from the horizontal dependent tasks to more vertical and independent.

---

## References
- [Agile Manifesto](http://agilemanifesto.org/)
- [Agile Infrastructure & Operations - Patrick Debois](http://www.jedi.be/presentations/agile-infrastructure-agile-2008.pdf)
- [The Agile Movement](http://agilemethodology.org/)
- [The Scrum Training Series - Michael James](http://scrumtrainingseries.com/)
- [Scrum Reference Card - Michael James](http://scrumreferencecard.com/scrum-reference-card/)
- [Implementing Scrum Guide - Axosoft](http://www.scrumhub.com/implementing-scrum-guide/)