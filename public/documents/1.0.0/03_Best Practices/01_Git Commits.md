# Commit to Better Commits
- [Purpose](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#purpose)
- [Format](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#format)
   - [Subject](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages/#subject)
   - [Body](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages/#body)
- [Example Commit](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#example-commit)
- [Guidelines](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#guidelines)
   - [Early and Often](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#commit-early-and-often)
   - [Amend](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#amend)
   - [Merge/Rebasing](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#merge-vs-rebase)
- [Setup](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#setup)
- [VIM Basics](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#vim-basics)
- [Resources](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#git_commit_temp)
  - [Commit Template](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#git_commit_temp)
  - [Links](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#links)

## Purpose
The objective of this is to standardize our git commits structure and format to convey our changes in a more      effective manner. This will also allow us to programmatically aggregate our commits for a changelog as well as define a standard environment for an open-source community moving forward.

## Format
Using the guidelines from [here](http://chris.beams.io/posts/git-commit/#intro) we will start to look at our format of commit messages.

### Subject
> The subject is by far the most important part of the commit and if the commit scope is small enough it may be the only part. It also may be the most difficult part of the commit to write trying effectively convey what this commit is doing in such a small space.

1. **Type** prefix
  - [FIX] If a commit is fixing a bug/functionality
  - [MOD] If a commit is updating functionality
  - [ADD] If a commit is adding functionality
  - [RM]  if a commit is removing functionality
  - [WIP] If a commit is in progress for new functionality
2. **50** characters
  - 69 characters is the limit subject lines appear on github before being truncated with 50 is a good target.
  - This is aided by VIM syntax highlighting showing you when you reach 50 characters in your subject
3. **Newline** between the body and subject
  - This is because of certain tools from git using the first line such as `rebase` or `log` may error.
4. **C**apitalize the first letter of the subject
5. **No Period** at the end, period!
6. **Imperative** mood not indicative mood
  - *[example](http://chris.beams.io/posts/git-commit/#imperative)*

### Body
> The body of the commit although optional should be used to further describe the purpose of your commit. The body is used to explain why this commit is pertinent and less about how it is changing the code base as that should be self evident within the code.
  
1. **Wrap** at 72 characters
  - This will give keep your messages formatted nicely on github's 80 character word wrap with room to spare for auto-indenting
2. **What & Why** vs. How
  - *[example](http://chris.beams.io/posts/git-commit/#why-not-how)*

## Example Commit
    [ADD] Example commit please ignore

    More detailed explanatory text, if necessary. Wrap it to about 72
    characters or so. The blank line separating the summary from the body 
    is critical (unless you omit the body entirely); various tools like 
    `log`, `shortlog` and `rebase` can get confused if you run the two together.

    - Bullet points are okay too
    - Here have another

    Closes #123, Closes #124
    See also: #456, #789

## Guidelines
### Commit Early And Often
> Git only takes full responsibility for your data when you commit. If you fail to commit and then do something poorly thought out, you can run into trouble. Additionally, having periodic checkpoints means that you can understand how you broke something.

Building more atomic commits may seem tedious at first having to split your work in to more granular parts, but the upside of having a more segmented history will allow for easier dissemination of what changes were made where. Deciding what should be a commit comes down to the individual, but using a guideline like a issue or ticket is a good place to start. A common disadvantage of having a large base of commits is when it comes time to merge, but this can be handled by git `rebase`.

### Amend
Before we get into rebasing a commonly useful feature is the `git commit --amend` command. Amending a commit will allow you to edit the most current local commit. It is crucially important to understand that by using `--amend` that it is creating a new commit. This means that you **DO NOT** want to `--amend`, `rebase` or `reset` commits that have already been pushed to a public/remote branch lightly as it will change the history of those commits.

    # Edit hello.py and main.py
    git add hello.py
    git commit

    # Realize you forgot to add the changes from main.py
    git add main.py
    git commit --amend --no-edit

> The resulting commit will replace the incomplete one, and it will look like we committed the changes to hello.py and main.py in a single snapshot.

Using `git commmit --amend` without `--no-edit` will also allow you to edit the git commit message that you had added previously.

### Merge vs. Rebase
> The first thing to understand about git rebase is that it solves the same problem as git merge. Both of these commands are designed to integrate changes from one branch into another branch—they just do it in very different ways.

#### Merge
Merging is the most common way of getting branches congruent with each other.

    git checkout feature
    git merge master

This will take any commits from master that were pushed after you branched from `master` and integrate them into `feature`. The advantage of a merge is that it is _non-destructive_ meaning that it will only further your commit history. The disadvantage being it can make the history of a branch(es) polluted especially when you introduce a number of parallel commits and active branches.

**Note:** As of April, 2016 GitHub now has a "Merge And Squash" available for pull requests that will take all the commits of the pull request and make them into a single commit. This may be preferably when dealing with branches that are part of a pull request. 
[Read More](https://help.github.com/articles/about-pull-request-merge-squashing/)

#### Rebase
Before explaing the basic use of `rebase` it is **highly** recommended you read [this](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/conceptual-overview) article. There is a lot more to rebasing in terms of managing the history of a repository or individual branches, for a more detailed look or questions go to the [documentation](https://git-scm.com/docs/git-rebase)

Rebasing is considered a bit more of an advanced technique as it has some potential pitfalls that merging does not.

    git checkout feature
    git rebase master

> This moves the entire feature branch to begin on the tip of the master branch, effectively incorporating all of the new commits in master. But, instead of using a merge commit, rebasing re-writes the project history by creating brand new commits for each commit in the original branch.

For the purpose of learning how a rebase works it is recommended to use `rebase -i` or interactive mode as you can have more agency in how the rebase will enact.

    git checkout feature
    git rebase -i master

This will bring up your text editor with the following (assuming you have 3 commits in `feature`)

    pick 33d5b7a Message for commit #1
    pick 9480b3d Message for commit #2
    pick 5c67e61 Message for commit #3

The first portion `pick` is the command to be performed, followed by the commit hash and message. When you save the file it will then perform the rebase given each command for each commit.

Commands for `rebase`
- `pick`: apply the commit
- `edit`: stop *after* applying the commit so you may edit the files and/or commit message
- `reword`: edit the commit message
- `drop`: will delete the commit, or if just by deleting the specified line will also do this
- `squash`: folds the commit into the commit above it **with** commit message
- `fixup`:  folds the commit into the commit above it **without** commit message

**Notes:**
 - If the `rebase` is stopped via an `edit` command or error, resume it with `git rebase --continue`
 - If using a `squash` or `fixup` on commits with different authors, the author of the first commit is attributed




## Setup
_**Note:** It is possible to set `subl` to use sublime as your editor if that is preferable, if so skip to the last step._

1. Install `vim` editor
  - Ubuntu 15.10
    - `sudo apt-get install vim`
2. Set git to use `vim` as its editor
  - Set core.editor in your Git config: `git config --global core.editor "vim"`
  - Set the GIT_EDITOR environment variable: `export GIT_EDITOR=vim`

3. Setup your ~/.vimrc
  - Go to your home directory and create or open .vimrc and add
    - `syntax on`
    - `autocmd Filetype gitcommit setlocal spell textwidth=72`
4. Add commit template
  - create or open your ~/.git_commit_temp.txt -- *filetype is important!*
    - Add the text to the file from [below](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages#git_commit_temp)
  - Set commit.template to the new template
    - `git config --global commit.template ~/.git_commit_temp.txt`

## VIM Basics
VIM is a command line editor and by following the steps from [here](https://github.com/sixthedge/cnc-client/wiki/Commit-Messages/#setup) when you use `git commit` it will open VIM to edit your commit message. Using VIM can be non-intuitive but here are some of the basic things to get around in writing your git commits.

There are 3 'modes' in VIM
 - **Interactive**: Default mode, allows you to use the arrow keys to move your cursor
 - **Insert**:      Allows you to start editing the text of the file
 - **Command**:     Used to perform VIM specific commands

#### Interactive Mode 
 - Arrow keys will move your cursor
 - `i` or `a` will put you into 'Insert' mode
 - `:` will put you into command mode

#### Insert Mode
 - Typing will edit the document
 - `esc` will put you back into interactive mode

#### Command Mode
 - From 'Interactive' mode hitting `:` followed by a command then `enter` to input the command
 - Basic Commands -- more commands [here](http://bullium.com/support/vim.html)
    - `:q` quit without saving -- *adding `!` will force the command if errors*
    - `:wq` write-quit that will save and quit -- *adding `!` will force the command if errors*

## Resources
### .git_commit_temp
**Make sure there is a blank line at the top of the commit template and before the body!**

Save file as .git_commit_temp.txt

    # ### Above if applied, this commit will...


    # ### Above Explain what this commit is changing and why

    # ### Relevant ticket or other resources

**Make sure there is a blank line at the top of the commit template and before the body!**

### Links
- [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)
- [Openstack - Good Practices for Commits](https://wiki.openstack.org/wiki/GitCommitMessages)
- [Commit Often](https://sethrobertson.github.io/GitBestPractices/)
- [Erlang - Writing good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages)
- [WebDesignWeekly - Better Git Commit](https://web-design-weekly.com/2013/09/01/a-better-git-commit/)
- [Thoughtbot - 5 tips for useful commits](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message)
- [Git Rebase/Amend](https://www.atlassian.com/git/tutorials/rewriting-history)
- [Git Rebase vs. Merge](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
- [Squash and Merge](https://help.github.com/articles/about-pull-request-merge-squashing/)
- [Setup Git comit template](http://codeinthehole.com/writing/a-useful-template-for-commit-messages/)
- [VIM Cheat Sheet](http://bullium.com/support/vim.html)