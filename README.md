fast-localStorage
=================

This will increase localStorage read performance dramatically

Usage is simple.   
  

     var Storage = new LStorage(); // Instanciate this inside window.onload or in head
     
     Storage.setItem(key, val); // To set item
     
     val = Storage.getItem(key); // To get item
     
     Storage.removeItem(key); // returns true.
     
