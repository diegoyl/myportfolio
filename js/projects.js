function changeCategory(new_category){
    const categs = document.getElementsByClassName("categ");
    for (let j = 0; j < categs.length; j++) {
        categs.item(j).classList.remove("category-active");
        if (categs.item(j).id == new_category) {
            categs.item(j).classList.add("category-active");
        }
    }


    const projects = document.getElementsByClassName("project-box");
    for (let i = 0; i < projects.length; i++) {
        projects.item(i).style.opacity = "0";
    }

    setTimeout(function() {     
        if (new_category == "c-all"){
            for (let i = 0; i < projects.length; i++) {
                projects.item(i).classList.remove("hideBox");
            }
        }
        else {
            for (let i = 0; i < projects.length; i++) {
                projects.item(i).classList.add("hideBox");
                if (projects.item(i).classList.contains(new_category)) {
                    projects.item(i).classList.remove("hideBox");
                }
            }
        }

        for (let i = 0; i < projects.length; i++) {
            projects.item(i).style.opacity = "1";
        }
    }, 700);

    


}