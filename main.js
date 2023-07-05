const classesPages = ["first", "second", "third"];

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

const changePage = async (event) => {
    const main = document.getElementsByClassName("main")[0];
    const pageClicked = event.target;
    const classOfPage = event.target.classList[0];

    switch (classOfPage) {
        case classesPages[0]:
            break;
        
        case classesPages[1]:
            for (let i = 0; i <= classesPages.length - 1; i++) {
                if (classesPages[i] != classOfPage) {
                    let otherPage = document.getElementsByClassName(classesPages[i])[0];
                    otherPage.classList.remove("page");
                    otherPage.classList.remove("hidden");
                    otherPage.classList.remove(classesPages[i]);
                    otherPage.classList.add( 
                        classesPages[i === 0 ? classesPages.length - 1 : i - 1],
                        "page", "hidden"
                    );
                    if (i === 0) {
                        main.appendChild(otherPage);
                    }
                }else{
                    pageClicked.classList.remove("page");
                    pageClicked.classList.remove("hidden");
                    pageClicked.classList.remove(classesPages[1]);
                    pageClicked.classList.add("first", "page");
                }
            }
            break;

        case classesPages[2]:
            
            break;
    
        default:
            break;
    }
}