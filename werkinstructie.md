# Werkinstructie voor bio-informatica docenten 

Het volgende beschrijft de manier van werken door BFV docenten om dit gitbook up-to-date te houden, gebruikmakend van git.

### Prerequisites

- Een github account
- Een lokale _git_ installatie

### Eerste keer gebruik

- Fork de repository https://github.com/MichielNoback/vakomschrijvingen_bioinformatica
- Clone hem lokaal op je computer `git clone https://github.com/<YourUserName>/vakomschrijvingen_bioinformatica.git`
- Breng wijzigingen aan in je lokale kopie
- Doe een Add `git add ...`, een Commit `git commit -m <een goede omschrijving van wijzigingen>` en een Push `git push origin master`  
**Let op!** Het is heel belangrijk dat je commit message een goede omschrijving is van de module en wat er gewijzigd is. Geef voorkeur aan meerdere kleine commits (1 per module) gebundeld in 1 pull request.
- Op je github fork (**Github website!**): Stuur een pull request naar de originele repo. Zie voor hulp: [https://help.github.com/articles/creating-a-pull-request-from-a-fork/](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

### Latere updates  

- Voordat je start: sync met de "Master" repo; 
    - Definieer een tweede remote, als je die nog niet hebt; zie [https://help.github.com/articles/configuring-a-remote-for-a-fork/](https://help.github.com/articles/configuring-a-remote-for-a-fork/) (`origin` is dan je eigen repo op github en `upstream` de Master repo die de coordinator van het curriculum beheert)
    - Sync die met je eigen locale repo: “git pull upstream master” of heel netjes volgens [https://help.github.com/articles/syncing-a-fork/](https://help.github.com/articles/syncing-a-fork/)
- Breng je nieuwe wijzigingen aan, add, commit en push gevolgd door een pull request (zie "Eerste keer gebruik")

### Publiceren als Gitbook op Github Pages (door ADMIN)  
#### Optie 1
Maakt gebruikt van simpel git en command-line spul maar is wat bewerkelijker, tenzij je hem in een shell-scriptje stopt...

```{sh}
# install the plugins and build the static site
gitbook install && gitbook build

# checkout to the gh-pages branch
git checkout gh-pages

# pull the latest updates
git pull origin gh-pages --rebase

# copy the static site files into the current directory.
cp -R _book/* .
# OR to prevent confimation dialog
yes | cp -R _book/* .

# remove 'node_modules' and '_book' directory
git clean -fx node_modules
git clean -fx _book

# add all files
git add .

# commit
git commit -a -m "Update docs"

# push to the origin
git push origin gh-pages

# checkout to the master branch
git checkout master
```


#### Optie 2
Dit maakt gebruik van node/npm en node plugins gulp en yarn.  

Zie deze link [https://gldraphael.com/blog/publishing-gitbook-to-github-pages/](https://gldraphael.com/blog/publishing-gitbook-to-github-pages/)
voor een uitgebreide instructie.

Dus, na elke bewerking dienen de volgende stappen/commando's te worden uitgevoerd:

- git add + git commit + git push ("gewone" repo)
- gitbook build OF gitbook serve ("build" boek)
- gulp publish (commit html en resources naar branch hg-pages)

**NB**: update to node 10 caused errors that were solved using these actions:  

- Solution is delete node_modules dir and package-lock.json.
- Then run sudo npm install --unsafe-perm=true