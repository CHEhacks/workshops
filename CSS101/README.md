# CSS 101

code samples and links for the CHE Hacks CSS 101 workshop

## Links

* [slide show](https://github.com/CHEhacks/workshops/blob/master/CSS101/CSS_101_Workshop.pdf)
* [CSS validator](http://www.css-validator.org/)
* [color contrast checker](http://webaim.org/resources/contrastchecker/)
* [CSS properties](http://www.w3schools.com/cssref/)

## Code Samples

Below are code samples to begin the workshop exercise.  Cut and paste them.

### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Monty Python Home Page</title>
</head>
<body>
	<a href="#main">Skip to main content</a>
	<nav>
		<a href="/">Home</a>
		<a href="actor-bios.html">Actor Bios</a>
		<a href="shows-and-movies.html">Shows and Movies</a>
		<a href="learn-more.html">Learn More</a>
	</nav>
	<article id="main">
		<section>
			<h1>Monty Python</h1>
			<p>Here you will find out all you wanted to know about Monty Python!</p>
			<p>Monty Python is a group of commedians (and one cartoonist) who created the British television show called <em>Monty Python's Flying Circus</em>.  Later they branched out into movies as well.</p>
		</section>
		<section>
			<h2>The Commedians</h2>
			<p>There were 6 commedians that made up Monty Python, 5 Brits and one American.</p>
			<p>The commedians were:</p>
			<img src="https://fanart.tv/api/download.php?type=download&image=47066&section=2" alt="picture of the cast">
		<ul>
			<li>John Cleese</li>
			<li>Graham Chapman</li>
			<li>Eric Idle</li>
			<li>Michael Palin</li>
			<li>Terry Jones</li>
			<li>Terry Gilliam</li>
		</ul>
		</section>
		<section>
			<h2>Monty Python's Flying Circus</h2>
			<p>Monty Python's Flying Circus was a comedy sketch show.  It first aired on the <a href="http://www.bbc.com/tv">BBC</a> in 1969.</p>
			<p>Monty Python's Flying Circus was known for its slapstick humor, sight gags, risque innuendos, and strange animation sequences.</p>
		</section>
		<div>
			<a href="http://montypython.wikia.com/wiki/Main_Page" class="btn btn-primary">Find out more</a>
		</div>
	</article>
</body>
</html>
```

##CSS Start
```
html {
    font-size: 62.5%;
    font-family: Arial, sans-serif;
}
body {
}
section {
}
h1, h2 {
}
h1 {
}
h2 {
}
```

## About The Instructor

**Adina Halter** is Product Owner and Chief Technologist for Accessibility at Comcast NBC Universal.

Prior to this she was Front-end Architect for eBusiness.  She wrote the Standards and Best Practices for HTML, CSS, JavaScript, and Accessibility for Comcast.

Adina is a member of the [W3C](http://www.w3.org/) and the [WAI](http://www.w3.org/WAI/) [Education and Outreach Working Group](http://www.w3.org/WAI/EO/)

She [tweets](https://twitter.com/haltersweb) regularly on all things Front-end and Accessibility.
