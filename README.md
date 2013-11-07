Portfolio App for Olin
===

This app is meant for Oliners to quickly get a portfolio up and running online.

##### Steps to get your portfolio up and running:

1. Fork this repo

2. Clone this repo to a place that you will remember using the command line. To do this, type:
``` git clone https://github.com/your_user_name/portfolio ```

3. Make an account on Github and install the command line tools

4. Make an account on Heroku (http://heroku.com) and install the command line tools

5. Create a heroku application from the command line by navigating to your portfolio folder and typing:
``` heroku create <your custom portfolio name>```

6. Commit to Github and Heroku using the following commands
```
git add .
git commit -m "init"
git push origin master
git push heroku master
```


##### Steps to add your content to the portfolio

1. There are two folders you need to care about. They are the "work" and "projects" folders.

2. Open up the work and project folders and check out the .md files. A few important observations:
	* The .md files are called markdown files. They use a simple format called markdown that you can find [documentation for here](http://daringfireball.net/projects/markdown/syntax).
	* The files names are important. They have the following format:
		* First comes the name of the project or work experience. Use dashes "-" for spaces
		* Last comes the date, which uses the format: "month_year" (e.g. "december_2012")
		* Last, last comes the .md file extension
		* Please keep everything in lowercase, thanks :)
	* You can embed simple HTML if you want to embed a video, multiple images in a table, etc. There are examples in my projects folder for this.
	* To edit the background picture, save a image called `background.jpg` to the folder `/public/images/`
	* To store photos that you want to embed, save them in `/public/images`
	* To change the headshot, save an image called `headshot.jpg` in the folder `/public/images/`
	* To change the name, biography text, and links --> open up `views/index.jade` and search for the text. Swapping out the URLs for LinkedIn, Github, Twitter, and email should be pretty straighforward

3. I know this is badly documented right now. Sorry! Let me know what issues you run into and I will help you fix them

Email me at [juliana.nazare@students.olin.edu](mailto:juliana.nazare@students.olin.edu) if you have any questions / what help installing the app.

