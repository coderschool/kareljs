var levels = {
  currentLevel: 0,
  levels: [{
    code: "",
    name: "Morning Newspaper",
    worlds: [
      {
        walls: "0,0,0,0,0,0,0\n" +
          "0,0,9,8,12,0,0\n" +
          "0,0,1,0,0,0,0\n" +
          "0,0,3,2,6,0,0\n" +
          "0,0,0,0,0,0,0",
        beepers: [{ x: 5, y: 2, count: 1 }],
        solution: [{ x : 2, y: 1, count: 1 }],
        karel: { x: 2, y: 1, direction: 0, isSuper: false, beeperCount: 0 }
      },
    ],
  },
  {
    code: "",
    name: "Checkerboard",
    worlds: [
      {
        walls: "0,0,0,0,0\n" +
               "0,0,0,0,0\n" +
               "0,0,0,0,0",
        beepers: [],
        solution: [
          { x: 1, y: 0, count: 1 },
          { x: 3, y: 0, count: 1 },
          { x: 0, y: 1, count: 1 },
          { x: 2, y: 1, count: 1 },
          { x: 4, y: 1, count: 1 },
          { x: 1, y: 2, count: 1 },
          { x: 3, y: 2, count: 1 },
        ],
        karel: { x: 0, y: 0, direction: 0, isSuper: false }
    }],
  },
  {
    code: "",
    name: "Pick Up the Beepers",
    worlds: [
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [{x: 2, y:0, count: 2}, { x: 3, y: 0, count: 3 }],
        solution: [],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [{x:1, y:0, count: 4}, { x: 3, y: 0, count: 4 }, {x:4, y: 0, count: 1}],
        solution: [],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
    ]

  },
  {
    code: "",
    name: "Pot Holes",
    worlds: [
      {
        walls: "0,0,0,0,0,0,0\n" +
               "8,12,0,9,12,0,9",
        beepers: [],
        solution: [{ x: 2, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
      {
        walls: "0,0,0,0,0,0,0\n" +
               "12,0,13,0,13,0,9",
        beepers: [],
        solution: [{ x : 1, y: 1, count: 1 }, { x: 3, y: 1, count: 1 }, { x: 5, y: 1, count: 1 }],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
    ],
  },
  {
    code: "",
    name: "Move the Beepers",
    worlds: [
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [{x: 1, y:0, count: 2}],
        solution: [{x: 2, y:0, count: 2}],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [{x:1, y:0, count: 4}],
        solution: [{x:2, y:0, count: 4}],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
    ]

  },
  {
    code: "",
    name: "Double the Beepers",
    worlds: [
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [{ x: 3, y: 0, count: 3 }],
        solution: [{ x: 3, y: 0, count: 6 }],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [{ x: 3, y: 0, count: 4 }],
        solution: [{ x : 3, y: 0, count: 8 }],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
    ],
  },
  {
    code: "",
    name: "Hospitals",
    worlds: [
      {
        walls:  "8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,12\n" + 
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4",
        beepers: [
          { x: 3, y: 6, count: 1 },
          { x: 9, y: 6, count: 1 },
          { x: 14, y: 6, count: 1 },
        ],
        solution: [
          { x: 3, y: 6, count: 1 },
          { x: 3, y: 5, count: 1 },
          { x: 3, y: 4, count: 1 },       
          { x: 4, y: 6, count: 1 },
          { x: 4, y: 5, count: 1 },
          { x: 4, y: 4, count: 1 },        
          
          { x: 9, y: 6, count: 1 },
          { x: 9, y: 5, count: 1 },
          { x: 9, y: 4, count: 1 },  
          { x: 10, y: 6, count: 1 },
          { x: 10, y: 5, count: 1 },
          { x: 10, y: 4, count: 1 },        
          
          { x: 14, y: 6, count: 1 },
          { x: 14, y: 5, count: 1 },
          { x: 14, y: 4, count: 1 },             
          { x: 15, y: 6, count: 1 },
          { x: 15, y: 5, count: 1 },
          { x: 15, y: 4, count: 1 },             
        ],
        karel: { x: 0, y: 6, direction: 0, isSuper: false }
      },
      {
        walls:  "8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,12\n" + 
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4\n" +
                "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4",
        beepers: [
          { x: 5, y: 6, count: 1 },
          { x: 7, y: 6, count: 1 },
          { x: 14, y: 6, count: 1 },
        ],
        solution: [
          { x: 5, y: 6, count: 1 },
          { x: 5, y: 5, count: 1 },
          { x: 5, y: 4, count: 1 },       
          { x: 6, y: 6, count: 1 },
          { x: 6, y: 5, count: 1 },
          { x: 6, y: 4, count: 1 },        
          
          { x: 7, y: 6, count: 1 },
          { x: 7, y: 5, count: 1 },
          { x: 7, y: 4, count: 1 },  
          { x: 8, y: 6, count: 1 },
          { x: 8, y: 5, count: 1 },
          { x: 8, y: 4, count: 1 },        
          
          { x: 14, y: 6, count: 1 },
          { x: 14, y: 5, count: 1 },
          { x: 14, y: 4, count: 1 },             
          { x: 15, y: 6, count: 1 },
          { x: 15, y: 5, count: 1 },
          { x: 15, y: 4, count: 1 },             
        ],
        karel: { x: 0, y: 6, direction: 0, isSuper: true }
      }
    ],
  },
  {
    code: "",
    name: "Midpoint",
    worlds: [
      {
        walls: "0,0,0,0,0,0,0",
        beepers: [],
        solution: [{ x: 3, y: 0, count: 1 }],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
      {
        walls: "0,0,0,0,0",
        beepers: [],
        solution: [{ x : 2, y: 0, count: 1 }],
        karel: { x: 0, y: 0, direction: 0, isSuper: true }
      },
    ],
  },
  {
    code: "",
    name: "Maze",
    worlds: [
      {
        walls: "2,0,2,0,6,0\n" +
               "0,6,0,0,1,2\n" +
               "4,0,6,6,4,0\n" +
               "4,2,2,4,2,0\n" +
               "0,6,0,2,4,0\n" +
               "4,0,0,4,0,0",
        beepers: [{ x: 5, y: 0, count: 1 }],
        solution: [],
        karel: { x: 0, y: 5, direction: 0, isSuper: true }
      },
      {
        walls: "2,0,2,0,6,0\n" +
               "0,6,0,0,1,2\n" +
               "4,0,6,6,4,0\n" +
               "4,2,2,4,2,0\n" +
               "0,6,0,2,4,0\n" +
               "4,0,0,4,0,0",
        beepers: [{ x: 0, y: 5, count: 1 }],
        solution: [],
        karel: { x: 5, y: 0, direction: 0, isSuper: true }
      },
    ],
  }]
};

