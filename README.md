# Kovert Website

## Install Prequisites

To test, run and build the website, you will need the [Hugo](https://gohugo.io/) static site generator installed.

```bash
brew/choco/apt install hugo
```
or follow https://gohugo.io/getting-started/installing/


## Run local development version

For viewing a new blogpost/news/article draft run `hugo -D server` and visit the rendered version in your browser at `localhost:1313`. The `-D` is required to show entries which are not yet marked for publishing with `draft: true`.

## Build a static copy

`hugo -D` will build the static version of the website.
The resulting web page will be put in the `public` folder. This folder is ignored by git, but can be used for local testing.

When you are ready to publish the website, simply push to github and merge into the main branch. The Github Pipeline will automatically build and publish the page if everything goes as planned.

### How to add a new page

To add a kovert service: 
> hugo new services/physical-testing.html


The page will be added to the `services` folder, where you can edit the content as you will. The page will be populated with a Front Matter and a header section. It will automatically be built into the list page and linked where appropriate.

Before submitting a pull request, make sure to remove the "`draft: true`" line
from the file.