
const hamiltonData = {
  nodes: [
    {
      id: "a",
      style: { fill: "#5B8FF9", stroke: null }
    },
    {
      id: "b",
      style: { fill: "#5B8FF9", stroke: null }
    },
    {
      id: "c",
      style: { fill: "#5B8FF9", stroke: null }
    },
    {
      id: "d",
      style: { fill: "#ff0000", stroke: null },
      type: "background-animate",
      color: "#40a9ff",
      size: 20,
      labelCfg: {
        position: "left",
        offset: 10
      }
    },
    {
      id: "e",
      style: { fill: "#ff0000", stroke: null },
      type: "background-animate",
      color: "#40a9ff",
      size: 20,
      labelCfg: {
        position: "left",
        offset: 10
      }
    },
    {
      id: "f",
      style: { fill: "#ff0000", stroke: null },
      type: "background-animate",
      color: "#40a9ff",
      size: 20,
      labelCfg: {
        position: "left",
        offset: 10
      }
    }
  ],
  edges: [
    {
      id: "a2b",
      source: "a",
      target: "b"
    },
    {
      id: "a2c",
      source: "a",
      target: "c"
    },
    {
      id: "a2d",
      source: "a",
      target: "d"
    },
    {
      id: "c2e",
      source: "c",
      target: "e"
    },
    {
      id: "c2f",
      source: "c",
      target: "f"
    }
  ]
};

const hamiltonContainer = document.getElementById("hamiltonGraphContainer");

const graphHamilton = new G6.Graph({
  container: "hamiltonGraphContainer",
  width: 460,
  height: 460,
  layout: {
    type: "dagre",
    preventOverlap: true,
    nodeSize: 20
  }
});

graphHamilton.removeBehaviors(['zoom-canvas', 'drag-canvas'], ['default', 'select'])

graphHamilton.data(hamiltonData);
graphHamilton.render();

G6.registerNode(
  "background-animate",
  {
    afterDraw(cfg, group) {
      const r = cfg.size / 2;
      const back1 = group.addShape("circle", {
        zIndex: -3,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.color,
          opacity: 0.6
        },
        name: "back1-shape"
      });
      const back2 = group.addShape("circle", {
        zIndex: -2,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.color,
          opacity: 0.6
        },
        name: "back2-shape"
      });
      const back3 = group.addShape("circle", {
        zIndex: -1,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: cfg.color,
          opacity: 0.6
        },
        name: "back3-shape"
      });
      group.sort(); // Sort according to the zIndex
      back1.animate(
        {
          // Magnifying and disappearing
          r: r + 10,
          opacity: 0.1
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 0,
          repeat: true // repeat
        }
      ); // no delay
      back2.animate(
        {
          // Magnifying and disappearing
          r: r + 10,
          opacity: 0.1
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 1000,
          repeat: true // repeat
        }
      ); // 1s delay
      back3.animate(
        {
          // Magnifying and disappearing
          r: r + 10,
          opacity: 0.1
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 2000,
          repeat: true // repeat
        }
      ); // 3s delay
    }
  },
  "circle"
);
