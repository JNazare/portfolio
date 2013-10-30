#Curriculum Github

Since September 2013, I have been working a project nicknamed "Github for Curriculum," a web application that uses the power of Github's version control in a simple-to-use web application for people that do not use Github. This is a project that I am working on for [Startup Institutee](http://startupinstitute.com/), a education company that runs schools in New York, Chicago, and Boston.

The idea for the project stemmed from a problem that [Will Eaton](http://startupinstitute.com/team/will-eaton) and I both faced when revising Startup Institute's curriculum, which is routinely taught by 100 instructors across 3 cities. We decided that the first step to having a manageable curriculum was to be able to track the revisions being made to the curriculum by each of the instructors. 

After looking into spinning up our own Gitorious server, I decided to use Github itself as our version-controlled backend and built a web application that allowed non-technical instructors to interface with our curriculum on Github.

I have built the web application in Node.Js, using the markdown parser Marked, ACE editor, and the Github v3 API. I have currently finished the first version of the application and am working through user-testing with students and instructors that will use the application.

---

<center>
<table cellpadding="10">
	<tr>
		<td>
			<img src="/images/curriculum_github_edit.png" alt="Drawing" style="width: 300px;"/>
			<center>
				<p> Interface where you can edit curriculum</p>
			</center>
		</td>
		<td>
			<img src="/images/curriculum_github_view.png" alt="Drawing" style="width: 300px;"/>
			<center>
				<p> Interface where you can view curriculum</p>
			</center>
		</td>
	</tr>
</table>
</center>