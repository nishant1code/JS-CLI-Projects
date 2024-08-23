// ************* CONTACT MANAGER ************

// **** Global Array ****
// myContacts - Array which will store objects, objects will have properties name, contact, email. 
let myContacts = [
    {
        name: "Aarav",
        number: "+91 98765 43210",
        email: "aarav@example.com"
    },
    {
        name: "Isha",
        number: "+91 87654 32109",
        email: "isha@example.com"
    },
    {
        name: "Ravi",
        number: "+91 76543 21098",
        email: "ravi@example.com"
    },
    {
        name: "Ananya",
        number: "+91 65432 10987",
        email: "ananya@example.com"
    },
    {
        name: "Arjun",
        number: "+91 54321 09876",
        email: "arjun@example.com"
    }
];

// **** Function - Add Contacts ****
// newContact() - Function to add new contacts to the array myContacts, the elements will be objects which we will add.
function newContact() {
    // userChoice - Variable which will have propmt method to ask for user choise to add contact or not.
    let userChoice = '';

    // do-While Loop to add contact till the user enters the given option to exit.
    // Reason to use do-while : The program will run atleast once and ask the user's choice, if user want to add contact then we will add otherwise the user choose to exit we will simply exit the application according to the contions given.
    do {
        userChoice = prompt("Enter ' + '  to add contact otherwise enter ' - ' to not enter contact and exit.");
        if (userChoice.trim() === '+') {
            myContacts.push({
                name: prompt("Full Name"),
                number: prompt("Contact Number"),
                email: prompt("Email Address")
            });
            alert("Contact Saved!");
        }
        else if (userChoice.trim() !== '-') {
            alert("Invalid Option!");
        }
    } while (userChoice.trim() !== '-');
}

// **** Function - Search Contact Position ****
function searchContact(contactName) {
    let location;
    for (let i = 0; i < myContacts.length; i++) {
        if (myContacts[i]["name"].trim().toLowerCase() == contactName.trim().toLowerCase()) {
            location = i;
            break;
        }
    }
    return location;
}

// **** Function - Update Contacts ****
function editContact() {
    let userChoice = '';
    do {
        userChoice = prompt("Enter 'y' to edit contact 'n' to not exit.")
        if (userChoice.trim().toLowerCase() === 'y') {
            let searchName = prompt("Enter name to search contact");
            let position = searchContact(searchName);
            if (typeof (position) === 'number') {
                let whatToEdit = prompt("'1' to edit name\n'2' to edit contact number\n'3' to edit email")
                switch (whatToEdit) {
                    case '1':
                        let newName = prompt(`Current Name : ${myContacts[position]["name"]}\nType new name to edit, otherwise ' - ' to exit`);
                        if (newName != '-') {
                            myContacts[position]["name"] = newName;
                            alert("Name changed");
                        }
                        break;
                    case '2':
                        let newNumber = prompt(`Current Number : ${myContacts[position]["number"]}\nType new number to edit, otherwise ' - ' to exit`);
                        if (newNumber != '-') {
                            myContacts[position]["number"] = newNumber;
                            alert("Contact Number changed");
                        }
                        break;
                    case '3':
                        let newEmail = prompt(`Current Email : ${myContacts[position]["email"]}\nType new email to edit, otherwise ' - ' to exit`);
                        if (newEmail != '-') {
                            myContacts[position]["email"] = newEmail;
                            alert("Email changed");
                        }
                        break;
                    default:
                        alert("No such option available");
                        break;
                }
            }
            else {
                alert("Give full name, or No such contact available");
            }
        }
        else if (userChoice.trim().toLowerCase() !== 'n') {
            alert("Choose a correct option.");
        }
    } while (userChoice !== 'n');
}

// **** Function - Delete Contacts ****
function removeContact() {
    let userChoice = '';

    do {
        userChoice = prompt("Type ' y ' to remove contact otherwise 'n' to not remove contact.");
        if (userChoice.trim().toLowerCase() === 'y') {
            let searchName = prompt("Enter name to search and remove contact.");
            let contactPosition = searchContact(searchName);
            let confirm = prompt(`Contact Details :\nName : ${myContacts[contactPosition]["name"]}\nNumber : ${myContacts[contactPosition]["number"]}\nEmail : ${myContacts[contactPosition]["email"]}.\nType ' y ' to confirm removing contact ' n ' to not remove contact.`);
            if (confirm.trim().toLowerCase() === 'y') {
                myContacts.splice(contactPosition, 1);
                alert("Removed Contact");
            }
            else {
                alert("Do not want to remove. Give full name if this was not the contact.");
            }
        }
        else if (userChoice !== 'n') {
            alert("Choose correct option.");
        }
    } while (userChoice !== 'n');
}

// **** Function - Display Contacts ****
function displayContacts(){
    document.write("<h2> My Contacts </h2>")
    myContacts.forEach((element, index) =>{
        document.write(`<h3>Contact ${index+1}:`);
        document.write(`<h5>${element["name"]}</h5><h5>${element["number"]}</h5><h5>${element["email"]}</h5>`);
    });
}

// **** Function - Contact Management ****
function contactManagement(){
    let userChoice = '';
    let exitApplication = false;

    alert("Welcome to my contact manager simple project.");
    
    while(!exitApplication){
        userChoice = prompt("Enter '1' to add new contact\nEnter '2' to edit contact\nEnter '3' to remove contact\nEnter '4' to display all contact\nEnter '5' to exit application");
        switch(userChoice){
            case '1':
                newContact();
                break;
            case '2':
                editContact();
                break;
            case '3':
                removeContact();
                break;
            case '4':
                displayContacts();
                document.write("Thank you for your time and efforts to test the application.");
                exitApplication = true;
                break;
            case '5':
                document.write("Thank you for your time and efforts to test the application.");
                exitApplication = true;
                break;
            default:
                alert("Choose correct option");
                break;
        }
    }
}

contactManagement();