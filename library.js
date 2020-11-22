function colliding(rect1,rect2){
    if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
      && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
      && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
      return true;
  }
  else {
    return false;
    }
  }