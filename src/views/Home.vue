<template>
  <div>
    <h1>Home</h1>
    <ul>
      <!--
        v-for
          Bejárunk vele egy tömböt. 
        :key
          Arra kell hogy a v-for tudjon kapcsolodni a tasks id-hoz
        
        a kettőspont (pl: :class, :checked) arra kell hogy ehhez a <li> elemhez kapcsolom a feltételét.
          szóval ha :class belüli érték igaz akkor fog csak érvényesülni, máskülömben nem! 
       -->
      <li v-for="task in tasks" :key="task.id" :class="{completed: task.completed}">
        <input @click="changeCompleted(task.id)" type="checkbox" :checked=task.completed>
        {{task.name}} - {{task.due}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',

  components: {

  },

  data(){
    return{
      tasks: [
        {
          id: 1,
          name: 'Első feladat',
          completed: false,
          due: '2020-11-21'
        },
        {
          id: 2,
          name: 'Második feladat',
          completed: true,
          due: '2020-11-21'
        },
        {
          id: 3,
          name: 'Harmadik feladat',
          completed: false,
          due: '2020-11-21'
        },
        {
          id: 4,
          name: 'Negyedik feladat',
          completed: false,
          due: '2020-11-21'
        },
      ]
    }
  },
  methods: {
    changeCompleted(id){
      let task = this.tasks.find(task => task.id == id)
      task.completed = !task.completed
    },
  },

}
</script>

<style scoped>
.completed{
  text-decoration: line-through;
  color: dimgray;
  border-bottom: none;
}

h1{
  background: black;
  color: white;
  padding: 10px;
  text-align: center;
}

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li{
  margin: 0;
  padding: 10px 10px;
  position: relative;
  border-bottom: 1px black solid;
}

li:hover{
  background: black;
  color: white;
  transition: 0.275s;
}
</style>