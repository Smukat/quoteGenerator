/**
 * Created by jesica on 7/17/2017.
 */


var quotes = ["Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning.", "Lisp isn't a language, it's a building material.", "Walking on water and developing software from a specification are easy if both are frozen.", "They don't make bugs like Bunny anymore.", "A programming language is low level when its programs require attention to the irrelevant.", "A C program is like a fast dance on a newly waxed dance floor by people carrying razors.", "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.", "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.", "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.", "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN’T be like.", "Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.", "The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.", "In the one and only true way. The object-oriented version of 'Spaghetti code' is, of course, 'Lasagna code'. (Too many layers).", "FORTRAN is not a flower but a weed — it is hardy, occasionally blooms, and grows in every computer.", "For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.", "In My Egotistical Opinion, most people's C programs should be indented six feet downward and covered with dirt.", "When someone says: 'I want a programming language in which I need only say what I wish done', give him a lollipop.", "The evolution of languages: FORTRAN is a non-typed language. C is a weakly typed language. Ada is a strongly typed language. C++ is a strongly hyped language.", "Good design adds value faster than it adds cost.", "Python's a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck.", "Talk is cheap. Show me the code.", "Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "C is quirky, flawed, and an enormous success.", "In theory, theory and practice are the same. In practice, they’re not.", "You can’t have great software without a great team, and most software teams behave like dysfunctional families.", "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.", "Programming is like kicking yourself in the face, sooner or later your nose will bleed.", "Perl – The only language that looks the same before and after RSA encryption.", "It is easier to port a shell than a shell script.", "I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind.", "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry", "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.", "If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’", "Beware of bugs in the above code; I have only proved it correct, not tried it.", "Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success.", "I don't care if it works on your machine! We are not shipping your machine!", "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.", "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.", "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.", "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", "To iterate is human, to recurse divine.", "On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.", "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies."];
var authors = ["Rick Cook", "Alan Kay", "Edward V Berard", "Olav Mjelde", "Alan J. Perlis", "Waldi Ravens", "Bjarne Stroustrup", "Eric S. Raymond", "Mosher’s Law of Software Engineering", "Oktal", "pixadel", "Bill Clinton", "E.W. Dijkstra", "Roberto Waltman", "Alan J. Perlis", "Bill Bryson", "Blair P. Houghton", "Alan J. Perlis", "Ron Sercely", "Thomas C. Gale", "Cory Dodt", "Linus Torvalds", "Antoine de Saint-Exupéry", "Dennis M. Ritchie", "Yoggi Berra", "Jim McCarthy", "Jon Ribbens", "Kyle Woodbury", "Keith Bostic", "Larry Wall", "Alan Kay", "Ted Nelson", "Randall E. Stross", "Mark Minasi", "Donald E. Knuth", "Tom DeMarco", "Vidiu Platon", "Christopher Thompson", "Bill Gates", "Brian W. Kernighan", "Donald Knuth", "George Carrette", "Larry Wall", "Alan Kay", "Seymour Cray", "L. Peter Deutsch", "Charles Babbage", "Linus Torvalds", "Martin Golding", "C.A.R. Hoare"];
var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6','#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D','#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


function random () {

    return Math.floor((Math.random() * (quotes.length - 1)));
}

function getQuote() {

    var num = random();

    var quot = quotes[num];
    var author = "- " + authors[num];

    $("#quoteText").html(quot);
    $("#quoteAuthor").html(author);
    $("body").css({"background-color": colors[num]});


    // TWITTER

    var tweet = quot + author;

    if (tweet.length > 140) {

        var quotLength = 140 - (author.length + 3);

        quot = quot.substr(0, quotLength);
        tweet = quot + "..." + author;
    }


    $("#twit")
        .css({"color": colors[num]})
        .attr("href", "https://twitter.com/intent/tweet?text=" + encodeURI(tweet));


}

$(document).ready(function () {

    $().button('toggle'); //Button works
    getQuote();


    $(".btn").click(getQuote);

});