

    //------Button Selection------//

    // Button container ID: "#page-section-6071fa1df13bcd06e30588a9"

    // "All" button
    let all = $(".content a[href$='/external-resource-library']")

    //"Child" button
        // please insert the **last word** of the button tag or categort inside a[href$='___']
    let child = $("#page-section-6071fa1df13bcd06e30588a9 a[href$='Development']")

    //"Housing" button
        // please insert the **last word** of the button tag or categort inside a[href$='___']
    let house = $("#page-section-6071fa1df13bcd06e30588a9 a[href$='Transportation']")

    //"wellbeing" button
        // please insert the **last word** of the button tag or categort inside a[href$='___']
    let wellbeing = $("#page-section-6071fa1df13bcd06e30588a9 a[href$='Wellbeing']")

    //"City" button
        // please insert the **last word** of the button tag or categort inside a[href$='___']
    let city = $("#page-section-6071fa1df13bcd06e30588a9 a[href$='Services']")

    //"Career" button
        // please insert the **last word** of the button tag or categort inside a[href$='___']
    let career = $("#page-section-6071fa1df13bcd06e30588a9 a[href$='Career']")

    //"community" button
        // please insert the **last word** of the button tag or categort inside a[href$='___']
    let community = $("#page-section-6071fa1df13bcd06e30588a9 a[href$='Engagement']")
 

    //------Blog Category Selection------//

    //Detect the categoy of the blog item (resource blog post) 
    let blogCat = $('.blog-categories-list a');
        // finding the "search" value of  each  href of that blog post
        // it usually appears like "/?tag=Childcare%20and%20Development", depending on the tag or category
    let searchValue = blogCat.prevObject[0].location.search;



    $(document).ready(function(){
        if (searchValue=="") {
            //if the searchValye == an empty string, that means the All button should be active and we are not filtering anything
            all.addClass("button_active");
            // adding the button_active class to all button

        }else if (searchValue.includes("Child")) {
            // if the searchValye includes "Child", that means we are filtering resrouces for Childcare and Development
            child.addClass("button_active");
            // adding the button_active class to child button

        }else if (searchValue.includes("Housing")) {
            // if the searchValye includes "Housing", that means we are filtering resrouces for Housng and Transportation
            house.addClass("button_active");
            // adding the button_active class to housing button

        }else if (searchValue.includes("Wellbeing")) {
            // if the searchValye includes "Wellbeing", that means we are filtering resrouces for Wellbeing
            wellbeing.addClass("button_active");
            // adding the button_active class to wellbeing button 

        }else if (searchValue.includes("City")) {
            // if the searchValye includes "City", that means we are filtering resrouces for City Services
            city.addClass("button_active");
            // adding the button_active class to city button 

        }else if (searchValue.includes("Career")) {
            // if the searchValye includes "Career", that means we are filtering resrouces for Career
            career.addClass("button_active");
            // adding the button_active class to career button 

        }else if (searchValue.includes("Community")) {
            // if the searchValye includes "Community", that means we are filtering resrouces for Community Engagement
            community.addClass("button_active");
            // adding the button_active class to community button 


        }
    })

