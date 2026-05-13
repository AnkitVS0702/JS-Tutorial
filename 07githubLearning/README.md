# While working with teammate

1. Switch to main and pull from upstream main and push to origin main
```
git checkout main
git pull upstream main
git push origin main
```

2. Create a feature branch. Make changes, add and commit and then push to your origin. 

```
git checkout -b feature-name
git add .
git commit -m "<commit msg>"
git push -u origin add-authentication
```
Now our updated code is in different branch on remote repo(forked repo on Github)

3. Create Pull request
Properly check the base and head branch and make the PR

4. After PR merges, now your fork remote repo (origin) on Github is behind from upstream. So go to main branch and pull upstream main. Then push on origin main
```
git checkout main
git pull upstream main
git push origin main
```

## Very important 
5. Delete the branch from both places i.e. local as well as origin(remote)

```
git branch -d add-authentication (to delete from local)
git push origin --delete add-authentication (to delete from remote)
```

# For solo project

1. Checkout main and pull latest changes from origin main before starting
```
git checkout main
git pull origin main
```

2. Create feature branch andd work on that. Add,commit and push that branch only.
```
git checkout -b feature/authentication
git add .
git commit
git push -u origin feature/authentication
```
## Imporant
Note:- While working with a new feature branch and pushing for the first time always apply -u (because we want to make a new branch in the remote repo and set it as its upstream for the current branch on our loca repo)

```
git push -u origin feature/authentication
```

Now for further pushing of this brnach you can simply use
```
git push
```

## Merge the new branch code to main

3. Go to main branch and and run the merge command for merging from that feature branch . Then push the main to origin main

```
git checkout main
git merge feature/authentication
git push origin main
```

## Important
This is the only place where we run git merge 

## Delete both the branches (remote as well as local)
4.
```
git branch -d feature/authentication
git push origin --delete feature/authentication
```

# Important Git commands

git stash

git cherry pick

git rebase

Differnec between git pull and git merge