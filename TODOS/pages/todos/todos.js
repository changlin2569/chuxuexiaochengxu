Page({
  data: {
    input: '',
    todos: [{
        name: "learning html",
        completed: true
      },
      {
        name: "learning JavaScript",
        completed: false
      },
      {
        name: "learning css",
        completed: true
      }
    ],
    idem : 1,
    allcompleted : false
  },
  inputHandle(e) {
    // console.log(e.detail);
    this.setData({
      input: e.detail.value
    })
  },
  addHandle() {
    // console.log(this.data);
    if(this.data.input == '')  return;
    var todos = this.data.todos;
    todos.push({
      name: this.data.input,
      completed: false
    })
    var idem = this.data.idem + 1;
    this.setData({
      todos: todos,
      input : '',
      idem : idem
    })
  },
  carryHandle(e){
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    var item = this.data.todos[index];
    // console.log(item);
    item.completed = !item.completed;
    var idem = this.data.idem + (item.completed ? -1 : 1);
    this.setData({
      todos: this.data.todos,
      idem : idem
    }) 
  //  console.log(this.data.todos);
  },
  removeHandle(e){
    // console.log(e);
    var todos = this.data.todos;
    var idem = this.data.idem + (todos[e.currentTarget.dataset.index].completed ? 0 : -1);
    // console.log(idem);
    
    todos.splice(e.currentTarget.dataset.index,1);
    this.setData({
      todos: todos,
      idem : idem
    })
  },
  toggleHandle(){
    var allcompleted = !this.data.allcompleted;
    for(var i=0;i<this.data.todos.length;i++){
      this.data.todos[i].completed = allcompleted;
    }
    if(allcompleted){
      this.data.idem=0;
    }else{
      this.data.idem = this.data.todos.length;
    }
    this.setData({
      todos:this.data.todos,
      allcompleted: allcompleted,
      idem: this.data.idem
    })
  },
  removeAllHandle(){
   var todos = this.data.todos.filter(item =>  item.completed == false);   
   this.setData({
     todos: todos
   })
  }
})