# Introduction to Git and GitHub (60 minutes)

## Objectives
Fellows Will Be Able to...
* Understand Git as a tool for version control.
* Develop a sound mental model for the Git/GitHub workflow.
* Understand the difference between git and GitHub
* Initialize a Git repository from the command line
* Create a remote GitHub repository
* Stage and commit changes from the command line.
* Push commits to a remote repository.

## Vocabulary
* Git
* GitHub
* version control system (VCS)
* repository
* commit
* push
* remote
* local

## Learning
* Git is a **version control system** tracking changes in computer files by a single person or among multiple coordinating work on those files among multiple people.
* Git is primarily used for source code management in software development.
* GitHub is a **remote**, cloud hosting service for Git repositories. In addition to the core features of Git, GitHub provides a suite of tools to facilitate collaboration, such as bug tracking, task management, and feature requests.

## Lecture: Developing a Mental Model
* Mental models are the stories or analogies used to explain complex topics.
* A mental model allows us to understand how to USE the system effectively, even if we don't understand its intricacies.

Imagine working in Microsoft Word (before Google Drive was a thing).

* You worked all night on a 15 page paper. You saved it. Then you fell asleep. Your little brother came in and deleted your paper and saved over it. You're screwed.
* Imagine you worked all night on a short essay. Just as you were getting ready to submit you thought, "this isn't good enough." You scrapped the entire second half of the essay and took the paper in a different direction. When you finally submitted, your teacher said, "I love the first half but I like the original idea for the ending that you told me about." You think, "Ugh. I saved over that original copy. I have to write it all over again. I'm screwed."
* What if there was a way that you could take a _snapshot_ of your file each time you pressed 'Save'. That way, you could go back to previous _versions_ of your work if something ever happened.
* Well that's exactly why Git was created!


* Even if you did have all those "snapshots". You go home to revert back to your previous version. You find out that your brother has set your laptop on fire.
* Don't you wish you had a place where you could _host_, or store your files so that they aren't gone forever when your computer combusts into flames? And wouldn't it be great if it lived in the cloud so that you could access them from any device with an internet connection?
* Well, that's exactly why GitHub was created in 2008!


Let's continue with our Microsoft Word analogy.
* In Git, our project folders are called **_repositories_**.
  * `git init` in the command line.
* The folder that is saved on your computer is called a **local repository**.
* Any time you make a significant change to your local repository, you **stage** them and **commit** them. This is like saving your document with one key difference:
  * In Microsoft Word, when you press 'Save', you are writing over the previous copy and saving the new copy in its place.
  * In Git, when you `commit`, you are taking a "snapshot" of the current state of your repository and saving that snapshot. When you `commit` multiple times, you are saving multiple snapshots, essentially creating a living history of your repository.
* Before long, you want to back your essay up in the cloud. So you create a Google Drive folder with the same name. You can access Google Drive from anywhere so you know your essay will be safe.
* Likewise, we can log on to GitHub.com and create a repository with the same name as our local repository. We call this a **remote repository**.
* When we **push** to this repository, we are sending our local changes to our remote repository. Now our files lives in two places: on our laptop and on the internet!
* We can **pull** from the remote repository to sync up our local repository.

## How to commit changes through the Command Line?

## How to commit changes through the GUI?
