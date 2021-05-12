# Create portfolio repo on github

 1. First you need to go into github.com and create an account.
 2. Once you've done that you need to create a repo and give it a name like so:`{yourUsername}.github.io`. You create the repo with this name so that when you navigate to that domain, it will render whatever you have on a `Index.html` file on that location
 3. Once you create your repo a screen with the message `Quick setup — if you’ve done this kind of thing before` will show, in there there's some text that says `Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.`, click on `upload existing file` a screen with a section for you to drop your files will show up, you'll drop your `Index.html` file there, which you'll create on the next step.
 4. Go ahead and create a file `Index.html` and add the following content:
```html
<html>
	<h1>{your name goes here}'s Portfolio</h1>
    <img style="width:500px" src="./{your image name goes here}.jpg">
</html>
```
Notice that there's an image being displayed on the html, you'll need to add this into your repo too, once you have the html file and image you want to upload to your repo ready, drag and drop them on the page mentioned before. For the files to be added you'll need to commit these changes, go ahead and click on commit.

 5. If you did every previos step succesfully then you should be able to go to `{yourUsername}.github.io` in your browser and see the page you just added to the repo.