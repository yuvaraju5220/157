AFRAME.registerComponent("marvel", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const postersRef = [
        {
          id: "marvel",
          title: "comic of marvel",
          url: "assets\marvel 1.jpg",
        },
        {
          id: "marvel1",
          title: "the best of marvel",
          url: "assets\marvel4.jpg",
        },
  
        {
          id: "marvel 2",
          title: "the real heroes",
          url: "assets\marvel2.jpg",
        },
        {
          id: "marvel3",
          title: "let's watch them",
          url: "assets\marvel.jpg",
        },
      ];
      
      let prevoiusXPosition = 60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const poster = this.createposter(item);
        borderEl.appendChild(poster);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    
    createposter: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width:20,
        height:28,
      });
      entityEl.setAttribute("position",{x:0,y:5,z:0.1});
      entityEl.setAttribute("material",{src:item.url})
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#F70606",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
    
  });
  