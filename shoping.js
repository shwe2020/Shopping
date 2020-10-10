const { assert } = require("chai");

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`http://automationpractice.com/index.php`);
        browser.$("//div[@class='header_user_info']").click();

        $('#email').setValue('shwetha.friends@gmail.com');
        $('#passwd').setValue('Tention123');
        $('#SubmitLogin').click();
        browser.pause(3000);

       //searching products
        $('#search_query_top').setValue('summer dress');
        $('button[type="submit"]').click(); 
        browser.$("//div[@class='left-block'][1]//img[1]").click();
        
        //add to cart
        browser.$("//p[@id='add_to_cart']").click();
        browser.pause(3000)
        it('accept alert',function(){
          driver.switchTo().alert().getAlertText();
          const alertText = browser.getAlertText()
          console.log(alertText)
          assert.equal('Product successfully added to your shopping cart', alertText)
            //driver.switchTo().alert().accept();
          browser.$("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span");
           //browser.acceptAlert()
          // browser.dismissAlert()
           
            browser.pause(3000)
       });
       

      
            
        
       // expect($('#sfHoverForce')).toBeExisting();
       // expect($('#sfHoverForce')).toHaveTextContaining(           'Women');



    });
});



