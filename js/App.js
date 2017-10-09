var lang = new Localization();
lang.initialize('locale/config.json', function(){
    //Initialized      
    lang.setLocale('no-nb'); //e.g. "en-us" 

    lang.loadModule('login.json', function(){
        //Loaded 

        //Fetch some data over ajax	 
        $.get('./login.html', function(data){

            //Convert content to language 
            data = lang.processContent(data, [
                'login_title',
                'login_email_placeholder',
                'login_password_placeholder',
                'login_button_text',
                'login_not_a_member_text',
                'login_sign_up'
            ]);

            $('#pre-login').html(data);
            login.bindings();
        });

        //end lang.loadModule
    });
    //end lang.initialize 
});