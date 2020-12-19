describe('Protractor Frames steps',function() {  


it('Open NonAngular js website Frames',function() {

//rahulonlinetutor@gmail.com

browser.waitForAngularEnabled(false);

browser.manage().window().maximize();

browser.get("http://qaclickacademy.com/practice.php");
browser.switchTo().frame('courses-iframe');
element(by.css("a[href*='sign_in']")).getText().then(function(text)
{

console.log(text);
})


})

})