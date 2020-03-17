exports.seed = async function(knex) {
  const testData = [
    { vin: "JHG12512452", make: "Nissan", model: "Z32", mileage: 254125 },
    {
      vin: "JIH21252321",
      make: "Honda",
      model: "Civic type R",
      mileage: 15232
    },
    { vin: "JKL25145242", make: "Toyota", model: "Supra", mileage: 54122 }
  ];

  // Deletes ALL existing entries
  await knex("cars").truncate();

  // Inserts seed entries
  return knex("cars").insert(testData);
};
