# Git Branching

## Introduction
Github is a tool we have become very familiar with over the course of development and have had a number of attempts to define workflows within Github. As we prepare to move in agile development we can look to Github workflows to help track our sprints without adding extra overhead.

*See the sprint backlog section in the [Agile Methodology Overview](/1.0.0/git/branching) for a brief rundown of what this solves for.*

## Branching
Branches are a key component to the Git workflow and the conventions and integration of branches will play an important role in conforming to an agile life cycle.

There will be a number of branch types we will be employing to refine our development cycle in conjunction with agile design.

- Main branches
  - [Master](#master-and-development-branches) - Production ready branch
  - [Development](#master-and-development-branches) - Latest delivered source code
- Support branches
  - [Release](#release-branches) - Feature ready staged for production pending testing/criteria
  - [Sprint](#sprint-branches) - Contains all feature pull requests committed to the current sprint
  - [Feature](#feature-branches) - Defined based off the user story or feature
  - [Hot-fix](#hot-fix-branches) - Used primarily to solve any issues with release branches

### Master and Development Branches
The master branch will largely remain in its current form and denotes our production ready release. This branch should not be directly committed to and only the current **Release Candidate** branch or **Hot-Fix** branch should be allowed to merge into Master.

When a **Release Candidate** branch is completed and merged into Master this will denote a new version of the source.

The development branch like the Master branch won't undergo any changes in terms of its purpose. This will be the most current state of the source and considered our working branch, but committing directly to this branch will be avoided. All branches will derive in some form from this branch and most will merge back into this.

### Sprint Branches
Sprint branches will be created at the start of each sprint and used to aggregate any **feature branch** that is associated with the current sprint.

Branches from: `development`
Merges into: `development`
Naming Convention: `sprint/#` 

#### Creating Sprint branches
- `git checkout -b sprint/# development`
- Open PR to `development `
  -  `git commit --allow-empty -m "optional message"`

#### Closing Sprint branches
- Make sure any **feature branch** ready to be merged has be done.
- Merge `sprint/#` into `development`

### Feature Branches
Feature branches will be created during a sprint and are normally associated with a user story when doing agile. Although these will be branched for a sprint branch, they may be carried over to other sprints.

Branches from: `sprint/#`
Merges into: `sprint/#`
Naming Convention: `feature/foo-bar-baz`

#### Creating feature branches
- `git checkout -b feature/foo-bar-baz sprint/#`
- Open PR to `sprint/# `
  -  `git commit --allow-empty -m "optional message"`
  - Tasks can be added within the description of the PR with checkboxes

#### Closing feature branches
- Merge PR into corresponding `sprint/#` branch

### Release Branches
Release branches or Release Candidates are a new style of branch used for staging between development and master. These should coincide with the end of a sprint denoting a new version. When the release has been determined ready, it will merge into `master` increasing the version as well as back into `development`.

Branches from: `development`
Merges into: `master` and `development`
Naming Convention: `release/#` 

#### Creating Release branches
- `git checkout -b release/# development`
- Open PR to `master`
  -  `git commit --allow-empty -m "optional message"`

#### Closing Release branches
- Resolve any hot-fix branch PR's
- Merge release into master
  - `git checkout master`
  - `git merge --no-ff release/#`
  - `git tag -a {version#}`
  - `git push --tags`
- Merge release back into development
  - `git checkout development`
  - `git merge --no-ff release/#`
  - resolve any merge conflicts, likely if there has been any hot-fixes to the release

### Hot-Fix Branches
Hot Fix branches are used for addressing any issues in `master` or `release` branches. If the hot fix was something directly into `master` (uh oh) then make sure you merge it into `development` as well!

Branches from: `release/foo-bar-baz` or `master`
Merges into: `release/foo-bar-baz` or ( `master` & `development`)
Naming convention: `fix/foo-bar`

#### Creating hot-fix branches
- `git checkout -b fix/foo-bar release/#` or `master`
- Open PR to `release/#` or `master`
  -  `git commit --allow-empty -m "optional message"`

#### Closing hot-fix branches
- Merge fix into master (if branched from mater)
  - `git checkout master`
  - `git merge --no-ff fix/foo-bar`
  - `git tag -a {version#}`
  - `git push --tags`
- Merge fix back into `release/#`
  - `git checkout release/#`
  - `git merge --no-ff fix/#`

## Pull Requests
Pull requests can be useful in tracking what the general state of development is. We have commonly just created pull requests after a large branch/feature has been worked on and is ready for a review. Creating a pull request at the start of a branch/feature may seem non-productive or more accident prone to merging code that isn't ready. We will implement a naming convention for our PR's to have a more verbose state of our development.

### Pull Request States
These states can be either in the title of the Pull request or as a label. Until we can confirm how we will want to use labels moving forward the Title should be the place for the state.

- [WIP] Work In Progress
- [RFI] Ready For Inspection
- [RFM] Ready For Merge (optional)

When updating the state of a Pull Request you can use the comments to ping @members to notify them if needed for review or merging.

### Pull Request Descriptions
Moving forward we can look into finding better ways to give value to the description of Pull Requests. Templates may be included into different type of PR's to give process checklists or other informative information.

For now we will use descriptions primarily in **feature branches** for maintaining the task list. In GitHub markdown you can use `[ ]` to denote a checkbox and `[x]` to have it checked. You can also add the @member tag to a task to denote who is working on the task.

_Clicking the checkbox in the formatted description will automatically convert between the two_ 



## References
- [Git Release Management - Paul Serby](http://www.clock.co.uk/blog/release-management-with-gitflow-the-clock-way)
- [SCRUM and Git: Optimized Gitflow - Ole](http://dotnet.work/2015/03/scrum-and-git-optimized-gitflow-with-a-lot-of-fancy-colors/)
- [GitHub Issues Can be Agile If you Do it Right - Jen Dewalt](https://zube.io/blog/agile-project-management-workflow-for-github-issues/)
- [GitHub As a Workflow - Hugo Giraudel](http://hugogiraudel.com/2015/08/13/github-as-a-workflow/)
- [Git Workflow For Sprint Projects](https://maltronic.io/2015/06/10/git-workflow-for-sprint-projects/)
- [Git Workflow - Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/)
- [Semantic Versioning 2.0.0](http://semver.org/)