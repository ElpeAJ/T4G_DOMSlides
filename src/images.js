const images = [
    "images/DOM.png",
    "images/DOM_As_A_Tree.png",
    "images/Parent-Child_Relationships.png",
    "images/Nodes_And_Elements.png",
    "images/Attributes.png",
    "images/Review1.png",
    "images/Event.png",
    "images/Event_Firing.png",
    "images/JS-Firing_events.png",
    "images/style.png",
    "images/Attributes.png",
    "images/Review1.png",
    "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705200225027-37f2371df0e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705107959309-ca7d26fbeb08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://source.unsplash.com/random",
  ];
  
  let currentImageIndex = 0;
  let totalImage = images.length;
  
  function goBack() {
    if (currentImageIndex === 0) {
      currentImageIndex = totalImage - 1;
    } else {
      currentImageIndex -= 1;
    }
  }
  function goForward() {
    if (currentImageIndex === totalImage - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex += 1;
    }
  }