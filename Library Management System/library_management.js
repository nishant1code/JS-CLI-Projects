// ************************ LIBRARY MANAGEMENT SYSTEM JAVASCRIPT CODE ****************************

// **** GLOBAL ARRAY ****
// bookManager -> Array of objects, objects will have book name, author name, publishing year;
let booksManager = [
    {
        bookName: "Shoe Dog",
        authorName: "Phil Knight",
        publishingYear: "2006"
    },
];

// **** STORE BOOKS FUNCTION ****
// storeBooks() -> function used to store objects that will 
function storeBooks() {
    // addBook -> Ask user to type y to add book otherwise n to not add books and exit adding the book.
    // countBookNumber -> To count the number of books added.
    // exitAddingBook -> Used for while loop condition if it becomes true then it will be exit the loop.
    let addBook = '';
    let countBookNumber = 0;
    let exitAddingBook = false;

    // while -> Loop to run untill the exitAddingBook = true;
    while(!exitAddingBook) {
        addBook = prompt("Enter 'y' to add book otherwise 'n' to not add the book.");
        if(addBook.toLowerCase()==='y'){
        // countBookNumber++ -> Increamenting the countBookNumber for each y.
        countBookNumber++;

        // Pushing the object to the array to store books for with unique index, without overlaping any index.
        booksManager.push({bookName:prompt(`Enter book number ${countBookNumber}`,"Untitled"),
            authorName:prompt(`Who's the author of the book ${countBookNumber}`,"Unknown"),
            publishingYear:prompt(`In which year was book ${countBookNumber} was published`,"0000")
        });
        alert("Successfully added the book");
        }
        else{
            exitAddingBook = true;
        }
    };
}

// **** SEARCH BOOK FUNCTION ****
function searchBook() {
    // searchChoice -> To take user choice for the task to perform.
    // exitSearch -> To make sure when the user want to exit the search.
    let searchChoice = '';
    let exitSearch = false;

    // while -> Loop to run untill exitSearch = true.
    while (!exitSearch) {
        // searchChoice -> Ask the user to type the choice to peform particular task.
        searchChoice = prompt(`Search Options:\n - Enter 1 to search by book title\n - Enter 2 to search by author name\n - Enter 3 to cancel search, see the result and exit`);

        // if(searchChoice === '1') -> To search the book by title.
        if (searchChoice.trim() === '1') {
            let searchByTitle = prompt("Enter book name to search");
            document.write(`<h2>Books searched by title<h2>`)
            for (let i = 0; i < booksManager.length; i++) {
                if (searchByTitle.trim() === booksManager[i].bookName.trim()) {
                    document.write(`<h3>Book ${i+1}</h3><h4>Book Name : ${booksManager[i].bookName}</h4><h4>Author : ${booksManager[i].authorName}</h4><h4>Published in : ${booksManager[i].publishingYear}</h4><br>`);
                }
            }
        }// else if(serchChoice==='2') -> To search the book by title
        else if (searchChoice.trim() === '2') {
            document.write(`<h2>Books searched by author name<h2>`)
            let searchByAuthor = prompt("Enter author name to search");
            for (let i = 0; i < booksManager.length; i++) {
                if (searchByAuthor.trim() === booksManager[i].authorName.trim()) {
                    document.write(`<h3>Book ${i+1}</h3><h4>Book Name : ${booksManager[i].bookName}</h4><h4>Author : ${booksManager[i].authorName}</h4><h4>Published in : ${booksManager[i].publishingYear}</h4><br>`);
                }
            }
        }// else -> Assign the exitSearch = true, directly to exit without any task performed. 
        else{
            exitSearch = true;
        }
    }
}

// **** FUNCTION TO LIST ALL THE BOOKS ****
function allBooksList(){
    // bookList ->  Array to store book's name show the user as list of books.
    let booksList = [];
    // Loop to save the books of title in an array to print all of them after.
    for(let i = 0; i<booksManager.length; i++){
        booksList.push(booksManager[i].bookName);
    }

    document.write("<h3> List of All Books</h3>");
    
    // filter() -> A powerfull tool to remove all the books with Untitled as book name. 
    booksList = booksList.filter(function booksWithTitle(bookName){
        return bookName!=="Untitled";
    });
    booksList.forEach((titleOfBook, index) => document.write(`<h4>Book ${index+1} : ${titleOfBook}</h4>`));
}


// libraryManagementSystem() -> Function for smooth flow of the program.
function libraryManagementSystem(){
    alert("Welcome to my Library Management System!\nEverything is ready for you. Explore and enjoy managing the library!");

    // userChoice -> Asking the user, which task to carry out.
    // seeResult -> Ask the user to perform more task or get the result.
    // exitApplication -> Used as condition for while loop
    let usersChoice;
    let seeResult;
    let exitApplication = false;
    
    while(!exitApplication){
        usersChoice = prompt("User's Instructions\n - Enter 1 to add new books.\n - Enter 2 to search for book.\n - Enter 3 to see all the books.\n - Enter 4 to exit the program.");
        
        switch(usersChoice){
            case '1':
                storeBooks();
                break;
            case '2':
                searchBook();
                seeResult = prompt("The list of books is ready! type 'y' to see list or 'n' to perform more taks before.");
                if(seeResult.toLowerCase().trim()==='y'){
                    exitApplication = true;
                }
                break;
            case '3':
                allBooksList();
                seeResult = prompt("The list of books is ready! type 'y' to see list or 'n' to perform more taks before.");
                if(seeResult.toLowerCase().trim()==='y'){
                    exitApplication = true;
                }
                break;
            default:
                exitApplication = true;
                break;
        }
    }
    document.getElementById("endMessage").innerHTML = "Thank you for your time and effort to use the application";
}

// **** CALLING THE libraryManagementSystem() FUNCTION TO RUN THE APPLICATION ****
libraryManagementSystem();

// ************************************* END ************************************