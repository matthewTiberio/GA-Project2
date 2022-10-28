# Kith & Kin Potluck Planner

## GA-Project2

### Background

Kith & Kin Potluck Planner is a web application used to help you organize large group events between family and friends. It's often hard for attendees to keep track of who is coming, what people are bringiing, what are the dietary restrictions of all those attending. Kith & Kin organizes all of your family and friends into one database, where users are able to create events, invite people and have their guests volunteer to bring dishes.

### Technologies Used

- NodeJS
  - Express
  - Mongoose
- HTML
- CSS
- MongoDB
- Heroku

### How to use

![Landing Page](/public/images/Landing_page.png)

The app will open on the landing page where you can select one of two options: Events or Kith & Kin

#### Kith & Kin

##### Adding a person

![Kith & Kin - Add Person](/public/images/Add_Person.png)

Clicking on the **+ Add Person** link in the left side panel you can open up a blank template to add a new person to the database.

##### Editing a person

![Kith & Kin - Edit Person](/public/images/Edit_Person.png)

From here you can edit any person's details or delete the person from the database entirely.

#### Events

![Event Index](/public/images/Event_Index.png)

By clicking on the Events link from the Landing Page or in the Header, you are brought to the Event page where all of the events are listed. To create a new event, click the **+ Add Event** link at the top of the page. This will open a blank template for you to fill out.

##### Event Details

![Event Main](/public/images/Event_Main.png)

Clicking on an individual event will open the Event. From this page you can add people to guest list, add items to the menu, view the details of the event, see the dietary restrictions of everyone attending and edit any of this data.

##### Adding to the Guest List

The side panel on the right of the screen has the guest list. People already invited to attend will appear at the top of the panel. Below the list of attendees is the **Additional Guests** section that contains a dropdown of all other people in the database who are not already in attendance. By selecting a new and clicking Add the person is added to the list above.

##### Removing someone from the Guest List

Next to the person's name is an "X" button, this button will remove the person from the guest list. This does not remove them from the Kith & Kin page. It is advised to ensure that the person you wish to remove is not listed as bringing any dishes. If so, remove or reassign the dish from the menu before removing the person from the Guest List.

##### Adding to the Menu

![Menu Add](/public/images/Menu_Add.png)

Clicking on the **+ Add Menu Item** Link at the top of the menu section will open a blank menu selection screen.

##### Editing or Removing a Menu Item

Clicking on the Menu Item will open the details page where any attributes can be changed. Here a user can alse remove the menu item from the event.

##### Editing or Removing an Event

At the bottom of the main event page are buttons to edit or delete the event. The edit button will allow you to edit the event details shown at the top of the page. Deleting an event will delete all menu items attached to it.

### Getting Started

[Click Here](https://kithkin-potluck.herokuapp.com/) to open the app.
[Click Here](https://trello.com/b/xaOqSNlo/kithkin-event-planner) to open my Trello board.

#### Database Schema

![Database Schema](/public/images/Flowcharts.png)

### Next Steps

Future ideas for development:

- Being able to Archive events
- Being able to sort events by Date
- Being able to add URL or Recipe documents
- Adding user accounts
