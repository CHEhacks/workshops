# JavaScript 101

code samples and links for the CHE Hacks JavaScript 101 workshop

## Links

* [slide show](https://github.com/CHEhacks/workshops/blob/master/JS101/JS_101_Workshop.pdf)
* [JS Hint](http://www.css-validator.org/)
* [JS Lint](http://www.jslint.com/)
* [JavaScript Reference](http://www.w3schools.com/jsref/)
* [JavaScript Tutorial](http://www.w3schools.com/js/default.asp)

## Code Samples

Below are code samples to begin the workshop exercise.  Cut and paste them.

### HTML for first exercise
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>How Old Are You</title>
</head>
<body>
<h1>Age Finder</h1>
<p>We will find your age.</p>
<button type="button" id="findAge">Find Your Age</button>
<!-- SCRIPTS -->
<script type="text/javascript" src="how-old-are-you.js"></script>
</body>
</html>
```

##HTML for second exercise
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="stylesheet" href="styles.css">
	<title>Monty Python Home Page</title>
</head>
<body>
	<a href="#main">Skip to main content</a>
	<nav>
		<a href="/" class="nav-link">Home</a>
		<a href="actor-bios.html" class="nav-link">Actor Bios</a>
		<a href="shows-and-movies.html" class="nav-link">Shows and Movies</a>
		<a href="learn-more.html" class="nav-link">Learn More</a>
	</nav>
	<h1>Monty Python</h1>
	<p>Here you will find out all you wanted to know about Monty Python!</p>
	<article id="main">
		<section>
			<p>Monty Python is a group of commedians (and one cartoonist) who created the British television show called <em>Monty Python's Flying Circus</em>.  Later they branched out into movies as well.</p>
		</section>
		<section>
			<h2>The Commedians</h2>
			<p>There were 6 commedians that made up Monty Python, 5 Brits and one American.</p>
			<p>The commedians were:</p>
			<img src="https://fanart.tv/api/download.php?type=download&image=47066&section=2" alt="picture of the cast" class="cast-picture">
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
		<section>
			<h2>Examples of Sillyness</h2>
			<p>Monty Python created a movie called <em>Monty Python and the Holy Grail</em>.  In it they had to blow up a killer rabbit by using the Holy Hand Grenade of Antioch.  They consulted <em>The Book of Armaments</em> to help them.</p>
			expandable content together.</p>
			<h3>Armaments 2:9&ndash;10 <button type="button" class="accordion-control" data-controls="armaments_2_9">Expand</button></h3>
			<p id="armaments_2_9">And Saint Attila raised the hand grenade up on high, saying, "O Lord, bless this thy hand grenade, that with it thou mayst blow thine enemies to tiny bits, in thy mercy." And the Lord did grin. And the people did feast upon the lambs, and sloths, and carp, and anchovies, and orangutans, and breakfast cereals, and fruit bats, and large chu&hellip;</p>
			<h3>Armaments 2:19&ndash;21 <button type="button" class="accordion-control" data-controls="armaments_2_19">Expand</button></h3>
			<p id="armaments_2_19">And the Lord spake, saying, "First shalt thou take out the Holy Pin. Then shalt thou count to three, no more, no less. Three shall be the number thou shalt count, and the number of the counting shall be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out. Once the number three, being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thy foe, who, being naughty in My sight, shall snuff it.</p>
			</div>
		</section>
		<div>
			<a href="http://montypython.wikia.com/wiki/Main_Page" class="button">Find out more</a>
		</div>
	</article>
	<!-- SCRIPTS -->
	<script type="text/javascript" src="scripts.js"></script>
</body>
</html>
```

##CSS for second exercise
```css
html {
    font-size: 62.5%;
    font-family: Arial, sans-serif;
}
body {
    font-size: 1.3rem;
    margin: 30px;
    background-color: #fff1c6;
}
section {
    overflow: hidden;
}
h1, h2 {
    color: #009;
}
h1 {
    font-size: 2.8rem;
    border-bottom: 2px dotted #009;
    padding-bottom: 1ex;
}
h2 {
    font-size: 1.8rem;
}
h1 + p {
    color: #009;
    font-weight: bold;
    font-size: 1.8rem;
}
.cast-picture {
    width: 200px;
    float: left;
    margin-right: 3em;
}
.button {
    display: block;
    text-decoration: none;
    width: 200px;
    height: 60px;
    background-color: #c00;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
}
.button:hover {
    background-color: #009;
}
.nav-link {
    display: inline-block;
    text-decoration: none;
    padding: 20px;
    background-color: #595959; /* instead of #686868 */
    font-size: 1.5rem;
    color: #FFE680;
}
.nav-link:hover {
    color: white;
}
:focus {
    outline-color: red;
}
[id^="armaments"] {
    display: none;
}
.expanded {
    display: block;
}
```

## About The Instructor

**Adina Halter** is Product Owner and Chief Technologist for Accessibility at Comcast NBC Universal.

Prior to this she was Front-end Architect for eBusiness.  She wrote the Standards and Best Practices for HTML, CSS, JavaScript, and Accessibility for Comcast.

Adina is a member of the [W3C](http://www.w3.org/) and the [WAI](http://www.w3.org/WAI/) [Education and Outreach Working Group](http://www.w3.org/WAI/EO/)

She [tweets](https://twitter.com/haltersweb) regularly on all things Front-end and Accessibility.
