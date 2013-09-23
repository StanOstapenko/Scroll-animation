Scroll-animation
================

Simple animation of scroll

##Usage:

###Navigation 

```
<nav>
  <a class="scrollLink" data-to="#content1" href="#">To content1</a>
  <a class="scrollLink" data-to="#content2" href="#">To content2</a>
  <a class="scrollLink" data-to="#content3" href="#">To content3</a>
  <a class="scrollLink" data-to="#content4" href="#">To content4</a>
</nav>
```

###Containers 

```
<div id="content1"  class="box">
	<h2>Content 1</h2>
</div>
<div id="content2" class="box">
	<h2>Content 2</h2>
</div>
<div id="content3" class="box">
	<h2>Content 3</h2>
</div>
<div id="content4" class="box">
	<h2>Content 4</h2>
</div>
```

###JS

```
$(document).ready(function(){
    $('.scrollLink').scrollTo({
      speed: 800,
      direction: 'data-to'
    });
  });

```



