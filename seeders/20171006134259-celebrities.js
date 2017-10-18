"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "People",
      [
        {
          name: "Mr T",
          birth_date: "1952-05-21",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Morgan Freeman",
          birth_date: "1937-06-01",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Angelina Jolie",
          birth_date: "1975-06-04",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kanye West",
          birth_date: "1977-06-08",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kate Upton",
          birth_date: "1992-06-10",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Donald Trump",
          birth_date: "1946-06-14",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lana Del Ray",
          birth_date: "1985-06-21",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Usain Bolt",
          birth_date: "1986-08-21",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gwen Stefani",
          birth_date: "1969-10-03",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kate Winslet",
          birth_date: "1975-10-05",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gordon Ramsay",
          birth_date: "1966-11-08",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Whoopi Goldberg",
          birth_date: "1955-11-13",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rita Ora",
          birth_date: "1990-11-26",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tyra Banks",
          birth_date: "1973-12-04",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nicki Minaj",
          birth_date: "1982-12-08",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mel Gibson",
          birth_date: "1956-01-03",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stephen Hawking",
          birth_date: "1942-01-08",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Justin Timberlake",
          birth_date: "1981-01-31",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Simon Pegg",
          birth_date: "1970-02-14",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chuck Norris",
          birth_date: "1940-03-10",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  }
};
