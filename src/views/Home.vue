<template>
  <div>
    <h1>Home</h1>

    <table id="input_table">
      <tr> 
        <td>A feladat neve:</td>
        <td><input type="text" id="name_text"></td>
      </tr>
      <tr>
        <td>A feladat állása:</td>
        <td><input type="checkbox" id="allas">Elkészült <input type="checkbox" name="" id="">Nem keszült</td>
      </tr>
      <tr>
        <td>Mikor kezdte a feladatot?</td>
        <td><input type="date" id="date"></td>
      </tr>
      <tr>
        <td colspan="2"><input type="button" @click="addrow()" value="Kész"></td>
      </tr>
    </table>
<br>
  <p v-for="task in tasks" :key="task.id"> {{task.id}} </p>

<br>
    <!--<ul>
      
        v-for
          Bejárunk vele egy tömböt. 
        :key
          Arra kell hogy a v-for tudjon kapcsolodni a tasks id-hoz
        
        a kettőspont (pl: :class, :checked) arra kell hogy ehhez a <li> elemhez kapcsolom a feltételét.
          szóval ha :class belüli érték igaz akkor fog csak érvényesülni, máskülömben nem! 
       
      <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
        <input @click="changeCompleted(task.id)" type="checkbox" :checked="task.completed" />
        {{ task.name }} - {{ task.due }}
      </li>
    </ul> -->

    <table>
      <tr v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
        <input @click="changeCompleted(task.id)" type="checkbox" :checked="task.completed"/>
        <td> {{ task.name }}</td>
        <td>{{ task.due }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

var elem = document.getElementById("name_text");
//var valami = this.tasks.last("id");



//var valami = tasks[""];
//var vissza = valami[valami.lenght-1];

export default {
  name: "home",

  components: {},

  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Első feladat",
          completed: false,
          //due: "2020-11-21"
        },
        {
          id: 2,
          name: "Második feladat",
          completed: true,
          //due: "2020-11-21"
        },
        {
          id: 3,
          name: "Harmadik feladat",
          completed: false,
          //due: "2020-11-21"
        },
        {
          id: 4,
          name: "Negyedik feladat",
          completed: false,
          //due: "2020-11-21"
        }
      ]
    };
  },
  methods: {
    changeCompleted(id) {
      let task = this.tasks.find((task) => task.id == id);
      task.completed = !task.completed;
    },
    addrow(){
      this.tasks.push({ id: this.tasks.last.id , name: elem , completed: false})
      console.log(this.tasks.last)
    }
  }
};



</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: dimgray;
  border-bottom: none;
}

h1 {
  background: black;
  color: white;
  padding: 10px;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 10px 10px;
  position: relative;
  border-bottom: 1px black solid;
}

li:hover {
  background: black;
  color: white;
  transition: 0.275s;
}

#input_table{
  border: 1px solid black;
}
</style>
