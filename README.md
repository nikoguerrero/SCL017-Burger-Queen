# ÑAMI TOWN

## Index

* [Ñami Town](#ñami-town)
* [Interface](#interface)
* [Prototypes](#prototypes)
* [User Stories](#user-stories)
* [Usability Test](#usability-tests)
* [Link](#link)

## Ñami Town 
Ñami Town is a web app system for restaurant table management. 
Waiters can take an order and send it to the kitchen, and then wait for when the order is ready to be served.
Meanwhile, the kitchen workers can retrieve those orders and update them according to their status: active or done.
It also includes an administrator interface for registering new users.

## Interface
The app is designed for tablets, and is responsive for portrait and landscape orientation. 

### Login/ Waiter Menu/ Admin
![LoginVertical](https://user-images.githubusercontent.com/83680798/135952719-41dc69c2-986b-4244-a14e-bad459d5aa38.png)
![MenuVertical](https://user-images.githubusercontent.com/83680798/135952672-c0f2a8bc-b1f3-47de-88e8-4fa8022912b9.png)
![AdminVertical](https://user-images.githubusercontent.com/83680798/135952679-c29189f9-9b04-4be5-aa0b-26addb5b70b6.png)


### Kitchen
![CocinaHorizontal](https://user-images.githubusercontent.com/83680798/135952860-2c8624c4-6819-4f24-ac03-22d1b1b75fc1.png)



## Prototypes
Pastel colors and cute icons were used for the design.

### 1. Low Fidelity Prototype:
<details>
  <summary> Click to see </summary>
  
![img016](https://user-images.githubusercontent.com/83680798/135955033-36f98fd4-0c30-481f-a908-d2ad98e6753d.jpg)
![img019](https://user-images.githubusercontent.com/83680798/135955036-2f31b21e-6e7a-462e-91cf-d30377ec0fea.jpg)


</details>

### 2. High Fidelity Prototype:
<details>
  <summary> Click to see </summary>
  
<br>
  
**PORTRAIT**
  
![Login Vertical](https://user-images.githubusercontent.com/83680798/136032154-0935d3b1-9fec-44d6-a9db-8423eceafa5f.png)
![Mesero 1 Vertical](https://user-images.githubusercontent.com/83680798/136032150-f41f02ee-e1da-42c5-8510-de141e322021.png)
![Mesero 2 Vertical](https://user-images.githubusercontent.com/83680798/136032159-0cb81085-fbad-4179-956e-8a45cab7ec86.png)
![Cocina Vertical](https://user-images.githubusercontent.com/83680798/136032157-431c189e-6c41-4dab-8e0c-286b4705a5e7.png)


**LANDSCAPE**
  
![Login Horizontal](https://user-images.githubusercontent.com/83680798/135953318-c649b539-840c-4e27-b7a2-7882bba15d01.png)
![Mesero 1 Horizontal](https://user-images.githubusercontent.com/83680798/135953320-c628ed13-b3f4-4733-b44c-b9eeaa590c02.png)
![Mesero 2 Horizontal](https://user-images.githubusercontent.com/83680798/135953325-df3d665b-1a42-4502-9f80-832948626625.png)
![Cocina Horizontal](https://user-images.githubusercontent.com/83680798/135953392-adfddb32-7d12-4134-aabf-54e18ea63e68.png)
  
</details>


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
- Waiter can add items to the order, get a total price and send them to kitchen.
- Should be responsive for both portrait and landscape orientation.

DEFINITION OF DONE:
- Menu done.
- Menu route implemented.
- Json menu created and accessible through fetch.
- Filters for recommendations, breakfast, lunch and drinks menu.
- Order is sent to "orders" firestore collection.
- Interface design completed.

````
### 3. Kitchen should retrieve the waiter's order and be able to interact with it.
````
ACCEPTANCE CRITERIA:
- Kitchen interface.
- Kitchen retrieves menu order from waiter.
- Cooks can update the orders and send them back to the waiters.
- Should be responsive for both portrait and landscape orientation.

DEFINITION OF DONE:
- Kitchen done.
- Kitchen route implemented.
- Data retrieved from firestore collection.
- The order can be updated from new to active and done (in both the firestore collection and the interface), and then be sent to the waiter.
- Filters for new, active and done orders.
- Interface design completed.

````
### 4. Waiter should be notified when the order is ready to be served.
````
ACCEPTANCE CRITERIA:
- Serve interface.
- Waiter can retrieve kitchen ready orders.
- Waiters can update the orders after being served and mark them as delivered.
- Should be responsive for both portrait and landscape orientation.

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
- Admin can register new users and assign roles.
- Admin can see every other interface.
- Should be responsive for both portrait and landscape orientation.

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
|---	|---	|---	|--- |
|<sub>U.S. 1	| <sub>  It works very well, love that I logged in and then I go directly to the menu. But I wish I didn't have to use my email and would be able to use just my name. Lang button doesn't seem to be working.  	|  <sub>Amazingly cute design. Love the cat logo.	|  <sub>Intuitive app. I value the use of buttons for adding items to the order and I really like the alert message that I get if I forget to enter any item or the table number. Table info doesn't visually clean after sending the order.	|
|   <sub>U.S. 2 | <sub> Kitchen is simple, comfortable and direct. Is great that I can filter through order status.	|   <sub> Love the colors and the cute interface. Though maybe the tickets could be a little smaller. | <sub>Is very clear what you have to do when you get into the app. I appreciate the change of banner color and button text when the order gets updated.
|<sub>U.S. 3	|  <sub>Intuitive. There is a problem with the scroll when there are too many orders.|   <sub> Nice colors. Minimalistic but cute. |   <sub>	Active and done states are perfect. Would've love a visual notification when the order is ready to be served|
|<sub>U.S. 4	|  <sub> All the buttons are working and I can create users without problems. |   <sub> Header buttons are cute. Radio button is a little small. But overall is great. |   <sub>	Nice experience. Though I would suggest some sort of alert message when a user has been created.|

<br>
Some of these inputs where taken into account and added to the app, and others will be implemented in the future.


## Link
  

