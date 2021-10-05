# ÑAMI TOWN

## Índice

* [Ñami Town](#ñamitown)
* [Interface](#interface)
* [Prototypes](#prototypes)
* [User Stories](#user-stories)
* [Usability Test](#usability-test)
* [Link](#link)

## Ñami Town 
Ñami Town is a web app system for restaurant table management. 
Waiters can take an order and send it to the kitchen, and then wait for when the order is ready to be served.
Meanwhile, the kitchen workers can retrieve those orders and update them according to their status: active or done.
It also includes an administrator interface for registering new users.

## Interface
The app is designed for tablets, and is responsive for vertical or horizontal use. 
### Waiter

![waiter](https://user-images.githubusercontent.com/83680798/129109471-a55be354-38f2-4e70-aafa-7765ed25c6b6.gif)

### Kitchen
<details>
<summary> Click to see </summary>


</details>

### Admin

## Prototypes
Pastel colors and cute icons were used for the design.

### 1. Low Fidelity Prototype:
<details>

</details>

### 2. High Fidelity Prototype:



## User Stories
### 1. As first requirement, only employees should be able to use the app.
````
ACCEPTANCE CRITERIA:
- Login interface.
- Users should be sent to menu, kitchen or admin interface according to role.
- Should be responsive for both vertical and horizontal use.

DEFINITION OF DONE:
- Login done.
- Route for home and login.
- Logout option implemented.
- Interface design completed.

````
### 2. Waiter should take orders and send them to kitchen.
````
ACCEPTANCE CRITERIA:
- Menu interface.
- Food menu should be displayed as: recommendations, breakfast, lunch and drinks.
- Waiter can add items to the order, get a total and send them to kitchen.
- Should be responsive for both vertical and horizontal use.

DEFINITION OF DONE:
- Menu done.
- Menu route implemented.
- Json menu created and accesible through fetch.
- Filters for recommendations, breakfast, lunch and drinks menu.
- Order is sent to "orders" firestore collection.
- Interface design completed.

````
### 3. Kitchen should retrieve the waiter's order and be able to interact with it.
````
ACCEPTANCE CRITERIA:
- Kitchen interface.
- Kitchen retrieves menu order from waiter.
- Cooks can update the orders and send them back to waiters.
- Should be responsive for both vertical and horizontal use.

DEFINITION OF DONE:
- Kitchen done.
- Kitchen route implemented.
- Data retrieved from firestore collection.
- The order can be updated from new to active, then done in firestore collection and interface, and then is sent to the waiter.
- Filters for new, active and done orders.
- Interface design completed.

````
### 4. Waiter should be notified when the order is ready to be served.
````
ACCEPTANCE CRITERIA:
- Serve interface.
- Waiter can retrieve kitchen ready orders.
- Waiters can update the orders after being served and mark them as delivered.
- Should be responsive for both vertical and horizontal use.

DEFINITION OF DONE:
- Serve done.
- Serve route implemented.
- Data retrieved from firestore collection.
- The order can be updated from deliver to delivered.
- Filters for new and done orders.
- Interface design completed.
````
### 5. There should be an admin role for creating users.
````
ACCEPTANCE CRITERIA:
- Admin interface.
- Admin can register new users and set them roles.
- Admin can see every other interface.
- Should be responsive for both vertical and horizontal use.

DEFINITION OF DONE:
- Admin done.
- Admin protected route implemented.
- New users firestore collection.
- Admin adds users according to roles.
- Admin can navigate through all the other interfaces.
- Interface design completed.
````
## Usability Tests


|<sub> USER STORY	|<sub> FUNCTIONALITY 	|<sub>DESIGN 	|<sub>USER EXPERIENCE	</sub>|
|---	|---	|---	|--- |---	|
|<sub>U.S. 1	| <sub>  It works very well, love that I logged in and then I go directly to menu. But I wish I didn't had to use my email and would be able to use just my name. Lang button doesn't seem to be working.  	|  <sub>Amazingly cute design. Love the cat logo.	|  <sub>Intuitive app. I love the use of buttons for adding items to the order and I really like the alert message if I didn't enter an item or the table number. Table doesn't visually clean after sending the order.	|
|   <sub>U.S. 2  <sub> Kitchen is simple, comfortable and direct. Love that I can filter through order status.	|   <sub> Love the colors and the cute interface. Though maybe the tickets could be a little smaller. | <sub>Is very clear what you have to be do when you get into the app. I appreciate the change of banner color and button text when the order gets updated.
|<sub>H.U. 3	|  <sub>Intuitive. There is a problem with the scroll when there are too many orders.|   <sub> Nice colors. Minimalistic but cute. |   <sub>	Active and done states are perfect. Would've love a visual notification when the order is ready|
|<sub>H.U. 4	|  <sub> All the buttons are working and I can create users without problems. |   <sub> Header buttons are cute. Radio button is a little small. But overall is great. |   <sub>	Nice experience. Though I would suggest some sort of alert message when a user has been created|

Some of these inputs where taken into account and added to the app, and some other will be implemented in the future.


## Link
  

