# API_Pratice

### **Documentation**

#### Items
 - http://localhost:3000/api/v1/menu/:menuItem

 ![This is an image](./assests/images/singleItem.png)


### Search
1. *category*
    - Parameter : category=
    - Description: filter by menu type (i.e lunch)
    - type : *string*
    - example : http://localhost:3000/api/v1/menu?category=lunch
    ![This is an image showing the category query in action](./assests/images/search_category.png)
2. *budget*
    - Parameter : budget=
    - Description : filter by price
    - type : *number*
    - example : http://localhost:3000/api/v1/menu?budget=10
    ![This is an image showing the budget query in action](./assests/images/search_budget.png)


