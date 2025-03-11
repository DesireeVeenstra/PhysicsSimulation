import Matter from "matter-js";

const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  engine.world.gravity.y = 0.2;

  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

    if (objALabel === "Box" && objBLabel === "BoundaryBottom") {
      Matter.Body.setVelocity(entities.Square.body, { x: 1, y: 0 });
    } else if (objALabel === "Box" && objBLabel === "BoundaryRight") {
      Matter.Body.setVelocity(entities.Square.body, { x: 0, y: -5 });
    } else if (objALabel === "Box" && objBLabel === "BoundaryTop") {
      Matter.Body.setVelocity(entities.Square.body, { x: -5, y: 0 });
    }
  });

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;
