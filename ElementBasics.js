describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {

	browser.manage().window().maximize();
	
	browser.get('https://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('4');
	element(by.model('second')).sendKeys('5');
	
	element(by.id('gobutton')).click();

    expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe("9");

	element(by.css('h2[class="ng-binding"]')).getText().then(function(text)
	{
      console.log("Sum of numbers is: "+text);
	})

  });


});
    

