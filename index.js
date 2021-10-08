const express = require("express");

const app = express();
const { menu } = require("./data");

app
  .get("/", (req, res) => {
    const titleArray = [];
    const categoryArray = [];
    const newMenu = menu.map((item) => {
      const { title, category } = item;
      titleArray.push(title);
      // categoryArray.push(category);
      if(!categoryArray.includes(category)) {
        categoryArray.push(category)
      }
    });
    titleArray.sort();
    categoryArray.sort();
    if (newMenu.length < 1) {
      res.json({ results: [], status: 404 });
    }
    res.json({ results: [titleArray, categoryArray], status: 200 });
  })

  .get("/api/v1/menu/:menuItem", (req, res) => {
    // id will be the item number aka id
    const { menuItem } = req.params;
    const singleMenuItem = menu.find((item) => item.id == menuItem);
    // console.log(singleMenuItem);
    if (!singleMenuItem) {
      return res
        .status(404)
        .json({ results: [], status: 404, msg: "no matching item found" });
    }
    res.json({
      results: [singleMenuItem],
      status: 200,
    });
  })

  .get("/api/v1/menu", (req, res) => {
    const { category, budget } = req.query;

    let sortedMenu = [...menu];
    if (category) {
      sortedMenu = sortedMenu.filter((item) => {
        return item.category.includes(category);
      });
    }
    if (budget) {
      // sortedMenu = sortedMenu.slice(0, Number(budget));
      sortedMenu = sortedMenu.filter((item) => {
        if (item.price < budget) {
          return item;
        }
      });
    }

    if (sortedMenu.length < 1) {
      return res.json({
        results: [],
        status: 404,
        msg: "No menu item matched the search parameters",
      });
    }
    res.json({ results: sortedMenu, status: 200 });
  })

  .listen(3000, () => {
    console.log("server listing at port 3000");
  });
